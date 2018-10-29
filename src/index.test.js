const { timeString } = require('../index');

describe('timeString', () => {
    it('is a function', () => {
        const actual = typeof timeString;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns days and hours and minutes from string', () => {
        const actual = timeString('3d 5h 30m');
        const expected = {
            d: 3,
            h: 5,
            hoursPerDay: 8,
            m: 30
        };
        expect(actual).toEqual(expected);
    });
});
