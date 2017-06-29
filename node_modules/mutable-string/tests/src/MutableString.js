/* global suite, test */
/* eslint yoda:0 */

import 'core-js';
import assert from 'proclaim';
import MutableString from '../../lib/MutableString';

const strings = [
    '',
    'hello',
    '\n',
    'Hello\n',
];

test('charAt', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.strictEqual(mutableString.charAt(0), string.charAt(0));
    }
});

test('charCodeAt', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.isTrue(Object.is(mutableString.charCodeAt(0), string.charCodeAt(0)));
    }
});

test('concat', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.concat('test', 'test2');
        assert.strictEqual(mutableString.string, string.concat('test', 'test2'));
    }
});

test('endsWith', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.strictEqual(mutableString.endsWith('o'), string.endsWith('o'));
    }
});

test('includes', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.strictEqual(mutableString.includes('l'), string.includes('l'));
    }

    assert.isTrue('foobar'.includes('bar'));
    assert.isTrue('foobar'.includes(new MutableString('bar')));
    assert.isTrue(new MutableString('foobar').includes('bar'));

    assert.isFalse('foobar'.includes('foooo'));
    assert.isFalse('foobar'.includes(new MutableString('foooo')));
    assert.isFalse(new MutableString('foobar').includes('foooo'));
});

test('indexOf', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.strictEqual(mutableString.indexOf('h'), string.indexOf('h'));
    }
});

test('lastIndexOf', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.strictEqual(mutableString.lastIndexOf('l'), string.lastIndexOf('l'));
    }
});

test('match', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.deepEqual(mutableString.match(/lo/), string.match(/lo/));
    }

    assert.deepEqual(
        'foobar'.match(new MutableString('foo')),
        'foobar'.match('foo')
    );

    assert.deepEqual(
        new MutableString('foobar').match('foo'),
        'foobar'.match('foo')
    );
});

test('repeat', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.repeat(5);
        assert.strictEqual(mutableString.string, string.repeat(5));
    }
});

test('replace', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.replace('l', 'lll');
        assert.strictEqual(mutableString.string, string.replace('l', 'lll'));
    }

    assert.strictEqual(
        'foobar'.replace('bar', 'foo'),
        'foobar'.replace(new MutableString('bar'), new MutableString('foo'))
    );

    const mutableString = new MutableString('foobar');
    mutableString.replace('bar', 'foo');
    assert.strictEqual(mutableString.toString(), 'foofoo');
});

test('search', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.strictEqual(mutableString.search(/\s+/), string.search(/\s+/));
    }
});

test('slice', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.slice(-3, -1);
        assert.strictEqual(mutableString.string, string.slice(-3, -1));
    }
});

test('split', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.deepEqual(mutableString.split('\n'), string.split('\n'));
    }
});

test('startsWith', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        assert.strictEqual(mutableString.startsWith('h'), string.startsWith('h'));
    }
});

test('substr', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.substr(0, 1);
        assert.strictEqual(mutableString.string, string.substr(0, 1));
    }
});

test('substring', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.substring(0, 1);
        assert.strictEqual(mutableString.string, string.substring(0, 1));
    }
});

test('toLowerCase', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.toLowerCase();
        assert.strictEqual(mutableString.string, string.toLowerCase());
    }
});

test('toUpperCase', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.toUpperCase();
        assert.strictEqual(mutableString.string, string.toUpperCase());
    }
});

test('trim', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.trim();
        assert.strictEqual(mutableString.string, string.trim());
    }
});

test('trimLeft', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.trimLeft();
        assert.strictEqual(mutableString.string, string.trimLeft());
    }
});

test('trimRight', () => {
    for (let string of strings) {
        let mutableString = new MutableString(string);
        mutableString.trimRight();
        assert.strictEqual(mutableString.string, string.trimRight());
    }
});

test('operations', () => {
    assert.isTrue('a' < 'b');
    assert.isTrue('a' < new MutableString('b'));
    assert.isTrue(new MutableString('a') < 'b');

    assert.isFalse('a' > 'b');
    assert.isFalse('a' > new MutableString('b'));
    assert.isFalse(new MutableString('a') > 'b');

    assert.strictEqual(new MutableString('a') + 'b', 'a' + 'b');
    assert.strictEqual('a' + new MutableString('b'), 'a' + 'b');
});

test('iterator', () => {
    const letters = [];
    const mutableString = new MutableString('abc');

    for (let letter of mutableString) {
        letters.push(letter);
    }

    assert.strictEqual(letters.length, 3);
    assert.deepEqual(letters, ['a', 'b', 'c']);
});
