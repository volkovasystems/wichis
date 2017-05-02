const assert = require( "assert" );
const wichis = require( "./wichis.js" );

assert.ok( wichis( { }, [ ], { "hello": "world" } ) );
assert.ok( wichis( { }, [ ] ) );

console.log( "ok" );
