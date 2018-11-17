const { REGEX } = require('./const');

const now = Date.now();
const startSeparator = `${now}%--`;
const endSeparator = `--%${now}`;

const tokenize = (str) => {
    const wrapped = str.replace(REGEX, match => `${startSeparator}${match}${endSeparator}`);
    const splitFirstStep = wrapped.split(startSeparator);

    const splitSecondStep = splitFirstStep.reduce((acc, value) => {
        const splitted = value.split(endSeparator);
        return [...acc, ...splitted];
    }, []);

    const clean = splitSecondStep.filter(v => v !== '');

    return clean.map((content, i) => {
        const cMatch = reg => content.match(reg);
        const matchRegex = cMatch(REGEX);
        const basic = {
            id: i,
            content,
            type: matchRegex ? 'time' : '?',
        };

        const isX = Boolean(cMatch(/x/));
        const isM = Boolean(cMatch(/m/));
        const isH = Boolean(cMatch(/h/));
        const isD = Boolean(cMatch(/d/));

        const additional = !matchRegex
            ? {}
            : {
                subtypes: {
                    x: isX,
                    m: isM,
                    h: isH,
                    d: isD,
                }
            };

        return {
            ...basic,
            ...additional,
        };

    });
};

module.exports = {
    tokenize,
};
