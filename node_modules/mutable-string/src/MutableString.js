/* global Iterator */

export default class MutableString {
    string: string;

    constructor(string: string) {
        this.string = string;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
     * @returns {string}
     */
    charAt() {
        return this.string.charAt(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
     * @returns {Number}
     */
    charCodeAt() {
        return this.string.charCodeAt(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
     * @returns {MutableString}
     */
    concat(): MutableString {
        this.string = this.string.concat(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
     * @returns {boolean}
     */
    endsWith() {
        return this.string.endsWith(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
     * @returns {boolean}
     */
    includes() {
        return this.string.includes(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
     * @returns {Number}
     */
    indexOf() {
        return this.string.indexOf(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
     * @returns {Number}
     */
    lastIndexOf() {
        return this.string.lastIndexOf(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
     * @returns {boolean}
     */
    localeCompare() {
        return this.string.localeCompare(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
     * @returns {Array|{index: number, input: string}}
     */
    match() {
        return this.string.match(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
     * @returns {MutableString}
     */
    normalize(): MutableString {
        this.string = this.string.normalize(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
     * @returns {MutableString}
     */
    repeat(): MutableString {
        this.string = this.string.repeat(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     * @returns {MutableString}
     */
    replace(): MutableString {
        this.string = this.string.replace(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     * @returns {Number}
     */
    search() {
        return this.string.search(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
     * @returns {MutableString}
     */
    slice(): MutableString {
        this.string = this.string.slice(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
     * @returns {Array}
     */
    split() {
        return this.string.split(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
     * @returns {boolean}
     */
    startsWith() {
        return this.string.startsWith(...arguments);
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
     * @returns {MutableString}
     */
    substr(): MutableString {
        this.string = this.string.substr(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
     * @returns {MutableString}
     */
    substring(): MutableString {
        this.string = this.string.substring(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
     * @returns {MutableString}
     */
    toLocaleLowerCase(): MutableString {
        this.string = this.string.toLocaleLowerCase(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
     * @returns {MutableString}
     */
    toLocaleUpperCase(): MutableString {
        this.string = this.string.toLocaleUpperCase(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
     * @returns {MutableString}
     */
    toLowerCase(): MutableString {
        this.string = this.string.toLowerCase(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
     * @returns {string}
     */
    toString() {
        return this.string.toString();
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
     * @returns {MutableString}
     */
    toUpperCase(): MutableString {
        this.string = this.string.toUpperCase(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
     * @returns {MutableString}
     */
    trim(): MutableString {
        this.string = this.string.trim(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft
     * @returns {MutableString}
     */
    trimLeft(): MutableString {
        this.string = this.string.trimLeft(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight
     * @returns {MutableString}
     */
    trimRight(): MutableString {
        this.string = this.string.trimRight(...arguments);
        return this;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf
     * @returns {string}
     */
    valueOf() {
        return this.string.valueOf();
    }

    /**
     * Symbol.iterator
     *
     * @method @@iterator
     */
    [Symbol.iterator](): Iterator {
        return this.string[Symbol.iterator]();
    }
}
