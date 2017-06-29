/* global Iterator */

"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @class MutableString 
* @param {string} string */
var MutableString = (function () {
    function MutableString(string) {
        _classCallCheck(this, MutableString);

        this.string = string;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
     * @returns {string}
     
    * @memberof MutableString 
    * @instance 
    * @method charAt */

    _createClass(MutableString, [{
        key: "charAt",
        value: function charAt() {
            var _string;

            return (_string = this.string).charAt.apply(_string, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
         * @returns {Number}
         
        * @memberof MutableString 
        * @instance 
        * @method charCodeAt */
    }, {
        key: "charCodeAt",
        value: function charCodeAt() {
            var _string2;

            return (_string2 = this.string).charCodeAt.apply(_string2, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method concat 
        * @returns {MutableString} */
    }, {
        key: "concat",
        value: function concat() {
            var _string3;

            this.string = (_string3 = this.string).concat.apply(_string3, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
         * @returns {boolean}
         
        * @memberof MutableString 
        * @instance 
        * @method endsWith */
    }, {
        key: "endsWith",
        value: function endsWith() {
            var _string4;

            return (_string4 = this.string).endsWith.apply(_string4, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
         * @returns {boolean}
         
        * @memberof MutableString 
        * @instance 
        * @method includes */
    }, {
        key: "includes",
        value: function includes() {
            var _string5;

            return (_string5 = this.string).includes.apply(_string5, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
         * @returns {Number}
         
        * @memberof MutableString 
        * @instance 
        * @method indexOf */
    }, {
        key: "indexOf",
        value: function indexOf() {
            var _string6;

            return (_string6 = this.string).indexOf.apply(_string6, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
         * @returns {Number}
         
        * @memberof MutableString 
        * @instance 
        * @method lastIndexOf */
    }, {
        key: "lastIndexOf",
        value: function lastIndexOf() {
            var _string7;

            return (_string7 = this.string).lastIndexOf.apply(_string7, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
         * @returns {boolean}
         
        * @memberof MutableString 
        * @instance 
        * @method localeCompare */
    }, {
        key: "localeCompare",
        value: function localeCompare() {
            var _string8;

            return (_string8 = this.string).localeCompare.apply(_string8, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
         * @returns {Array|{index: number, input: string}}
         
        * @memberof MutableString 
        * @instance 
        * @method match */
    }, {
        key: "match",
        value: function match() {
            var _string9;

            return (_string9 = this.string).match.apply(_string9, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method normalize 
        * @returns {MutableString} */
    }, {
        key: "normalize",
        value: function normalize() {
            var _string10;

            this.string = (_string10 = this.string).normalize.apply(_string10, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method repeat 
        * @returns {MutableString} */
    }, {
        key: "repeat",
        value: function repeat() {
            var _string11;

            this.string = (_string11 = this.string).repeat.apply(_string11, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method replace 
        * @returns {MutableString} */
    }, {
        key: "replace",
        value: function replace() {
            var _string12;

            this.string = (_string12 = this.string).replace.apply(_string12, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
         * @returns {Number}
         
        * @memberof MutableString 
        * @instance 
        * @method search */
    }, {
        key: "search",
        value: function search() {
            var _string13;

            return (_string13 = this.string).search.apply(_string13, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method slice 
        * @returns {MutableString} */
    }, {
        key: "slice",
        value: function slice() {
            var _string14;

            this.string = (_string14 = this.string).slice.apply(_string14, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
         * @returns {Array}
         
        * @memberof MutableString 
        * @instance 
        * @method split */
    }, {
        key: "split",
        value: function split() {
            var _string15;

            return (_string15 = this.string).split.apply(_string15, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
         * @returns {boolean}
         
        * @memberof MutableString 
        * @instance 
        * @method startsWith */
    }, {
        key: "startsWith",
        value: function startsWith() {
            var _string16;

            return (_string16 = this.string).startsWith.apply(_string16, arguments);
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method substr 
        * @returns {MutableString} */
    }, {
        key: "substr",
        value: function substr() {
            var _string17;

            this.string = (_string17 = this.string).substr.apply(_string17, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method substring 
        * @returns {MutableString} */
    }, {
        key: "substring",
        value: function substring() {
            var _string18;

            this.string = (_string18 = this.string).substring.apply(_string18, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method toLocaleLowerCase 
        * @returns {MutableString} */
    }, {
        key: "toLocaleLowerCase",
        value: function toLocaleLowerCase() {
            var _string19;

            this.string = (_string19 = this.string).toLocaleLowerCase.apply(_string19, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method toLocaleUpperCase 
        * @returns {MutableString} */
    }, {
        key: "toLocaleUpperCase",
        value: function toLocaleUpperCase() {
            var _string20;

            this.string = (_string20 = this.string).toLocaleUpperCase.apply(_string20, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method toLowerCase 
        * @returns {MutableString} */
    }, {
        key: "toLowerCase",
        value: function toLowerCase() {
            var _string21;

            this.string = (_string21 = this.string).toLowerCase.apply(_string21, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
         * @returns {string}
         
        * @memberof MutableString 
        * @instance 
        * @method toString */
    }, {
        key: "toString",
        value: function toString() {
            return this.string.toString();
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method toUpperCase 
        * @returns {MutableString} */
    }, {
        key: "toUpperCase",
        value: function toUpperCase() {
            var _string22;

            this.string = (_string22 = this.string).toUpperCase.apply(_string22, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method trim 
        * @returns {MutableString} */
    }, {
        key: "trim",
        value: function trim() {
            var _string23;

            this.string = (_string23 = this.string).trim.apply(_string23, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method trimLeft 
        * @returns {MutableString} */
    }, {
        key: "trimLeft",
        value: function trimLeft() {
            var _string24;

            this.string = (_string24 = this.string).trimLeft.apply(_string24, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight
         * @returns {MutableString}
         
        * @memberof MutableString 
        * @instance 
        * @method trimRight 
        * @returns {MutableString} */
    }, {
        key: "trimRight",
        value: function trimRight() {
            var _string25;

            this.string = (_string25 = this.string).trimRight.apply(_string25, arguments);
            return this;
        }

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf
         * @returns {string}
         
        * @memberof MutableString 
        * @instance 
        * @method valueOf */
    }, {
        key: "valueOf",
        value: function valueOf() {
            return this.string.valueOf();
        }

        /**
         * Symbol.iterator
         *
         * @method @@iterator
         
        * @memberof MutableString 
        * @instance 
        * @returns {Iterator} */
    }, {
        key: _Symbol$iterator,
        value: function value() {
            return _getIterator(this.string);
        }
    }]);

    return MutableString;
})();

exports["default"] = MutableString;
module.exports = exports["default"];
//# sourceMappingURL=MutableString.js.map