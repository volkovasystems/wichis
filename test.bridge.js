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

var assert = require("assert");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("wichis", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`wichis( false, true )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichis(false, true);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`wichis( 1, 'hello', true )`", function () {
		it("should return 1", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichis(1, "hello", true);
			}).

			value;

			assert.equal(result, 1);

		});
	});

	describe("`wichis( '', 'yeah', { } )`", function () {
		it("should return value 'yeah'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichis("", "yeah", {});
			}).

			value;

			assert.equal(result, "yeah");

		});
	});

	describe("`wichis( false, Symbol.for( 'id' ), function hello( ){ } )`", function () {
		it("should return function hello( ){ }", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let test = function hello( ){ };
   					return wichis( false, Symbol.for( "id" ), test ) === test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`wichis( Symbol.for( 'cloaked' ), { }, true )`", function () {
		it("should return Symbol.for( 'cloaked' )", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return wichis( Symbol.for( "cloaked" ), { }, true ) === Symbol.for( "cloaked" );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`wichis( '', Infinity, true )`", function () {
		it("should return Infinity", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichis("", Infinity, true).toString();
			}).

			value;

			assert.equal(result, "Infinity");
		});
	});

	describe("`wichis( function hello( ){ return 'hello' },function procedure( ){ throw new Error( 'no operation' ) } )`", function () {
		it("should return function hello( ){ return 'hello' }", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				var test4 = function hello() {return "hello";};
				return wichis(test4, function procedure() {throw new Error("no operation");}) === test4;

			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`wichis( false, [ ], [ 1, 2, 3 ] )`", function () {
		it("should return [ 1, 2, 3 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( wichis( false, [ ], [ 1, 2, 3 ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [1, 2, 3]);

		});
	});

	describe("`wichis( { }, [ ] )`", function () {
		it("should return [ ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( wichis( { }, [ ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), []);

		});
	});

	describe("`wichis( { }, [ 'hello' ], { 'hello': 'world' } )`", function () {
		it("should return [ 'hello' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( wichis( { }, [ "hello" ], { "hello": "world" } ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["hello"]);

		});
	});

	describe("`wichis( 0, { }, [ ] )`", function () {
		it("should return [ ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( wichis( 0, { }, [ ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), []);

		});
	});

	describe("`wichis( 0, { }, true )`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichis(0, {}, true);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`wichis( null, undefined, NaN.toString( ), true )`", function () {
		it("should return 'NaN'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return wichis(null, undefined, NaN.toString(), true) == "NaN";
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`wichis with empty object and instance of class named 'ClassA'`", function () {
		it("should return instance of class named 'ClassA'", function () {
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
			assert.equal(result, true);

		});
	});

	describe("`wichis with instance of class named 'ClassA' and empty object`", function () {
		it("should return { }", function () {
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
			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsIndpY2hpcyIsInZhbHVlIiwiZXF1YWwiLCJJbmZpbml0eSIsInRvU3RyaW5nIiwidGVzdDQiLCJoZWxsbyIsInByb2NlZHVyZSIsIkVycm9yIiwiZGVlcEVxdWFsIiwiSlNPTiIsInBhcnNlIiwidW5kZWZpbmVkIiwiTmFOIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUseUJBQVYsRUFBcUMsWUFBTztBQUMzQ0ksS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxPQUFRLEtBQVIsRUFBZSxJQUFmLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsSUFBdEI7QUFDQSxHQVhEO0FBWUEsRUFiRDs7QUFlQUwsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hESSxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTdCLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FB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VUFBT2MsS0FBUCxDQUFjTixNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBdkJEO0FBd0JBLEVBekJEOztBQTJCQUwsVUFBVSxpRUFBVixFQUE2RSxZQUFPO0FBQ25GSSxLQUFJLG1CQUFKLEVBQXlCLFlBQU87QUFDL0I7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0dQLFVBQU9jLEtBQVAsQ0FBY04sTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXZCRDtBQXdCQSxFQXpCRDs7QUEyQkEsQ0F2UkQ7O0FBeVJBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ3aWNoaXNcIixcblx0XHRcdFwicGF0aFwiOiBcIndpY2hpcy90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvd2ljaGlzLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJ3aWNoaXNcIjogXCJ3aWNoaXNcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwid2ljaGlzXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIGZhbHNlLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gd2ljaGlzKCBmYWxzZSwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggMSwgJ2hlbGxvJywgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gMVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHdpY2hpcyggMSwgXCJoZWxsb1wiLCB0cnVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIDEgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoICcnLCAneWVhaCcsIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdmFsdWUgJ3llYWgnXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gd2ljaGlzKCBcIlwiLCBcInllYWhcIiwgeyB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwieWVhaFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCBmYWxzZSwgU3ltYm9sLmZvciggJ2lkJyApLCBmdW5jdGlvbiBoZWxsbyggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZnVuY3Rpb24gaGVsbG8oICl7IH1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IGZ1bmN0aW9uIGhlbGxvKCApeyB9O1xuXHRcdFx0XHRcdHJldHVybiB3aWNoaXMoIGZhbHNlLCBTeW1ib2wuZm9yKCBcImlkXCIgKSwgdGVzdCApID09PSB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggU3ltYm9sLmZvciggJ2Nsb2FrZWQnICksIHsgfSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gU3ltYm9sLmZvciggJ2Nsb2FrZWQnIClcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gd2ljaGlzKCBTeW1ib2wuZm9yKCBcImNsb2FrZWRcIiApLCB7IH0sIHRydWUgKSA9PT0gU3ltYm9sLmZvciggXCJjbG9ha2VkXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoICcnLCBJbmZpbml0eSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB3aWNoaXMoIFwiXCIsIEluZmluaXR5LCB0cnVlICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwiSW5maW5pdHlcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9LGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCAnbm8gb3BlcmF0aW9uJyApIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB0ZXN0NCA9IGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XG5cdFx0XHRcdFx0cmV0dXJuIHdpY2hpcyggdGVzdDQsIGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCBcIm5vIG9wZXJhdGlvblwiICkgfSApID09PSB0ZXN0NDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gWyAxLCAyLCAzIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHdpY2hpcyggZmFsc2UsIFsgXSwgWyAxLCAyLCAzIF0gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyAxLCAyLCAzIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIHsgfSwgWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBbIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHdpY2hpcyggeyB9LCBbIF0gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCB7IH0sIFsgJ2hlbGxvJyBdLCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gWyAnaGVsbG8nIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHdpY2hpcyggeyB9LCBbIFwiaGVsbG9cIiBdLCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBcImhlbGxvXCIgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggMCwgeyB9LCBbIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIFsgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggd2ljaGlzKCAwLCB7IH0sIFsgXSApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIDAsIHsgfSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHdpY2hpcyggMCwgeyB9LCB0cnVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCBudWxsLCB1bmRlZmluZWQsIE5hTi50b1N0cmluZyggKSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gJ05hTidcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB3aWNoaXMoIG51bGwsIHVuZGVmaW5lZCwgTmFOLnRvU3RyaW5nKCApLCB0cnVlICkgPT0gXCJOYU5cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyB3aXRoIGVtcHR5IG9iamVjdCBhbmQgaW5zdGFuY2Ugb2YgY2xhc3MgbmFtZWQgJ0NsYXNzQSdgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBpbnN0YW5jZSBvZiBjbGFzcyBuYW1lZCAnQ2xhc3NBJ1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0Y2xhc3MgQ2xhc3NBe1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0XHRcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gd2ljaGlzKCB7IH0sIHRlc3RBICkgPT09IHRlc3RBO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzIHdpdGggaW5zdGFuY2Ugb2YgY2xhc3MgbmFtZWQgJ0NsYXNzQScgYW5kIGVtcHR5IG9iamVjdGBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHsgfVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0Y2xhc3MgQ2xhc3NBe1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0XHRcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gd2ljaGlzKCB7IH0sIHRlc3RBICkgPT09IHRlc3RBO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
