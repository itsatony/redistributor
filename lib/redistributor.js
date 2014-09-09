var commandGroups = require(__dirname + '/commandgroups');
var redis = require('redis');


var Redistributor = function() {
	this._version = '0.1.0';
	this._distributionFunction = this._distributionSystems.first;
	this._serverGroups = {
		masters: [],
		slaves: []
	};
	this._commandGroups = commandGroups;
	this._debug = false;
	this._rules = [
		{
			commandGroupId: 'write',
			serverGroupId: 'masters'
		},
		{
			commandGroupId: 'read',
			serverGroupId: 'slaves'
		},
		{
			commandGroupId: 'all',
			serverGroupId: 'masters'
		}
	];
	this._wrapClientCommands();
};

module.exports = Redistributor;


Redistributor.prototype._wrapClientCommands = function() {	
	for (var n=0; n<this._commandGroups.all.length; n+=1) {
		var cmdName = this._commandGroups.all[n];
		var handler = this._commandWrapper(cmdName);
		this[cmdName.toUpperCase()] = handler.bind(handler);
		this[cmdName.toLowerCase()] = handler.bind(handler);
	}
	return this;
};


Redistributor.prototype._commandWrapper = function(command) {
	var thisRedistributor = this;
	var callHandler = function() {
		var parameters = [];
		for (var n in arguments) {
			parameters.push(arguments[n]);
		}
		var server = thisRedistributor._distribute(this._commandName);
		return server.client[this._commandName].apply(server.client, parameters);
	};
	callHandler._commandName = command;
	callHandler.bind(callHandler);
	return callHandler;
};


Redistributor.prototype._addServer = function(group, config) {
	if (typeof this._serverGroups[group] !== 'object') {
		this._serverGroups[group] = [];
	}
	var server = {
		config: config,
		client: redis.createClient(config.port, config.host, config.options)
	};
	this._serverGroups[group].push(server);
	return this;
};


Redistributor.prototype._removeServer = function(group, config) {
	for (var n=0; n<this._serverGroups[group].length; n+=1) {
		if (
			this._serverGroups[group][n].config.host === config.host
			&& this._serverGroups[group][n].config.port === config.port
		) {
			this._serverGroups[group].splice(n, 1);
			break;
		}
	}
	return this;
};


Redistributor.prototype._addRule = function(commandGroupId, serverGroupId) {
	this._rules.push({commandGroupId: commandGroupId, serverGroupId: serverGroupId});
	return this;
};


Redistributor.prototype._removeRule = function(commandGroupId, serverGroupId) {
	for (var n=0; n<this._rules.length; n+=1) {
		if (
			this._rules[n].commandGroupId === commandGroupId
			&& this._rules[n].serverGroupId === serverGroupId
		) {
			this._rules.splice(n, 1);
			break;
		}
	}
	return this;
};


Redistributor.prototype._distributeBy = function(method) {
	this._distributionFunction = 
		(typeof this._distributionSystems[method] === 'function') 
		?
			this._distributionSystems[method]
		:
			this._distributionSystems['first']
	;
	return this;
};


Redistributor.prototype._distributionSystems = {
	roundRobin: function(serverGroupId) {
		var server = this._serverGroups[serverGroupId].shift();
		this._serverGroups[serverGroupId].push(server);
		return server;
	},
	first: function(serverGroupId) {
		var server = this._serverGroups[serverGroupId][0];
		return server;
	},
	random: function(serverGroupId) {
		var rnd = Math.floor(Math.random() * this._serverGroups[serverGroupId].length);
		var server = this._serverGroups[serverGroupId][rnd];
		return server;
	}
};


Redistributor.prototype._distribute = function(command) {
	var serverGroupId = this._getServerGroupIdByCommand(command);
	var server = false;
	if (
		typeof this._serverGroups[serverGroupId] === 'object' 
		&& this._serverGroups[serverGroupId].length > 0
	) {
		server = this._distributionFunction(serverGroupId);
	}
	if (this._debug === true) {
		console.log();
		console.log('[reDIStributor] --=== distributed ===--', command, serverGroupId, server.config.host);
	}
	return server;
};


Redistributor.prototype._getServerGroupIdByCommand = function(command) {
	var cmd = command.toUpperCase();
	for (var ruleIndex=0; ruleIndex<this._rules.length; ruleIndex+=1) {
		if (this._commandGroups[this._rules[ruleIndex].commandGroupId].indexOf(cmd) > -1) {
			return this._rules[ruleIndex].serverGroupId;
		}
	}
	return false;
};


