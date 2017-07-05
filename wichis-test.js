const assert = require( "assert" );
const wichis = require( "./wichis.js" );

assert.equal( wichis( false, true ), true, "should have boolean true" );

assert.equal( wichis( 1, "hello", true ), 1, "should return 1" );

assert.equal( wichis( "", "yeah", { } ), "yeah", "should have value 'yeah'" );

let test = function hello( ){ };
assert.deepEqual( wichis( false, Symbol.for( "id" ), test ), test, "should return value of test variable" );

assert.deepEqual( wichis( Symbol.for( "cloaked" ), { }, true ), Symbol.for( "cloaked" ), "should be deeply equal" );

assert.equal( wichis( "", Infinity, true ), Infinity, "should be equal" );

assert.deepEqual( wichis( "", false, arguments ), arguments, "should return arguments" );

let test4 = function hello( ){ return "hello" };
assert.deepEqual( wichis( test4,
					function procedure( ){ throw new Error( "no operation" ) } ),
					test4, "should be deeply equal" );

assert.deepEqual( wichis( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should be deeply equal" );

assert.deepEqual( wichis( { }, [ ] ), [ ], "should have empty array" );

assert.deepEqual( wichis( { }, [ "hello" ], { "hello": "world" } ), [ "hello" ], "should be equal" );

assert.deepEqual( wichis( 0, { }, [ ] ), [ ], "should return empty array" );

assert.equal( wichis( 0, { }, true ), true, "should have boolean true" );

assert.equal( wichis( null, undefined, NaN.toString( ), true ), NaN.toString( ), "should be equal" );

class ClassA{
	constructor( ){ }
	method( ){ return "hello"; }
}

let testA = new ClassA( );
assert.deepEqual( wichis( { }, testA ), testA, "should be deeply equal" );
assert.deepEqual( wichis( testA, { } ), { }, "should be deeply equal" );

console.log( "ok" );
