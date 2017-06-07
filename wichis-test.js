const assert = require( "assert" );
const wichis = require( "./wichis.js" );

assert.equal( wichis( false, true ), true, "should have boolean true" );
assert.equal( wichis( true, false ), true, "should have boolean true" );
assert.equal( wichis( 0, 1 ), 1, "should have value 1" );
assert.equal( wichis( 0, "" ), "", "should have empty string" );
assert.deepEqual( wichis( 0, { } ), { }, "should have empty object" );
assert.equal( wichis( 0, { }, true ), true, "should have boolean true" );

assert.deepEqual( wichis( { }, [ ] ), [ ], "should have empty array" );
assert.deepEqual( wichis( { }, [ ], { "hello": "world" } ), { "hello": "world" }, "should be equal" );
assert.equal( wichis( Infinity, "", null ), Infinity, "should be equal" );
assert.equal( wichis( "", "yeah", { } ), "yeah", "should have value 'yeah'" );
assert.equal( wichis( "yeah", 0, { } ), "yeah", "should have value 'yeah'" );
assert.deepEqual( wichis( { }, 0, "yeah" ), "yeah", "should be equal" );

console.log( "ok" );
