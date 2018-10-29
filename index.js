const { translateEstimateString } = require('./src/translate-estimate-string');
const { minutesToEstimate } = require('./src/minutes-to-estimate');

const stringToTime = str => minutesToEstimate(translateEstimateString(str).minutes);

module.exports = {
    stringToTime,
    translateEstimateString,
    minutesToEstimate,
};
