
module.exports.all = [
	// 'COMMAND COUNT',
	// 'COMMAND GETKEYS',
	// 'COMMAND INFO',
	'COMMAND',
	// 'CONFIG GET',
	// 'CONFIG RESETSTAT',
	// 'CONFIG REWRITE',
	// 'CONFIG SET',
	'DBSIZE',
	// 'DEBUG OBJECT',
	// 'DEBUG SEGFAULT',
	'DECR',
	'DECRBY',
	'DEL',
	'DISCARD',
	'DUMP',
	'ECHO',
	'EVAL',
	'EVALSHA',
	'EXEC',
	'EXISTS',
	'EXPIRE',
	'EXPIREAT',
	'FLUSHALL',
	'FLUSHDB',
	'GET',
	'GETBIT',
	'GETRANGE',
	'GETSET',
	'HDEL',
	'HEXISTS',
	'HGET',
	'HGETALL',
	'HINCRBY',
	'HINCRBYFLOAT',
	'HKEYS',
	'HLEN',
	'HMGET',
	'HMSET',
	'HSCAN',
	'HSET',
	'HSETNX',
	'HVALS',
	'INCR',
	'INCRBY',
	'INCRBYFLOAT',
	'INFO',
	'KEYS',
	'LASTSAVE',
	'LINDEX',
	'LINSERT',
	'LLEN',
	'LPOP',
	'LPUSH',
	'LPUSHX',
	'LRANGE',
	'LREM',
	'LSET',
	'LTRIM',
	'MGET',
	'MIGRATE',
	'MONITOR',
	'MOVE',
	'MSET',
	'MSETNX',
	'MULTI',
	'OBJECT',
	'PERSIST',
	'PEXPIRE',
	'PEXPIREAT',
	'PFADD',
	'PFCOUNT',
	'PFMERGE',
	'PING',
	'PSETEX',
	'PSUBSCRIBE',
	'PTTL',
	'PUBLISH',
	'PUBSUB',
	'PUNSUBSCRIBE',
	'QUIT',
	'RANDOMKEY',
	'RENAME',
	'RENAMENX',
	'RESTORE',
	'ROLE',
	'RPOP',
	'RPOPLPUSH',
	'RPUSH',
	'RPUSHX',
	'SADD',
	'SAVE',
	'SCAN',
	'SCARD',
	// 'SCRIPT EXISTS',
	// 'SCRIPT FLUSH',
	// 'SCRIPT KILL',
	// 'SCRIPT LOAD',
	'SDIFF',
	'SDIFFSTORE',
	'SELECT',
	'SET',
	'SETBIT',
	'SETEX',
	'SETNX',
	'SETRANGE',
	'SHUTDOWN',
	'SINTER',
	'SINTERSTORE',
	'SISMEMBER',
	'SLAVEOF',
	'SLOWLOG',
	'SMEMBERS',
	'SMOVE',
	'SORT',
	'SPOP',
	'SRANDMEMBER',
	'SREM',
	'SSCAN',
	'STRLEN',
	'SUBSCRIBE',
	'SUNION',
	'SUNIONSTORE',
	'SYNC',
	'TIME',
	'TTL',
	'TYPE',
	'UNSUBSCRIBE',
	'UNWATCH',
	'WATCH',
	'ZADD',
	'ZCARD',
	'ZCOUNT',
	'ZINCRBY',
	'ZINTERSTORE',
	'ZLEXCOUNT',
	'ZRANGE',
	'ZRANGEBYLEX',
	'ZRANGEBYSCORE',
	'ZRANK',
	'ZREM',
	'ZREMRANGEBYLEX',
	'ZREMRANGEBYRANK',
	'ZREMRANGEBYSCORE',
	'ZREVRANGE',
	'ZREVRANGEBYSCORE',
	'ZREVRANK',
	'ZSCAN',
	'ZSCORE',
	'ZUNIONSTORE',
];


