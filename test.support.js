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
		it("should be equal to true", function () {
			assert.equal(wichis(false, true), true);
		});
	});

	describe("`wichis( 1, 'hello', true )`", function () {
		it("should be equal to 1", function () {
			assert.equal(wichis(1, "hello", true), 1);
		});
	});

	describe("`wichis( '', 'yeah', { } )`", function () {
		it("should be equal to value 'yeah'", function () {
			assert.equal(wichis("", "yeah", {}), "yeah");
		});
	});

	describe("`wichis( false, Symbol.for( 'id' ), function hello( ){ } )`", function () {
		it("should be equal to function hello( ){ }", function () {

			var test = function hello() {};
			assert.deepEqual(wichis(false, (0, _for2.default)("id"), test), test);

		});
	});

	describe("`wichis( Symbol.for( 'cloaked' ), { }, true )`", function () {
		it("should be equal to Symbol.for( 'cloaked' )", function () {
			assert.deepEqual(wichis((0, _for2.default)("cloaked"), {}, true), (0, _for2.default)("cloaked"));
		});
	});

	describe("`wichis( '', Infinity, true )`", function () {
		it("should be equal to Infinity", function () {
			assert.equal(wichis("", Infinity, true), Infinity);
		});
	});

	describe("`wichis( function hello( ){ return 'hello' },function procedure( ){ throw new Error( 'no operation' ) } )`", function () {
		it("should be equal to function hello( ){ return 'hello' }", function () {

			var test4 = function hello() {return "hello";};

			assert.deepEqual(wichis(test4, function procedure() {throw new Error("no operation");}), test4);

		});
	});

	describe("`wichis( false, [ ], [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {

			assert.deepEqual(wichis(false, [], [1, 2, 3]), [1, 2, 3]);

		});
	});

	describe("`wichis( { }, [ ] )`", function () {
		it("should be equal to [ ]", function () {

			assert.deepEqual(wichis({}, []), []);

		});
	});

	describe("`wichis( { }, [ 'hello' ], { 'hello': 'world' } )`", function () {
		it("should be equal to [ 'hello' ]", function () {

			assert.deepEqual(wichis({}, ["hello"], { "hello": "world" }), ["hello"]);

		});
	});

	describe("`wichis( 0, { }, [ ] )`", function () {
		it("should be equal to [ ]", function () {

			assert.deepEqual(wichis(0, {}, []), []);

		});
	});

	describe("`wichis( 0, { }, true )`", function () {
		it("should be equal to true", function () {
			assert.equal(wichis(0, {}, true), true);
		});
	});

	describe("`wichis( null, undefined, NaN.toString( ), true )`", function () {
		it("should be equal to 'NaN'", function () {
			assert.equal(wichis(null, undefined, NaN.toString(), true), NaN.toString());
		});
	});

	describe("`wichis with empty object and instance of class named 'ClassA'`", function () {
		it("should be equal to instance of class named 'ClassA'", function () {var

			ClassA = function () {
				function ClassA() {(0, _classCallCheck3.default)(this, ClassA);}(0, _createClass3.default)(ClassA, [{ key: "method", value: function method()
					{return "hello";} }]);return ClassA;}();


			var testA = new ClassA();

			assert.deepEqual(wichis({}, testA), testA);

		});
	});

	describe("`wichis with instance of class named 'ClassA' and empty object`", function () {
		it("should be equal to { }", function () {var

			ClassA = function () {
				function ClassA() {(0, _classCallCheck3.default)(this, ClassA);}(0, _createClass3.default)(ClassA, [{ key: "method", value: function method()
					{return "hello";} }]);return ClassA;}();


			var testA = new ClassA();

			assert.deepEqual(wichis({}, testA), testA);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2ljaGlzIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwidGVzdCIsImhlbGxvIiwiZGVlcEVxdWFsIiwiSW5maW5pdHkiLCJ0ZXN0NCIsInByb2NlZHVyZSIsIkVycm9yIiwidW5kZWZpbmVkIiwiTmFOIiwidG9TdHJpbmciLCJDbGFzc0EiLCJ0ZXN0QSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFNBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxLQUFSLEVBQWUsSUFBZixDQUFkLEVBQXFDLElBQXJDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSxzQkFBSixFQUE0QixZQUFPO0FBQ2xDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBUixFQUFXLE9BQVgsRUFBb0IsSUFBcEIsQ0FBZCxFQUEwQyxDQUExQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksaUNBQUosRUFBdUMsWUFBTztBQUM3Q0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLEVBQVIsRUFBWSxNQUFaLEVBQW9CLEVBQXBCLENBQWQsRUFBeUMsTUFBekM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSw2REFBVixFQUF5RSxZQUFPO0FBQy9FQyxLQUFJLHlDQUFK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QUpEOztBQU1BWixVQUFVLGlFQUFWLEVBQTZFLFlBQU87QUFDbkZDLEtBQUkscURBQUosRUFBMkQsWUFBTzs7QUFFM0RZLFNBRjJEO0FBR2hFLHNCQUFjLDZDQUFHLENBSCtDO0FBSXZELE1BQUUsT0FBTyxPQUFQLENBQWlCLENBSm9DOzs7QUFPakUsT0FBSUMsUUFBUSxJQUFJRCxNQUFKLEVBQVo7O0FBRUFoQixVQUFPUSxTQUFQLENBQWtCTixPQUFRLEVBQVIsRUFBYWUsS0FBYixDQUFsQixFQUF3Q0EsS0FBeEM7O0FBRUEsR0FYRDtBQVlBLEVBYkQ7O0FBZUFkLFVBQVUsaUVBQVYsRUFBNkUsWUFBTztBQUNuRkMsS0FBSSx3QkFBSixFQUE4QixZQUFPOztBQUU5QlksU0FGOEI7QUFHbkMsc0JBQWMsNkNBQUcsQ0FIa0I7QUFJMUIsTUFBRSxPQUFPLE9BQVAsQ0FBaUIsQ0FKTzs7O0FBT3BDLE9BQUlDLFFBQVEsSUFBSUQsTUFBSixFQUFaOztBQUVBaEIsVUFBT1EsU0FBUCxDQUFrQk4sT0FBUSxFQUFSLEVBQWFlLEtBQWIsQ0FBbEIsRUFBd0NBLEtBQXhDOztBQUVBLEdBWEQ7QUFZQSxFQWJEOztBQWVBLENBN0hEOztBQStIQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIndpY2hpc1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwid2ljaGlzL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy93aWNoaXMuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIndpY2hpc1wiOiBcIndpY2hpc1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3Qgd2ljaGlzID0gcmVxdWlyZSggXCIuL3dpY2hpcy5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcIndpY2hpc1wiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIGZhbHNlLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGlzKCBmYWxzZSwgdHJ1ZSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggMSwgJ2hlbGxvJywgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hpcyggMSwgXCJoZWxsb1wiLCB0cnVlICksIDEgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCAnJywgJ3llYWgnLCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdmFsdWUgJ3llYWgnXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hpcyggXCJcIiwgXCJ5ZWFoXCIsIHsgfSApLCBcInllYWhcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIGZhbHNlLCBTeW1ib2wuZm9yKCAnaWQnICksIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZ1bmN0aW9uIGhlbGxvKCApeyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0gZnVuY3Rpb24gaGVsbG8oICl7IH07XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIGZhbHNlLCBTeW1ib2wuZm9yKCBcImlkXCIgKSwgdGVzdCApLCB0ZXN0ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCBTeW1ib2wuZm9yKCAnY2xvYWtlZCcgKSwgeyB9LCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbC5mb3IoICdjbG9ha2VkJyApXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIFN5bWJvbC5mb3IoIFwiY2xvYWtlZFwiICksIHsgfSwgdHJ1ZSApLCBTeW1ib2wuZm9yKCBcImNsb2FrZWRcIiApICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggJycsIEluZmluaXR5LCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hpcyggXCJcIiwgSW5maW5pdHksIHRydWUgKSwgSW5maW5pdHkgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuICdoZWxsbycgfSxmdW5jdGlvbiBwcm9jZWR1cmUoICl7IHRocm93IG5ldyBFcnJvciggJ25vIG9wZXJhdGlvbicgKSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0NCA9IGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH07XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggdGVzdDQsIGZ1bmN0aW9uIHByb2NlZHVyZSggKXsgdGhyb3cgbmV3IEVycm9yKCBcIm5vIG9wZXJhdGlvblwiICkgfSApLCB0ZXN0NCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggZmFsc2UsIFsgXSwgWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzIF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggd2ljaGlzKCBmYWxzZSwgWyBdLCBbIDEsIDIsIDMgXSApLCBbIDEsIDIsIDMgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggeyB9LCBbIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggeyB9LCBbIF0gKSwgWyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2ljaGlzKCB7IH0sIFsgJ2hlbGxvJyBdLCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdoZWxsbycgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIHsgfSwgWyBcImhlbGxvXCIgXSwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICksIFsgXCJoZWxsb1wiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIDAsIHsgfSwgWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIDAsIHsgfSwgWyBdICksIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyggMCwgeyB9LCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggd2ljaGlzKCAwLCB7IH0sIHRydWUgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3aWNoaXMoIG51bGwsIHVuZGVmaW5lZCwgTmFOLnRvU3RyaW5nKCApLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdOYU4nXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHdpY2hpcyggbnVsbCwgdW5kZWZpbmVkLCBOYU4udG9TdHJpbmcoICksIHRydWUgKSwgTmFOLnRvU3RyaW5nKCApICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyB3aXRoIGVtcHR5IG9iamVjdCBhbmQgaW5zdGFuY2Ugb2YgY2xhc3MgbmFtZWQgJ0NsYXNzQSdgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGluc3RhbmNlIG9mIGNsYXNzIG5hbWVkICdDbGFzc0EnXCIsICggKSA9PiB7XG5cblx0XHRcdGNsYXNzIENsYXNzQXtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0bWV0aG9kKCApeyByZXR1cm4gXCJoZWxsb1wiOyB9XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdpY2hpcyggeyB9LCB0ZXN0QSApLCB0ZXN0QSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdpY2hpcyB3aXRoIGluc3RhbmNlIG9mIGNsYXNzIG5hbWVkICdDbGFzc0EnIGFuZCBlbXB0eSBvYmplY3RgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHsgfVwiLCAoICkgPT4ge1xuXG5cdFx0XHRjbGFzcyBDbGFzc0F7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cdFx0XHRcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGVzdEEgPSBuZXcgQ2xhc3NBKCApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3aWNoaXMoIHsgfSwgdGVzdEEgKSwgdGVzdEEgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
