const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    alphabet;
    isReversed;
    constructor(isReversed) {
        this.alphabet = {};
        for (let ch = 'A'.charCodeAt(); ch <= 'Z'.charCodeAt(); ch++) {
            this.alphabet[ch - 65] = String.fromCharCode(ch.toString());
        }
        this.isReversed = typeof isReversed === 'undefined' ? true : false;
    }
    encrypt(stringToEncode, keyword) {
        stringToEncode = stringToEncode.toUpperCase();
        keyword = keyword.toUpperCase();

        let count = Math.floor(stringToEncode.split(' ').join('').length / keyword.length);
        // let extraCount = stringToEncode.split(' ').join('').length % keyword.length;
        keyword = keyword.repeat(count) + keyword.slice(0 /*, extraCount - 1*/ );
        let result = '';
        let j = 0;
        for (let i = 0; i < stringToEncode.length; i++) {
            if (stringToEncode[i].charCodeAt() >= 65 && stringToEncode[i].charCodeAt() <= 90) {
                result += this.alphabet[(stringToEncode[i].charCodeAt() + keyword[j++].charCodeAt()) % 26];
            } else {
                result += stringToEncode[i]
            }
        }
        if (!this.isReversed)
            return result.split('').reverse().join('');
        return result;
    }
    decrypt(stringToDecode, keyword) {
        stringToDecode = stringToDecode.toUpperCase();
        keyword = keyword.toUpperCase();

        let count = Math.floor(stringToDecode.split(' ').join('').length / keyword.length);
        // let extraCount = stringToDecode.split(' ').join('').length % keyword.length;
        keyword = keyword.repeat(count) + keyword.slice(0 /*, extraCount - 1*/ );

        let result = '';
        let j = 0;
        for (let i = 0; i < stringToDecode.length; i++) {
            if (stringToDecode[i].charCodeAt() >= 65 && stringToDecode[i].charCodeAt() <= 90) {
                let index = (stringToDecode[i].charCodeAt() - keyword[j++].charCodeAt()) % 26;
                if (index < 0) {
                    index = 26 + index;
                }
                result += this.alphabet[index];
            } else {
                result += stringToDecode[i]
            }
        }
        if (!this.isReversed)
            return result.split('').reverse().join('');
        return result;
    }
}

module.exports = VigenereCipheringMachine;