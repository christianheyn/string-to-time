const { REGEX } = require('./const');

const resolveMuliplication = (unitStr) => {
    if (!unitStr.match(/x/)) {
        return parseFloat(unitStr, 10);
    }

    const products = unitStr.split('x');
    const product1 = parseFloat(products[0], 10);
    const product2 = parseFloat(products[1], 10);

    return (product1 * product2);
};

const translateEstimateString = (str, hoursPerDay = 8) => {
    const useHourPerDay = (typeof hoursPerDay === 'number')
        ? hoursPerDay
        : 8;

    const emptyEstimate = { minutes: 0, source: '', hoursPerDay: useHourPerDay };
    if (typeof str !== 'string' || str === '') {
        return emptyEstimate;
    }

    const resultArray = str.match(REGEX);

    if (!Array.isArray(resultArray) || resultArray.length === 0) {
        return emptyEstimate;
    }

    const inMinutes = resultArray.reduce((acc, curr) => {
        const isUnit = unit => (curr.indexOf(unit) !== -1);
        const preparedValue = curr.replace(/,/g, '.');
        const asNumber = resolveMuliplication(preparedValue);

        if (isUnit('m') || isUnit('M')) {
            return asNumber + acc;
        }

        if (isUnit('h') || isUnit('H')) {
            return (asNumber * 60) + acc;
        }

        // day
        return (asNumber * useHourPerDay * 60) + acc;
    }, 0);

    return {
        minutes: inMinutes,
        source: str,
        hoursPerDay: useHourPerDay,
    };
};

module.exports = { translateEstimateString };
