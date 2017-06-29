/* global suite, test */
/* eslint yoda:0 */

'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Object$is = require('babel-runtime/core-js/object/is')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

require('core-js');

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var _libMutableString = require('../../lib/MutableString');

var _libMutableString2 = _interopRequireDefault(_libMutableString);

var strings = ['', 'hello', '\n', 'Hello\n'];

test('charAt', function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _getIterator(strings), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var string = _step.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].strictEqual(mutableString.charAt(0), string.charAt(0));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
});

test('charCodeAt', function () {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = _getIterator(strings), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var string = _step2.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].isTrue(_Object$is(mutableString.charCodeAt(0), string.charCodeAt(0)));
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
});

test('concat', function () {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = _getIterator(strings), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var string = _step3.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.concat('test', 'test2');
            _proclaim2['default'].strictEqual(mutableString.string, string.concat('test', 'test2'));
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                _iterator3['return']();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
});

test('endsWith', function () {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = _getIterator(strings), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var string = _step4.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].strictEqual(mutableString.endsWith('o'), string.endsWith('o'));
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                _iterator4['return']();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
});

test('includes', function () {
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = _getIterator(strings), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var string = _step5.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].strictEqual(mutableString.includes('l'), string.includes('l'));
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                _iterator5['return']();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    _proclaim2['default'].isTrue('foobar'.includes('bar'));
    _proclaim2['default'].isTrue('foobar'.includes(new _libMutableString2['default']('bar')));
    _proclaim2['default'].isTrue(new _libMutableString2['default']('foobar').includes('bar'));

    _proclaim2['default'].isFalse('foobar'.includes('foooo'));
    _proclaim2['default'].isFalse('foobar'.includes(new _libMutableString2['default']('foooo')));
    _proclaim2['default'].isFalse(new _libMutableString2['default']('foobar').includes('foooo'));
});

test('indexOf', function () {
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = _getIterator(strings), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var string = _step6.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].strictEqual(mutableString.indexOf('h'), string.indexOf('h'));
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6['return']) {
                _iterator6['return']();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }
});

test('lastIndexOf', function () {
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        for (var _iterator7 = _getIterator(strings), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var string = _step7.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].strictEqual(mutableString.lastIndexOf('l'), string.lastIndexOf('l'));
        }
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator7['return']) {
                _iterator7['return']();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }
});

test('match', function () {
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
        for (var _iterator8 = _getIterator(strings), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var string = _step8.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].deepEqual(mutableString.match(/lo/), string.match(/lo/));
        }
    } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion8 && _iterator8['return']) {
                _iterator8['return']();
            }
        } finally {
            if (_didIteratorError8) {
                throw _iteratorError8;
            }
        }
    }

    _proclaim2['default'].deepEqual('foobar'.match(new _libMutableString2['default']('foo')), 'foobar'.match('foo'));

    _proclaim2['default'].deepEqual(new _libMutableString2['default']('foobar').match('foo'), 'foobar'.match('foo'));
});

test('repeat', function () {
    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
        for (var _iterator9 = _getIterator(strings), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var string = _step9.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.repeat(5);
            _proclaim2['default'].strictEqual(mutableString.string, string.repeat(5));
        }
    } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion9 && _iterator9['return']) {
                _iterator9['return']();
            }
        } finally {
            if (_didIteratorError9) {
                throw _iteratorError9;
            }
        }
    }
});

test('replace', function () {
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
        for (var _iterator10 = _getIterator(strings), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var string = _step10.value;

            var _mutableString = new _libMutableString2['default'](string);
            _mutableString.replace('l', 'lll');
            _proclaim2['default'].strictEqual(_mutableString.string, string.replace('l', 'lll'));
        }
    } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion10 && _iterator10['return']) {
                _iterator10['return']();
            }
        } finally {
            if (_didIteratorError10) {
                throw _iteratorError10;
            }
        }
    }

    _proclaim2['default'].strictEqual('foobar'.replace('bar', 'foo'), 'foobar'.replace(new _libMutableString2['default']('bar'), new _libMutableString2['default']('foo')));

    var mutableString = new _libMutableString2['default']('foobar');
    mutableString.replace('bar', 'foo');
    _proclaim2['default'].strictEqual(mutableString.toString(), 'foofoo');
});

