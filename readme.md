[![build status](https://secure.travis-ci.org/itsatony/redistributor.png)](http://travis-ci.org/itsatony/redistributor)

# reDIStributor

[redis distributor] reDIStributor is a nodeJS library that distributes redis commands to instances by rules.
Default behaviour divides your server instances into masters and slaves.
It then sends all write-type commands to the masters and all read-type commands to the slaves.

It's wrapping the standard node-redis library (along with hiredis), so sending commands follows exactly the same as before.

## initializing

````
var Redist = require('../lib/redistributor');
var redis = new Redist();
````

## adding servers

````
redis._addServer('masters', { host:'127.0.0.1', port: 6379, options: {}});
redis._addServer('slaves', { host:'localhost', port: 6379, options: {}});
````


## sending commands

````
redis.set(
	'redistributor_test_1', 
	'1', 
	function(err, reply) { 
		console.log(err, reply); 
	}
);

redis.get(
	'redistributor_test_1',
	function(err, reply) {
		console.log(err, reply); 
	}
);
````


## defining the rule by which to choose a server from the determined list

````
redis._distributeBy('first');
redis._distributeBy('roundRobin');
redis._distributeBy('random');
````

## enabling debug

````
redis._debug = true;
````



* installing

````
    npm install redistributor
````

* a simple example


# VERSION

v 0.1.0


# author

Toni Wagner


# Licence

free
