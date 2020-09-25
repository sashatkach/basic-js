const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members || !Array.isArray(members)) { return false; }
    const result = members.reduce((acc, curr) => { if (typeof curr === 'string') { return acc + curr.trim()[0].toUpperCase() } return acc }, '');
    return result ? result.split('').sort().join('') : false;
};