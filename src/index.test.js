const { timeString } = require('../index');

describe('timeString', () => {
    it('is a function', () => {
        const actual = typeof timeString;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns days and hours and minutes from string', () => {
        const actual = timeString('4hours for some stuff, 1.2days plus 2 x 35minutes for somthing else...');
        const expected = {
            d: 1,
            h: 6,
            hoursPerDay: 8,
            m: 46
        };
        expect(actual).toEqual(expected);
    });
});
