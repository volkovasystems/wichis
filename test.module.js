"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "wichis",
			"path": "wichis/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/wichis.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"wichis": "wichis"
		}
	@end-include
*/

const assert = require( "assert" );

//: @server:
const wichis = require( "./wichis.js" );
//: @end-server

//: @client:
const wichis = require( "./wichis.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "wichis", ( ) => {
	
} );


//: @end-server


//: @client: 


describe( "wichis", ( ) => {
	

} );

//: @end-client


//: @bridge:



//: @end-bridge












// assert.equal( wichis( false, true ), true, "should return true" );

// assert.equal( wichis( 1, "hello", true ), 1, "should return 1" );

// assert.equal( wichis( "", "yeah", { } ), "yeah", "should return value 'yeah'" );

// let test = function hello( ){ };
// assert.deepEqual( wichis( false, Symbol.for( "id" ), test ), test, "should return function hello( ){ }" );

// assert.deepEqual( wichis( Symbol.for( "cloaked" ), { }, true ), Symbol.for( "cloaked" ), "should return Symbol.for( 'cloaked' )" );

// assert.equal( wichis( "", Infinity, true ), Infinity, "should return Infinity" );

// assert.deepEqual( wichis( "", false, arguments ), arguments, "should return arguments" );

// let test4 = function hello( ){ return "hello" };
// assert.deepEqual( wichis( test4,
// 					function procedure( ){ throw new Error( "no operation" ) } ),
// 					test4, "should return function hello( ){ return 'hello' }" );

// assert.deepEqual( wichis( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should return [ 1, 2, 3 ]" );

// assert.deepEqual( wichis( { }, [ ] ), [ ], "should return [ ]" );

// assert.deepEqual( wichis( { }, [ "hello" ], { "hello": "world" } ), [ "hello" ], "should return [ 'hello' ]" );

// assert.deepEqual( wichis( 0, { }, [ ] ), [ ], "should return [ ]" );

// assert.equal( wichis( 0, { }, true ), true, "should return boolean true" );

// assert.equal( wichis( null, undefined, NaN.toString( ), true ), NaN.toString( ), "should return value of NaN.toString( )" );

// class ClassA{
// 	constructor( ){ }
// 	method( ){ return "hello"; }
// }

// let testA = new ClassA( );
// assert.deepEqual( wichis( { }, testA ), testA, "should return value of testA variable" );

// assert.deepEqual( wichis( testA, { } ), { }, "should return { }" );

// console.log( "ok" );
