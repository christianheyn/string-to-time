const { REGEX } = require('./const');

const highlightString = (str) => {
    if (typeof str !== 'string') {
        return '';
    }

    return str.replace(REGEX, match => `_*${match}*_`);
};

module.exports = { highlightString };
