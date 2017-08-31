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

	describe( "`wichis( false, true )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( wichis( false, true ), true );
		} );
	} );

	describe( "`wichis( 1, 'hello', true )`", ( ) => {
		it( "should be equal to 1", ( ) => {
			assert.equal( wichis( 1, "hello", true ), 1 );
		} );
	} );

	describe( "`wichis( '', 'yeah', { } )`", ( ) => {
		it( "should be equal to value 'yeah'", ( ) => {
			assert.equal( wichis( "", "yeah", { } ), "yeah" );
		} );
	} );

	describe( "`wichis( false, Symbol.for( 'id' ), function hello( ){ } )`", ( ) => {
		it( "should be equal to function hello( ){ }", ( ) => {

			let test = function hello( ){ };
			assert.deepEqual( wichis( false, Symbol.for( "id" ), test ), test );

		} );
	} );

	describe( "`wichis( Symbol.for( 'cloaked' ), { }, true )`", ( ) => {
		it( "should be equal to Symbol.for( 'cloaked' )", ( ) => {
			assert.deepEqual( wichis( Symbol.for( "cloaked" ), { }, true ), Symbol.for( "cloaked" ) );
		} );
	} );

	describe( "`wichis( '', Infinity, true )`", ( ) => {
		it( "should be equal to Infinity", ( ) => {
			assert.equal( wichis( "", Infinity, true ), Infinity );
		} );
	} );

	describe( "`wichis( function hello( ){ return 'hello' },function procedure( ){ throw new Error( 'no operation' ) } )`", ( ) => {
		it( "should be equal to function hello( ){ return 'hello' }", ( ) => {

			let test4 = function hello( ){ return "hello" };

			assert.deepEqual( wichis( test4, function procedure( ){ throw new Error( "no operation" ) } ), test4 );

		} );
	} );

	describe( "`wichis( false, [ ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {

			assert.deepEqual( wichis( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`wichis( { }, [ ] )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			assert.deepEqual( wichis( { }, [ ] ), [ ] );

		} );
	} );

	describe( "`wichis( { }, [ 'hello' ], { 'hello': 'world' } )`", ( ) => {
		it( "should be equal to [ 'hello' ]", ( ) => {

			assert.deepEqual( wichis( { }, [ "hello" ], { "hello": "world" } ), [ "hello" ] );

		} );
	} );

	describe( "`wichis( 0, { }, [ ] )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			assert.deepEqual( wichis( 0, { }, [ ] ), [ ] );

		} );
	} );

	describe( "`wichis( 0, { }, true )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( wichis( 0, { }, true ), true );
		} );
	} );

	describe( "`wichis( null, undefined, NaN.toString( ), true )`", ( ) => {
		it( "should be equal to 'NaN'", ( ) => {
			assert.equal( wichis( null, undefined, NaN.toString( ), true ), NaN.toString( ) );
		} );
	} );

	describe( "`wichis with empty object and instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to instance of class named 'ClassA'", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.deepEqual( wichis( { }, testA ), testA );

		} );
	} );

	describe( "`wichis with instance of class named 'ClassA' and empty object`", ( ) => {
		it( "should be equal to { }", ( ) => {

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


//: @client:

describe( "wichis", ( ) => {

	describe( "`wichis( false, true )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( wichis( false, true ), true );
		} );
	} );

	describe( "`wichis( 1, 'hello', true )`", ( ) => {
		it( "should be equal to 1", ( ) => {
			assert.equal( wichis( 1, "hello", true ), 1 );
		} );
	} );

	describe( "`wichis( '', 'yeah', { } )`", ( ) => {
		it( "should be equal to value 'yeah'", ( ) => {
			assert.equal( wichis( "", "yeah", { } ), "yeah" );
		} );
	} );

	describe( "`wichis( false, Symbol.for( 'id' ), function hello( ){ } )`", ( ) => {
		it( "should be equal to function hello( ){ }", ( ) => {

			let test = function hello( ){ };
			assert.deepEqual( wichis( false, Symbol.for( "id" ), test ), test );

		} );
	} );

	describe( "`wichis( Symbol.for( 'cloaked' ), { }, true )`", ( ) => {
		it( "should be equal to Symbol.for( 'cloaked' )", ( ) => {
			assert.deepEqual( wichis( Symbol.for( "cloaked" ), { }, true ), Symbol.for( "cloaked" ) );
		} );
	} );

	describe( "`wichis( '', Infinity, true )`", ( ) => {
		it( "should be equal to Infinity", ( ) => {
			assert.equal( wichis( "", Infinity, true ), Infinity );
		} );
	} );

	describe( "`wichis( function hello( ){ return 'hello' },function procedure( ){ throw new Error( 'no operation' ) } )`", ( ) => {
		it( "should be equal to function hello( ){ return 'hello' }", ( ) => {

			let test4 = function hello( ){ return "hello" };

			assert.deepEqual( wichis( test4, function procedure( ){ throw new Error( "no operation" ) } ), test4 );

		} );
	} );

	describe( "`wichis( false, [ ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {

			assert.deepEqual( wichis( false, [ ], [ 1, 2, 3 ] ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`wichis( { }, [ ] )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			assert.deepEqual( wichis( { }, [ ] ), [ ] );

		} );
	} );

	describe( "`wichis( { }, [ 'hello' ], { 'hello': 'world' } )`", ( ) => {
		it( "should be equal to [ 'hello' ]", ( ) => {

			assert.deepEqual( wichis( { }, [ "hello" ], { "hello": "world" } ), [ "hello" ] );

		} );
	} );

	describe( "`wichis( 0, { }, [ ] )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			assert.deepEqual( wichis( 0, { }, [ ] ), [ ] );

		} );
	} );

	describe( "`wichis( 0, { }, true )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( wichis( 0, { }, true ), true );
		} );
	} );

	describe( "`wichis( null, undefined, NaN.toString( ), true )`", ( ) => {
		it( "should be equal to 'NaN'", ( ) => {
			assert.equal( wichis( null, undefined, NaN.toString( ), true ), NaN.toString( ) );
		} );
	} );

	describe( "`wichis with empty object and instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to instance of class named 'ClassA'", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.deepEqual( wichis( { }, testA ), testA );

		} );
	} );

	describe( "`wichis with instance of class named 'ClassA' and empty object`", ( ) => {
		it( "should be equal to { }", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.deepEqual( wichis( { }, testA ), testA );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "wichis", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`wichis( false, true )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wichis( false, true );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`wichis( 1, 'hello', true )`", ( ) => {
		it( "should be equal to 1", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wichis( 1, "hello", true );
				}

			).value;

			assert.equal( result, 1 );

		} );
	} );

	describe( "`wichis( '', 'yeah', { } )`", ( ) => {
		it( "should be equal to value 'yeah'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wichis( "", "yeah", { } );
				}

			).value;

			assert.equal( result, "yeah" );

		} );
	} );

	describe( "`wichis( false, Symbol.for( 'id' ), function hello( ){ } )`", ( ) => {
		it( "should be equal to function hello( ){ }", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let test = function hello( ){ };
					return wichis( false, Symbol.for( "id" ), test ) === test;
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`wichis( Symbol.for( 'cloaked' ), { }, true )`", ( ) => {
		it( "should be equal to Symbol.for( 'cloaked' )", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wichis( Symbol.for( "cloaked" ), { }, true ) === Symbol.for( "cloaked" );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`wichis( '', Infinity, true )`", ( ) => {
		it( "should be equal to Infinity", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wichis( "", Infinity, true ).toString( );
				}

			).value;

			assert.equal( result, "Infinity" );
		} );
	} );

	describe( "`wichis( function hello( ){ return 'hello' },function procedure( ){ throw new Error( 'no operation' ) } )`", ( ) => {
		it( "should be equal to function hello( ){ return 'hello' }", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test4 = function hello( ){ return "hello" };
					return wichis( test4, function procedure( ){ throw new Error( "no operation" ) } ) === test4;

				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`wichis( false, [ ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( wichis( false, [ ], [ 1, 2, 3 ] ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`wichis( { }, [ ] )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( wichis( { }, [ ] ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ ] );

		} );
	} );

	describe( "`wichis( { }, [ 'hello' ], { 'hello': 'world' } )`", ( ) => {
		it( "should be equal to [ 'hello' ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( wichis( { }, [ "hello" ], { "hello": "world" } ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ "hello" ] );

		} );
	} );

	describe( "`wichis( 0, { }, [ ] )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( wichis( 0, { }, [ ] ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ ] );

		} );
	} );

	describe( "`wichis( 0, { }, true )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wichis( 0, { }, true );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`wichis( null, undefined, NaN.toString( ), true )`", ( ) => {
		it( "should be equal to 'NaN'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return wichis( null, undefined, NaN.toString( ), true ) == "NaN";
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`wichis with empty object and instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to instance of class named 'ClassA'", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					class ClassA{
						constructor( ){ }
						method( ){ return "hello"; }
					}

					let testA = new ClassA( );

					return wichis( { }, testA ) === testA;

				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`wichis with instance of class named 'ClassA' and empty object`", ( ) => {
		it( "should be equal to { }", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					class ClassA{
						constructor( ){ }
						method( ){ return "hello"; }
					}

					let testA = new ClassA( );

					return wichis( { }, testA ) === testA;

				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
