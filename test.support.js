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



//: @client:
var wichis = require("./wichis.support.js");
//: @end-client






//: @client: 


describe("wichis", function () {


});

//: @end-client















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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2ljaGlzIiwiZGVzY3JpYmUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7OztBQU9BOzs7QUFHQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87OztBQUcxQixDQUhEOztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwid2ljaGlzXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIndpY2hpcy90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvd2ljaGlzLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwid2ljaGlzXCI6IFwid2ljaGlzXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IHdpY2hpcyA9IHJlcXVpcmUoIFwiLi93aWNoaXMuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDogXHJcblxyXG5cclxuZGVzY3JpYmUoIFwid2ljaGlzXCIsICggKSA9PiB7XHJcblx0XHJcblxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB3aWNoaXMoIGZhbHNlLCB0cnVlICksIHRydWUsIFwic2hvdWxkIHJldHVybiB0cnVlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggd2ljaGlzKCAxLCBcImhlbGxvXCIsIHRydWUgKSwgMSwgXCJzaG91bGQgcmV0dXJuIDFcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB3aWNoaXMoIFwiXCIsIFwieWVhaFwiLCB7IH0gKSwgXCJ5ZWFoXCIsIFwic2hvdWxkIHJldHVybiB2YWx1ZSAneWVhaCdcIiApO1xyXG5cclxuLy8gbGV0IHRlc3QgPSBmdW5jdGlvbiBoZWxsbyggKXsgfTtcclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggd2ljaGlzKCBmYWxzZSwgU3ltYm9sLmZvciggXCJpZFwiICksIHRlc3QgKSwgdGVzdCwgXCJzaG91bGQgcmV0dXJuIGZ1bmN0aW9uIGhlbGxvKCApeyB9XCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggU3ltYm9sLmZvciggXCJjbG9ha2VkXCIgKSwgeyB9LCB0cnVlICksIFN5bWJvbC5mb3IoIFwiY2xvYWtlZFwiICksIFwic2hvdWxkIHJldHVybiBTeW1ib2wuZm9yKCAnY2xvYWtlZCcgKVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hpcyggXCJcIiwgSW5maW5pdHksIHRydWUgKSwgSW5maW5pdHksIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIFwiXCIsIGZhbHNlLCBhcmd1bWVudHMgKSwgYXJndW1lbnRzLCBcInNob3VsZCByZXR1cm4gYXJndW1lbnRzXCIgKTtcclxuXHJcbi8vIGxldCB0ZXN0NCA9IGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggdGVzdDQsXHJcbi8vIFx0XHRcdFx0XHRmdW5jdGlvbiBwcm9jZWR1cmUoICl7IHRocm93IG5ldyBFcnJvciggXCJubyBvcGVyYXRpb25cIiApIH0gKSxcclxuLy8gXHRcdFx0XHRcdHRlc3Q0LCBcInNob3VsZCByZXR1cm4gZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiAnaGVsbG8nIH1cIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggd2ljaGlzKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApLCBbIDEsIDIsIDMgXSwgXCJzaG91bGQgcmV0dXJuIFsgMSwgMiwgMyBdXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggeyB9LCBbIF0gKSwgWyBdLCBcInNob3VsZCByZXR1cm4gWyBdXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggeyB9LCBbIFwiaGVsbG9cIiBdLCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKSwgWyBcImhlbGxvXCIgXSwgXCJzaG91bGQgcmV0dXJuIFsgJ2hlbGxvJyBdXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggMCwgeyB9LCBbIF0gKSwgWyBdLCBcInNob3VsZCByZXR1cm4gWyBdXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggd2ljaGlzKCAwLCB7IH0sIHRydWUgKSwgdHJ1ZSwgXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHdpY2hpcyggbnVsbCwgdW5kZWZpbmVkLCBOYU4udG9TdHJpbmcoICksIHRydWUgKSwgTmFOLnRvU3RyaW5nKCApLCBcInNob3VsZCByZXR1cm4gdmFsdWUgb2YgTmFOLnRvU3RyaW5nKCApXCIgKTtcclxuXHJcbi8vIGNsYXNzIENsYXNzQXtcclxuLy8gXHRjb25zdHJ1Y3RvciggKXsgfVxyXG4vLyBcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxyXG4vLyB9XHJcblxyXG4vLyBsZXQgdGVzdEEgPSBuZXcgQ2xhc3NBKCApO1xyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIHsgfSwgdGVzdEEgKSwgdGVzdEEsIFwic2hvdWxkIHJldHVybiB2YWx1ZSBvZiB0ZXN0QSB2YXJpYWJsZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIHRlc3RBLCB7IH0gKSwgeyB9LCBcInNob3VsZCByZXR1cm4geyB9XCIgKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCBcIm9rXCIgKTtcclxuIl19
//# sourceMappingURL=test.support.js.map
