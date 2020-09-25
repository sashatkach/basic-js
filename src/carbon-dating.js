const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (!sampleActivity || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || isFinite(+sampleActivity)) return false;
    let k = 0.693 / HALF_LIFE_PERIOD;
    return Math.log(MODERN_ACTIVITY / sampleActivity) / k;
};