const assert = require( "assert" );
const wichis = require( "./wichis.js" );

assert.equal( wichis( false, true ), true, "should return true" );

assert.equal( wichis( 1, "hello", true ), 1, "should return 1" );

assert.equal( wichis( "", "yeah", { } ), "yeah", "should return value 'yeah'" );

let test = function hello( ){ };
assert.deepEqual( wichis( false, Symbol.for( "id" ), test ), test, "should return function hello( ){ }" );

assert.deepEqual( wichis( Symbol.for( "cloaked" ), { }, true ), Symbol.for( "cloaked" ), "should return Symbol.for( 'cloaked' )" );

assert.equal( wichis( "", Infinity, true ), Infinity, "should return Infinity" );

assert.deepEqual( wichis( "", false, arguments ), arguments, "should return arguments" );

let test4 = function hello( ){ return "hello" };
assert.deepEqual( wichis( test4,
					function procedure( ){ throw new Error( "no operation" ) } ),
					test4, "should return function hello( ){ return 'hello' }" );

assert.deepEqual( wichis( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should return [ 1, 2, 3 ]" );

assert.deepEqual( wichis( { }, [ ] ), [ ], "should return [ ]" );

assert.deepEqual( wichis( { }, [ "hello" ], { "hello": "world" } ), [ "hello" ], "should return [ 'hello' ]" );

assert.deepEqual( wichis( 0, { }, [ ] ), [ ], "should return [ ]" );

assert.equal( wichis( 0, { }, true ), true, "should return boolean true" );

assert.equal( wichis( null, undefined, NaN.toString( ), true ), NaN.toString( ), "should return value of NaN.toString( )" );

class ClassA{
	constructor( ){ }
	method( ){ return "hello"; }
}

let testA = new ClassA( );
assert.deepEqual( wichis( { }, testA ), testA, "should return value of testA variable" );

assert.deepEqual( wichis( testA, { } ), { }, "should return { }" );

console.log( "ok" );
