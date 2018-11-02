const { REGEX } = require('./const');

const startSeparator = '|||%--';
const endSeparator = '--%|||';

const tokenize = (str) => {
    const wrapped = str.replace(REGEX, match => `${startSeparator}${match}${endSeparator}`);
    const splitFirstStep = wrapped.split(startSeparator);

    const splitSecondStep = splitFirstStep.reduce((acc, value) => {
        const splitted = value.split(endSeparator);
        return [...acc, ...splitted];
    }, []);

    const clean = splitSecondStep.filter(v => v !== '');

    return clean.map(content => ({
        content,
        type: (content.match(REGEX)) ? 'time' : '?',
    }));
};

module.exports = {
    tokenize,
};
