const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) { throw Error('Not array'); }
    let result = [...arr];
    for (let i = 0; i < result.length; ++i) {
        if (result[i] === '--discard-prev') {
            if (typeof result[i - 1] !== 'undefined') {
                result[i - 1] = Number.MAX_VALUE;
            }
            result[i] = Number.MAX_VALUE;
        } else if (result[i] === '--discard-next') {
            if (typeof result[i + 1] !== 'undefined') {
                result[i + 1] = Number.MAX_VALUE;
            }
            result[i] = Number.MAX_VALUE;
        } else if (result[i] === '--double-next') {
            if (typeof result[i + 1] !== 'undefined') {
                result.splice(i + 1, 0, result[i + 1]);
            }

            result.splice(i, 1);
        } else if (result[i] === '--double-prev') {
            if (typeof result[i - 1] !== 'undefined') {
                result.splice(i - 1, 0, result[i - 1]);
            }
            if (i !== 0) {
                result.splice(i + 1, 1);
            } else {
                result.splice(0, 1)
            }
        }
    }
    for (let i = result.length - 1; i >= 0; --i) {
        if (Number.MAX_VALUE === result[i]) {
            result.splice(i, 1)
        }
    }
    return result;
};