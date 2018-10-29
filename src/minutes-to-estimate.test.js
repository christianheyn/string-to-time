const { minutesToEstimate } = require('./minutes-to-estimate');

describe('minutesToEstimate(minutes, hoursPerDay = 8)', () => {
    it('is a function', () => {
        const actual = typeof minutesToEstimate;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    const testMinutesCases = [
        1200,
        30,
        60,
        (60 * 8),
        (60 * 8 * 3),
        -(60 * 8 * 3),
        -30,
        1260,
        500.20,
        50000,
    ];

    it('returns empty object without minutes parameter', () => {
        const actual = minutesToEstimate();
        const expected = { d: 0, h: 0, m: 0 };
        expect(actual).toEqual(expected);
    });

    it('returns object', () => {
        testMinutesCases.forEach((m) => {
            const actual = minutesToEstimate(m);
            expect(actual).toMatchSnapshot();
        });
    });
});
