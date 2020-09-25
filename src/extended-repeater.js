const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|'
    if (typeof options.repeatTimes === 'undefined' && typeof options.additionRepeatTimes === 'undefined') {
        return str + options.addition;
    }
    let result = '';
    for (let i = 0; i < options.repeatTimes; ++i) {
        result += str;
        for (let j = 0; j < options.additionRepeatTimes; ++j) {
            if (j + 1 === options.additionRepeatTimes) {
                result += options.addition
            } else {
                result += options.addition + options.additionSeparator;
            }
        }
        if (i + 1 !== options.repeatTimes)
            result += options.separator;
    }

    return result;
};