test('search', function () {
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
        for (var _iterator11 = _getIterator(strings), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var string = _step11.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].strictEqual(mutableString.search(/\s+/), string.search(/\s+/));
        }
    } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion11 && _iterator11['return']) {
                _iterator11['return']();
            }
        } finally {
            if (_didIteratorError11) {
                throw _iteratorError11;
            }
        }
    }
});

test('slice', function () {
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
        for (var _iterator12 = _getIterator(strings), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
            var string = _step12.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.slice(-3, -1);
            _proclaim2['default'].strictEqual(mutableString.string, string.slice(-3, -1));
        }
    } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion12 && _iterator12['return']) {
                _iterator12['return']();
            }
        } finally {
            if (_didIteratorError12) {
                throw _iteratorError12;
            }
        }
    }
});

test('split', function () {
    var _iteratorNormalCompletion13 = true;
    var _didIteratorError13 = false;
    var _iteratorError13 = undefined;

    try {
        for (var _iterator13 = _getIterator(strings), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var string = _step13.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].deepEqual(mutableString.split('\n'), string.split('\n'));
        }
    } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion13 && _iterator13['return']) {
                _iterator13['return']();
            }
        } finally {
            if (_didIteratorError13) {
                throw _iteratorError13;
            }
        }
    }
});

test('startsWith', function () {
    var _iteratorNormalCompletion14 = true;
    var _didIteratorError14 = false;
    var _iteratorError14 = undefined;

    try {
        for (var _iterator14 = _getIterator(strings), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var string = _step14.value;

            var mutableString = new _libMutableString2['default'](string);
            _proclaim2['default'].strictEqual(mutableString.startsWith('h'), string.startsWith('h'));
        }
    } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion14 && _iterator14['return']) {
                _iterator14['return']();
            }
        } finally {
            if (_didIteratorError14) {
                throw _iteratorError14;
            }
        }
    }
});

test('substr', function () {
    var _iteratorNormalCompletion15 = true;
    var _didIteratorError15 = false;
    var _iteratorError15 = undefined;

    try {
        for (var _iterator15 = _getIterator(strings), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var string = _step15.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.substr(0, 1);
            _proclaim2['default'].strictEqual(mutableString.string, string.substr(0, 1));
        }
    } catch (err) {
        _didIteratorError15 = true;
        _iteratorError15 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion15 && _iterator15['return']) {
                _iterator15['return']();
            }
        } finally {
            if (_didIteratorError15) {
                throw _iteratorError15;
            }
        }
    }
});

test('substring', function () {
    var _iteratorNormalCompletion16 = true;
    var _didIteratorError16 = false;
    var _iteratorError16 = undefined;

    try {
        for (var _iterator16 = _getIterator(strings), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var string = _step16.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.substring(0, 1);
            _proclaim2['default'].strictEqual(mutableString.string, string.substring(0, 1));
        }
    } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion16 && _iterator16['return']) {
                _iterator16['return']();
            }
        } finally {
            if (_didIteratorError16) {
                throw _iteratorError16;
            }
        }
    }
});

test('toLowerCase', function () {
    var _iteratorNormalCompletion17 = true;
    var _didIteratorError17 = false;
    var _iteratorError17 = undefined;

    try {
        for (var _iterator17 = _getIterator(strings), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var string = _step17.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.toLowerCase();
            _proclaim2['default'].strictEqual(mutableString.string, string.toLowerCase());
        }
    } catch (err) {
        _didIteratorError17 = true;
        _iteratorError17 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion17 && _iterator17['return']) {
                _iterator17['return']();
            }
        } finally {
            if (_didIteratorError17) {
                throw _iteratorError17;
            }
        }
    }
});

