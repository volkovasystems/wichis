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





//: @server:

describe( "wichis", ( ) => {

	describe( "`wichis( false, true )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( wichis( false, true ), true );
		} );
	} );

	describe( "`wichis( 1, 'hello', true )`", ( ) => {
		it( "should return 1", ( ) => {
			assert.equal( wichis( 1, "hello", true ), 1 );
		} );
	} );

	describe( "`wichis( '', 'yeah', { } )`", ( ) => {
		it( "should return value 'yeah'", ( ) => {
			assert.equal( wichis( "", "yeah", { } ), "yeah" );
		} );
	} );

	describe( "`wichis( false, Symbol.for( 'id' ), function hello( ){ } )`", ( ) => {
		it( "should return function hello( ){ }", ( ) => {

			let test = function hello( ){ };
			assert.deepEqual( wichis( false, Symbol.for( "id" ), test ), test );

		} );
	} );

	describe( "`wichis( Symbol.for( 'cloaked' ), { }, true )`", ( ) => {
		it( "should return Symbol.for( 'cloaked' )", ( ) => {
			assert.deepEqual( wichis( Symbol.for( "cloaked" ), { }, true ), Symbol.for( "cloaked" ) );
		} );
	} );

	describe( "`wichis( '', Infinity, true )`", ( ) => {
		it( "should return Infinity", ( ) => {
			assert.equal( wichis( "", Infinity, true ), Infinity );
		} );
	} );

	describe( "`wichis( function hello( ){ return 'hello' },function procedure( ){ throw new Error( 'no operation' ) } )`", ( ) => {
		it( "should return function hello( ){ return 'hello' }", ( ) => {

			let test4 = function hello( ){ return "hello" };

			assert.deepEqual( wichis( test4, function procedure( ){ throw new Error( "no operation" ) } ), test4 );

		} );
	} );

	describe( "`wichis( false, [ ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should return [ 1, 2, 3 ]", ( ) => {

			assert.deepEqual( wichis( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`wichis( { }, [ ] )`", ( ) => {
		it( "should return [ ]", ( ) => {

			assert.deepEqual( wichis( { }, [ ] ), [ ] );

		} );
	} );

	describe( "`wichis( { }, [ 'hello' ], { 'hello': 'world' } )`", ( ) => {
		it( "should return [ 'hello' ]", ( ) => {

			assert.deepEqual( wichis( { }, [ "hello" ], { "hello": "world" } ), [ "hello" ] );

		} );
	} );

	describe( "`wichis( 0, { }, [ ] )`", ( ) => {
		it( "should return [ ]", ( ) => {

			assert.deepEqual( wichis( 0, { }, [ ] ), [ ] );

		} );
	} );

	describe( "`wichis( 0, { }, true )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( wichis( 0, { }, true ), true );
		} );
	} );

	describe( "`wichis( null, undefined, NaN.toString( ), true )`", ( ) => {
		it( "should return 'NaN'", ( ) => {
			assert.equal( wichis( null, undefined, NaN.toString( ), true ), NaN.toString( ) );
		} );
	} );

	describe( "`wichis with empty object and instance of class named 'ClassA'`", ( ) => {
		it( "should return instance of class named 'ClassA'", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.deepEqual( wichis( { }, testA ), testA );

		} );
	} );

	describe( "`wichis with instance of class named 'ClassA' and empty object`", ( ) => {
		it( "should return { }", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.deepEqual( wichis( { }, testA ), testA );

		} );
	} );

} );

//: @end-server