module.exports.master = [
	'COMMAND',
	// 'COMMAND COUNT',
	// 'COMMAND GETKEYS',
	// 'COMMAND INFO',
	// 'CONFIG REWRITE',
	// 'CONFIG SET',
	// 'CONFIG RESETSTAT',
	// 'DEBUG OBJECT',
	// 'DEBUG SEGFAULT',
	'DECR',
	'DECRBY',
	'DEL',
	'DISCARD',
	'EVAL',
	'EVALSHA',
	'EXEC',
	'EXPIRE',
	'EXPIREAT',
	'FLUSHALL',
	'FLUSHDB',
	'GETSET',
	'HDEL',
	'HGETALL',
	'HINCRBY',
	'HINCRBYFLOAT',
	'HMSET',
	'HSET',
	'HSETNX',
	'HVALS',
	'INCR',
	'INCRBY',
	'INCRBYFLOAT',
	'LINSERT',
	'LPOP',
	'LPUSH',
	'LPUSHX',
	'LREM',
	'LSET',
	'MIGRATE',
	'LTRIM',
	'MOVE',
	'MSET',
	'MSETNX',
	'MULTI',
	'PERSIST',
	'PEXPIRE',
	'PEXPIREAT',
	'PFADD',
	'PFCOUNT',
	'PFMERGE',
	'PSETEX',
	'PUBLISH',
	'PUNSUBSCRIBE',
	'QUIT',
	'RENAME',
	'RENAMENX',
	'RESTORE',
	'RPOP',
	'RPOPLPUSH',
	'RPUSH',
	'RPUSHX',
	'SADD',
	'SAVE',
	// 'SCRIPT EXISTS',
	// 'SCRIPT FLUSH',
	// 'SCRIPT KILL',
	// 'SCRIPT LOAD',
	'SDIFF',
	'SDIFFSTORE',
	'SET',
	'SETBIT',
	'SETEX',
	'SETNX',
	'SETRANGE',
	'SHUTDOWN',
	'SINTER',
	'SINTERSTORE',
	'SLAVEOF',
	'SLOWLOG',
	'SMOVE',
	'SORT',
	'SPOP',
	'SREM',
	'SUNION',
	'SUNIONSTORE',
	'SYNC',
	'UNSUBSCRIBE',
	'UNWATCH',
	'WATCH',
	'ZADD',
	'ZINCRBY',
	'ZINTERSTORE',
	'ZREM',
	'ZUNIONSTORE',
];

module.exports.slave = [
	// 'CONFIG GET',
	'DBSIZE',
	'DUMP',
	'ECHO',
	'EXISTS',
	'GET',
	'GETBIT',
	'GETRANGE',
	'HEXISTS',
	'HGET',
	'HKEYS',
	'HLEN',
	'HMGET',
	'INFO',
	'KEYS',
	'LASTSAVE',
	'LINDEX',
	'LLEN',
	'LRANGE',
	'MGET',
	'MONITOR',
	'OBJECT',
	'PING',
	'PSUBSCRIBE',
	'PUBSUB',
	'PTTL',
	'RANDOMKEY',
	'ROLE',
	'SCARD',
	'SELECT',
	'SISMEMBER',
	'SMEMBERS',
	'SRANDMEMBER',
	'STRLEN',
	'SUBSCRIBE',
	'TIME',
	'TTL',
	'TYPE',
	'ZCARD',
	'ZLEXCOUNT',
	'ZCOUNT',
	'ZRANGE',
	'ZREMRANGEBYLEX',
	'ZREMRANGEBYRANK',
	'ZREMRANGEBYSCORE',
	'ZRANGEBYLEX',
	'ZRANGEBYSCORE',
	'ZRANK',
	'ZREVRANGE',
	'ZREVRANGEBYSCORE',
	'ZREVRANK',
	'ZSCORE',
	'SCAN',
	'SSCAN',
	'HSCAN',
	'ZSCAN'
];

