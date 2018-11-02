const { translateEstimateString } = require('./src/translate-estimate-string');
const { minutesToEstimate } = require('./src/minutes-to-estimate');
const { tokenize } = require('./src/tokenize');
const { REGEX } = require('./src/const');

const stringToTime = str => minutesToEstimate(translateEstimateString(str).minutes);

module.exports = {
    stringToTime,
    tokenize,
    _translateEstimateString: translateEstimateString,
    _minutesToEstimate: minutesToEstimate,
    _regex: REGEX,
};
