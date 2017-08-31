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
              */var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("assert");



//: @client:
var wichis = require("./wichis.support.js");
//: @end-client






//: @client:

describe("wichis", function () {

	describe("`wichis( false, true )`", function () {
		it("should return true", function () {
			assert.equal(wichis(false, true), true);
		});
	});

	describe("`wichis( 1, 'hello', true )`", function () {
		it("should return 1", function () {
			assert.equal(wichis(1, "hello", true), 1);
		});
	});

	describe("`wichis( '', 'yeah', { } )`", function () {
		it("should return value 'yeah'", function () {
			assert.equal(wichis("", "yeah", {}), "yeah");
		});
	});

	describe("`wichis( false, Symbol.for( 'id' ), function hello( ){ } )`", function () {
		it("should return function hello( ){ }", function () {

			var test = function hello() {};
			assert.deepEqual(wichis(false, (0, _for2.default)("id"), test), test);

		});
	});

	describe("`wichis( Symbol.for( 'cloaked' ), { }, true )`", function () {
		it("should return Symbol.for( 'cloaked' )", function () {
			assert.deepEqual(wichis((0, _for2.default)("cloaked"), {}, true), (0, _for2.default)("cloaked"));
		});
	});

	describe("`wichis( '', Infinity, true )`", function () {
		it("should return Infinity", function () {
			assert.equal(wichis("", Infinity, true), Infinity);
		});
	});

	describe("`wichis( function hello( ){ return 'hello' },function procedure( ){ throw new Error( 'no operation' ) } )`", function () {
		it("should return function hello( ){ return 'hello' }", function () {

			var test4 = function hello() {return "hello";};

			assert.deepEqual(wichis(test4, function procedure() {throw new Error("no operation");}), test4);

		});
	});

	describe("`wichis( false, [ ], [ 1, 2, 3 ] )`", function () {
		it("should return [ 1, 2, 3 ]", function () {

			assert.deepEqual(wichis(false, [], [1, 2, 3]), [1, 2, 3]);

		});
	});

	describe("`wichis( { }, [ ] )`", function () {
		it("should return [ ]", function () {

			assert.deepEqual(wichis({}, []), []);

		});
	});

	describe("`wichis( { }, [ 'hello' ], { 'hello': 'world' } )`", function () {
		it("should return [ 'hello' ]", function () {

			assert.deepEqual(wichis({}, ["hello"], { "hello": "world" }), ["hello"]);

		});
	});

	describe("`wichis( 0, { }, [ ] )`", function () {
		it("should return [ ]", function () {

			assert.deepEqual(wichis(0, {}, []), []);

		});
	});

	describe("`wichis( 0, { }, true )`", function () {
		it("should return true", function () {
			assert.equal(wichis(0, {}, true), true);
		});
	});

	describe("`wichis( null, undefined, NaN.toString( ), true )`", function () {
		it("should return 'NaN'", function () {
			assert.equal(wichis(null, undefined, NaN.toString(), true), NaN.toString());
		});
	});

	describe("`wichis with empty object and instance of class named 'ClassA'`", function () {
		it("should return instance of class named 'ClassA'", function () {var

			ClassA = function () {
				function ClassA() {(0, _classCallCheck3.default)(this, ClassA);}(0, _createClass3.default)(ClassA, [{ key: "method", value: function method()
					{return "hello";} }]);return ClassA;}();


			var testA = new ClassA();

			assert.deepEqual(wichis({}, testA), testA);

		});
	});

	describe("`wichis with instance of class named 'ClassA' and empty object`", function () {
		it("should return { }", function () {var

			ClassA = function () {
				function ClassA() {(0, _classCallCheck3.default)(this, ClassA);}(0, _createClass3.default)(ClassA, [{ key: "method", value: function method()
					{return "hello";} }]);return ClassA;}();


			var testA = new ClassA();

			assert.deepEqual(wichis({}, testA), testA);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2ljaGlzIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwidGVzdCIsImhlbGxvIiwiZGVlcEVxdWFsIiwiSW5maW5pdHkiLCJ0ZXN0NCIsInByb2NlZHVyZSIsIkVycm9yIiwidW5kZWZpbmVkIiwiTmFOIiwidG9TdHJpbmciLCJDbGFzc0EiLCJ0ZXN0QSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFNBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87QUFDaENKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxLQUFSLEVBQWUsSUFBZixDQUFkLEVBQXFDLElBQXJDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSxpQkFBSixFQUF1QixZQUFPO0FBQzdCSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBUixFQUFXLE9BQVgsRUFBb0IsSUFBcEIsQ0FBZCxFQUEwQyxDQUExQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4Q0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLEVBQVIsRUFBWSxNQUFaLEVBQW9CLEVBQXBCLENBQWQsRUFBeUMsTUFBekM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSw2REFBVixFQUF5RSxZQUFPO0FBQy9FQyxLQUFJLG9DQUFK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QUpEOztBQU1BWixVQUFVLGlFQUFWLEVBQTZFLFlBQU87QUFDbkZDLEtBQUksZ0RBQUosRUFBc0QsWUFBTzs7QUFFdERZLFNBRnNEO0FBRzNELHNCQUFjLDZDQUFHLENBSDBDO0FBSWxELE1BQUUsT0FBTyxPQUFQLENBQWlCLENBSitCOzs7QUFPNUQsT0FBSUMsUUFBUSxJQUFJRCxNQUFKLEVBQVo7O0FBRUFoQixVQUFPUSxTQUFQLENBQWtCTixPQUFRLEVBQVIsRUFBYWUsS0FBYixDQUFsQixFQUF3Q0EsS0FBeEM7O0FBRUEsR0FYRDtBQVlBLEVBYkQ7O0FBZUFkLFVBQVUsaUVBQVYsRUFBNkUsWUFBTztBQUNuRkMsS0FBSSxtQkFBSixFQUF5QixZQUFPOztBQUV6QlksU0FGeUI7QUFHOUIsc0JBQWMsNkNBQUcsQ0FIYTtBQUlyQixNQUFFLE9BQU8sT0FBUCxDQUFpQixDQUpFOzs7QUFPL0IsT0FBSUMsUUFBUSxJQUFJRCxNQUFKLEVBQVo7O0FBRUFoQixVQUFPUSxTQUFQLENBQWtCTixPQUFRLEVBQVIsRUFBYWUsS0FBYixDQUFsQixFQUF3Q0EsS0FBeEM7O0FBRUEsR0FYRDtBQVlBLEVBYkQ7O0FBZUEsQ0E3SEQ7O0FBK0hBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwid2ljaGlzXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ3aWNoaXMvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3dpY2hpcy5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwid2ljaGlzXCI6IFwid2ljaGlzXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCB3aWNoaXMgPSByZXF1aXJlKCBcIi4vd2ljaGlzLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwid2ljaGlzXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggZmFsc2UsIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGlzKCBmYWxzZSwgdHJ1ZSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggMSwgJ2hlbGxvJywgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gMVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB3aWNoaXMoIDEsIFwiaGVsbG9cIiwgdHJ1ZSApLCAxICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggJycsICd5ZWFoJywgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB2YWx1ZSAneWVhaCdcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGlzKCBcIlwiLCBcInllYWhcIiwgeyB9ICksIFwieWVhaFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggZmFsc2UsIFN5bWJvbC5mb3IoICdpZCcgKSwgZnVuY3Rpb24gaGVsbG8oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZ1bmN0aW9uIGhlbGxvKCApeyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0gZnVuY3Rpb24gaGVsbG8oICl7IH07XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIGZhbHNlLCBTeW1ib2wuZm9yKCBcImlkXCIgKSwgdGVzdCApLCB0ZXN0ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCBTeW1ib2wuZm9yKCAnY2xvYWtlZCcgKSwgeyB9LCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBTeW1ib2wuZm9yKCAnY2xvYWtlZCcgKVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggd2ljaGlzKCBTeW1ib2wuZm9yKCBcImNsb2FrZWRcIiApLCB7IH0sIHRydWUgKSwgU3ltYm9sLmZvciggXCJjbG9ha2VkXCIgKSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoICcnLCBJbmZpbml0eSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGlzKCBcIlwiLCBJbmZpbml0eSwgdHJ1ZSApLCBJbmZpbml0eSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9LGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCAnbm8gb3BlcmF0aW9uJyApIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0NCA9IGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggdGVzdDQsIGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCBcIm5vIG9wZXJhdGlvblwiICkgfSApLCB0ZXN0NCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggZmFsc2UsIFsgXSwgWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggZmFsc2UsIFsgXSwgWyAxLCAyLCAzIF0gKSwgWyAxLCAyLCAzIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIHsgfSwgWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBbIF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggd2ljaGlzKCB7IH0sIFsgXSApLCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIHsgfSwgWyAnaGVsbG8nIF0sIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBbICdoZWxsbycgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIHsgfSwgWyBcImhlbGxvXCIgXSwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICksIFsgXCJoZWxsb1wiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIDAsIHsgfSwgWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBbIF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggd2ljaGlzKCAwLCB7IH0sIFsgXSApLCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIDAsIHsgfSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB3aWNoaXMoIDAsIHsgfSwgdHJ1ZSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggbnVsbCwgdW5kZWZpbmVkLCBOYU4udG9TdHJpbmcoICksIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuICdOYU4nXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hpcyggbnVsbCwgdW5kZWZpbmVkLCBOYU4udG9TdHJpbmcoICksIHRydWUgKSwgTmFOLnRvU3RyaW5nKCApICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyB3aXRoIGVtcHR5IG9iamVjdCBhbmQgaW5zdGFuY2Ugb2YgY2xhc3MgbmFtZWQgJ0NsYXNzQSdgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBpbnN0YW5jZSBvZiBjbGFzcyBuYW1lZCAnQ2xhc3NBJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRjbGFzcyBDbGFzc0F7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cdFx0XHRcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGVzdEEgPSBuZXcgQ2xhc3NBKCApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIHsgfSwgdGVzdEEgKSwgdGVzdEEgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMgd2l0aCBpbnN0YW5jZSBvZiBjbGFzcyBuYW1lZCAnQ2xhc3NBJyBhbmQgZW1wdHkgb2JqZWN0YFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4geyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGNsYXNzIENsYXNzQXtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0bWV0aG9kKCApeyByZXR1cm4gXCJoZWxsb1wiOyB9XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggeyB9LCB0ZXN0QSApLCB0ZXN0QSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