module.exports.read = [
	// 'CONFIG GET',
	'DBSIZE',
	'DUMP',
	'ECHO',
	'EXISTS',
	'GET',
	'GETBIT',
	'GETRANGE',
	'HEXISTS',
	'HGET',
	'HKEYS',
	'HLEN',
	'HMGET',
	'INFO',
	'KEYS',
	'LASTSAVE',
	'LINDEX',
	'LLEN',
	'LRANGE',
	'MGET',
	'MONITOR',
	'OBJECT',
	'PING',
	'PSUBSCRIBE',
	'PUBSUB',
	'PTTL',
	'RANDOMKEY',
	'ROLE',
	'SCARD',
	'SELECT',
	'SISMEMBER',
	'SMEMBERS',
	'SRANDMEMBER',
	'STRLEN',
	'SUBSCRIBE',
	'TIME',
	'TTL',
	'TYPE',
	'ZCARD',
	'ZLEXCOUNT',
	'ZCOUNT',
	'ZRANGE',
	'ZREMRANGEBYLEX',
	'ZREMRANGEBYRANK',
	'ZREMRANGEBYSCORE',
	'ZRANGEBYLEX',
	'ZRANGEBYSCORE',
	'ZRANK',
	'ZREVRANGE',
	'ZREVRANGEBYSCORE',
	'ZREVRANK',
	'ZSCORE',
	'SCAN',
	'SSCAN',
	'HSCAN',
	'ZSCAN'
];

module.exports.write = [
	'COMMAND',
	// 'COMMAND COUNT',
	// 'COMMAND GETKEYS',
	// 'COMMAND INFO',
	// 'CONFIG REWRITE',
	// 'CONFIG SET',
	// 'CONFIG RESETSTAT',
	// 'DEBUG OBJECT',
	// 'DEBUG SEGFAULT',
	'DECR',
	'DECRBY',
	'DEL',
	'DISCARD',
	'EVAL',
	'EVALSHA',
	'EXEC',
	'EXPIRE',
	'EXPIREAT',
	'FLUSHALL',
	'FLUSHDB',
	'GETSET',
	'HDEL',
	'HGETALL',
	'HINCRBY',
	'HINCRBYFLOAT',
	'HMSET',
	'HSET',
	'HSETNX',
	'HVALS',
	'INCR',
	'INCRBY',
	'INCRBYFLOAT',
	'LINSERT',
	'LPOP',
	'LPUSH',
	'LPUSHX',
	'LREM',
	'LSET',
	'MIGRATE',
	'LTRIM',
	'MOVE',
	'MSET',
	'MSETNX',
	'MULTI',
	'PERSIST',
	'PEXPIRE',
	'PEXPIREAT',
	'PFADD',
	'PFCOUNT',
	'PFMERGE',
	'PSETEX',
	'PUBLISH',
	'PUNSUBSCRIBE',
	'QUIT',
	'RENAME',
	'RENAMENX',
	'RESTORE',
	'RPOP',
	'RPOPLPUSH',
	'RPUSH',
	'RPUSHX',
	'SADD',
	'SAVE',
	// 'SCRIPT EXISTS',
	// 'SCRIPT FLUSH',
	// 'SCRIPT KILL',
	// 'SCRIPT LOAD',
	'SDIFF',
	'SDIFFSTORE',
	'SET',
	'SETBIT',
	'SETEX',
	'SETNX',
	'SETRANGE',
	'SHUTDOWN',
	'SINTER',
	'SINTERSTORE',
	'SLAVEOF',
	'SLOWLOG',
	'SMOVE',
	'SORT',
	'SPOP',
	'SREM',
	'SUNION',
	'SUNIONSTORE',
	'SYNC',
	'UNSUBSCRIBE',
	'UNWATCH',
	'WATCH',
	'ZADD',
	'ZINCRBY',
	'ZINTERSTORE',
	'ZREM',
	'ZUNIONSTORE'
];