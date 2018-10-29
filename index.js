const { translateEstimateString } = require('./src/translate-estimate-string');
const { minutesToEstimate } = require('./src/minutes-to-estimate');

const timeString = str => minutesToEstimate(translateEstimateString(str).minutes);

module.exports = {
    timeString,
    translateEstimateString,
    minutesToEstimate,
};
