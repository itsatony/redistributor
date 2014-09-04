[![build status](https://secure.travis-ci.org/itsatony/redistributor.png)](http://travis-ci.org/itsatony/redistributor)

# reDIStributor

[redis distributor] reDIStributor is a nodeJS library that distributes redis commands to instances by rules.
Default behaviour divides your server instances into masters and slaves.
It then sends all write-type commands to the masters and all read-type commands to the slaves.

It's wrapping the standard node-redis library (along with hiredis), so sending commands follows exactly the same as before.


## installing

````
npm install redistributor
````


## initializing

````
var Redistributor = require('redistributor');
var redisClient = new Redistributor();
````

## adding servers

````
redisClient._addServer('masters', { host:'127.0.0.1', port: 6379, options: {}});
redisClient._addServer('slaves', { host:'localhost', port: 6379, options: {}});
````


## sending commands

````
redisClient.set(
	'redistributor_test_1', 
	'1', 
	function(err, reply) { 
		console.log(err, reply); 
	}
);

redisClient.get(
	'redistributor_test_1',
	function(err, reply) {
		console.log(err, reply); 
	}
);
````


## defining the rule by which to choose a server from the determined list

````
redisClient._distributeBy('first');
redisClient._distributeBy('roundRobin');
redisClient._distributeBy('random');
````

## enabling debug

````
redisClient._debug = true;
````






# VERSION

v 0.1.0


# author

Toni Wagner


# Licence

free