test('toUpperCase', function () {
    var _iteratorNormalCompletion18 = true;
    var _didIteratorError18 = false;
    var _iteratorError18 = undefined;

    try {
        for (var _iterator18 = _getIterator(strings), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
            var string = _step18.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.toUpperCase();
            _proclaim2['default'].strictEqual(mutableString.string, string.toUpperCase());
        }
    } catch (err) {
        _didIteratorError18 = true;
        _iteratorError18 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion18 && _iterator18['return']) {
                _iterator18['return']();
            }
        } finally {
            if (_didIteratorError18) {
                throw _iteratorError18;
            }
        }
    }
});

test('trim', function () {
    var _iteratorNormalCompletion19 = true;
    var _didIteratorError19 = false;
    var _iteratorError19 = undefined;

    try {
        for (var _iterator19 = _getIterator(strings), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var string = _step19.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.trim();
            _proclaim2['default'].strictEqual(mutableString.string, string.trim());
        }
    } catch (err) {
        _didIteratorError19 = true;
        _iteratorError19 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion19 && _iterator19['return']) {
                _iterator19['return']();
            }
        } finally {
            if (_didIteratorError19) {
                throw _iteratorError19;
            }
        }
    }
});

test('trimLeft', function () {
    var _iteratorNormalCompletion20 = true;
    var _didIteratorError20 = false;
    var _iteratorError20 = undefined;

    try {
        for (var _iterator20 = _getIterator(strings), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var string = _step20.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.trimLeft();
            _proclaim2['default'].strictEqual(mutableString.string, string.trimLeft());
        }
    } catch (err) {
        _didIteratorError20 = true;
        _iteratorError20 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion20 && _iterator20['return']) {
                _iterator20['return']();
            }
        } finally {
            if (_didIteratorError20) {
                throw _iteratorError20;
            }
        }
    }
});

test('trimRight', function () {
    var _iteratorNormalCompletion21 = true;
    var _didIteratorError21 = false;
    var _iteratorError21 = undefined;

    try {
        for (var _iterator21 = _getIterator(strings), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
            var string = _step21.value;

            var mutableString = new _libMutableString2['default'](string);
            mutableString.trimRight();
            _proclaim2['default'].strictEqual(mutableString.string, string.trimRight());
        }
    } catch (err) {
        _didIteratorError21 = true;
        _iteratorError21 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion21 && _iterator21['return']) {
                _iterator21['return']();
            }
        } finally {
            if (_didIteratorError21) {
                throw _iteratorError21;
            }
        }
    }
});

test('operations', function () {
    _proclaim2['default'].isTrue('a' < 'b');
    _proclaim2['default'].isTrue('a' < new _libMutableString2['default']('b'));
    _proclaim2['default'].isTrue(new _libMutableString2['default']('a') < 'b');

    _proclaim2['default'].isFalse('a' > 'b');
    _proclaim2['default'].isFalse('a' > new _libMutableString2['default']('b'));
    _proclaim2['default'].isFalse(new _libMutableString2['default']('a') > 'b');

    _proclaim2['default'].strictEqual(new _libMutableString2['default']('a') + 'b', 'a' + 'b');
    _proclaim2['default'].strictEqual('a' + new _libMutableString2['default']('b'), 'a' + 'b');
});

test('iterator', function () {
    var letters = [];
    var mutableString = new _libMutableString2['default']('abc');

    var _iteratorNormalCompletion22 = true;
    var _didIteratorError22 = false;
    var _iteratorError22 = undefined;

    try {
        for (var _iterator22 = _getIterator(mutableString), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
            var letter = _step22.value;

            letters.push(letter);
        }
    } catch (err) {
        _didIteratorError22 = true;
        _iteratorError22 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion22 && _iterator22['return']) {
                _iterator22['return']();
            }
        } finally {
            if (_didIteratorError22) {
                throw _iteratorError22;
            }
        }
    }

    _proclaim2['default'].strictEqual(letters.length, 3);
    _proclaim2['default'].deepEqual(letters, ['a', 'b', 'c']);
});
//# sourceMappingURL=MutableString.js.map