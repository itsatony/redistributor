
var Redist = require('../lib/redistributor');
var should = require('should');

var redis = new Redist();

describe(
	'Adding masters server',
	function() {
		it(
			'should build a redis client in the masters serverGroup', 
			function(done) {
				redis._addServer('masters', { host:'127.0.0.1', port: 6379, options: {}});
				should.exist(redis._serverGroups.masters[0]);
				should.exist(redis._serverGroups.masters[0].client);
				// console.log(redis._serverGroups.masters[0].client);
				done();
			}
		);
	}
);

describe(
	'Adding slaves server',
	function() {
		it(
			'should build a redis client in the slavess serverGroup', 
			function(done) {
				redis._addServer('slaves', { host:'localhost', port: 6379, options: {}});
				should.exist(redis._serverGroups.slaves[0]);
				should.exist(redis._serverGroups.slaves[0].client);
				// console.log(redis._serverGroups.slaves[0].client);
				done();
			}
		);
	}
);


describe(
	'send a set',
	function() {
		it(
			'should choose a master and write into redis', 
			function(done) {
				var answer = redis.set(
					'redistributor_test_1', '1'
				);
				answer.should.equal(true);
				done();
			}
		);
	}
);


describe(
	'send a get',
	function() {
		it(
			'should choose a master and write into redis', 
			function(done) {
				var answer = redis.get(
					'redistributor_test_1',
					function(err, reply) {
						should.equal(err, null);
						reply.should.equal('1');
						done();
					}
				);
			}
		);
	}
);



