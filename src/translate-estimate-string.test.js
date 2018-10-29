const { translateEstimateString } = require('./translate-estimate-string');

describe('translateEstimateString(str, hoursPerDay = 8)', () => {
    it('is a function', () => {
        const actual = typeof translateEstimateString;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns object with property minutes 0 when empty string is given', () => {
        const actual = translateEstimateString('').minutes;
        const expected = 0;
        expect(actual).toEqual(expected);
    });

    it('returns object with property minutes 0 when ther are no units', () => {
        const actual = translateEstimateString('nothing').minutes;
        const expected = 0;
        expect(actual).toEqual(expected);
    });

    it('works when second parameter is not of type number', () => {
        const actual = translateEstimateString('30m', '5').minutes;
        const expected = 30;
        expect(actual).toEqual(expected);
    });

    it('works with unit "m"', () => {
        const actual = translateEstimateString('30m').minutes;
        const expected = 30;
        expect(actual).toEqual(expected);
    });

    it('works with unit "m" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('30 m').minutes;
        const expected = 30;
        expect(actual).toEqual(expected);
    });

    it('works with unit "minute"', () => {
        const actual = translateEstimateString('1minute').minutes;
        const expected = 1;
        expect(actual).toEqual(expected);
    });

    it('works with unit "minute" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('30 minute').minutes;
        const expected = 30;
        expect(actual).toEqual(expected);
    });

    it('works with unit "minutes"', () => {
        const actual = translateEstimateString('9minutes').minutes;
        const expected = 9;
        expect(actual).toEqual(expected);
    });

    it('works with unit "minutes" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('30 minutes').minutes;
        const expected = 30;
        expect(actual).toEqual(expected);
    });

    it('works with unit "h"', () => {
        const actual = translateEstimateString('1h').minutes;
        const expected = 60;
        expect(actual).toEqual(expected);
    });

    it('works with unit "h" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('1 h').minutes;
        const expected = 60;
        expect(actual).toEqual(expected);
    });

    it('works with unit "hour"', () => {
        const actual = translateEstimateString('2hour').minutes;
        const expected = 120;
        expect(actual).toEqual(expected);
    });

    it('works with unit "hour" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('1 hour').minutes;
        const expected = 60;
        expect(actual).toEqual(expected);
    });

    it('works with unit "hours"', () => {
        const actual = translateEstimateString('3hours').minutes;
        const expected = 180;
        expect(actual).toEqual(expected);
    });

    it('works with unit "hours" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('1 hours').minutes;
        const expected = 60;
        expect(actual).toEqual(expected);
    });

    it('works with unit "d"', () => {
        const actual = translateEstimateString('4d').minutes;
        const expected = 1920;
        expect(actual).toEqual(expected);
    });

    it('works with unit "d" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('1 d').minutes;
        const expected = 480;
        expect(actual).toEqual(expected);
    });

    it('works with unit "day"', () => {
        const actual = translateEstimateString('4day').minutes;
        const expected = 1920;
        expect(actual).toEqual(expected);
    });

    it('works with unit "day" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('1 day').minutes;
        const expected = 480;
        expect(actual).toEqual(expected);
    });

    it('works with unit "days"', () => {
        const actual = translateEstimateString('4days').minutes;
        const expected = 1920;
        expect(actual).toEqual(expected);
    });

    it('works with unit "days" and singe space betwwen number and unit', () => {
        const actual = translateEstimateString('1 days').minutes;
        const expected = 480;
        expect(actual).toEqual(expected);
    });

    it('returns property minutes with right estimate numbers', () => {
        {
            const actual = translateEstimateString('1d 8h 4m').minutes;
            const expected = 964;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('32h').minutes;
            const expected = 1920;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('60h').minutes;
            const expected = 3600;
            expect(actual).toEqual(expected);
        }
    });

    it('also calculates negative numbers', () => {
        {
            const actual = translateEstimateString('2d -8h 4m').minutes;
            const expected = 484;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('-1d 16h 0m').minutes;
            const expected = 480;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('-1d 32h 0m').minutes;
            const expected = 1440;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('-1d 32h 0m 15').minutes;
            const expected = 1440;
            expect(actual).toEqual(expected);
        }
    });

    it('also calculates floating numbers', () => {
        {
            const actual = translateEstimateString('2.5d').minutes;
            const expected = 1200;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('2.5d 0.5h').minutes;
            const expected = 1230;
            expect(actual).toEqual(expected);
        }
    });

    it('also calculates negative floating numbers', () => {
        {
            const actual = translateEstimateString('-2.5d').minutes;
            const expected = -1200;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('2.5d -0,5h').minutes;
            const expected = 1170;
            expect(actual).toEqual(expected);
        }
    });

    it('also calculates floating numbers with "," instead of "."', () => {
        {
            const actual = translateEstimateString('2,5d').minutes;
            const expected = 1200;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('2,5d 0,5h').minutes;
            const expected = 1230;
            expect(actual).toEqual(expected);
        }
    });

    it('does not calculate numbers without d|h|m', () => {
        {
            const actual = translateEstimateString('2,5d 5').minutes;
            const expected = 1200;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('2,5d 0,5').minutes;
            const expected = 1200;
            expect(actual).toEqual(expected);
        }
    });

    it('does not calculate numbers without d|h|m + no withspace', () => {
        {
            const actual = translateEstimateString('2,5d 3dit').minutes;
            const expected = 1200;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('2,5d 0,5duration').minutes;
            const expected = 1200;
            expect(actual).toEqual(expected);
        }
    });

    it('keeps newlines in source', () => {
        {
            const source = `3d Dies
2d das`;
            const actual = translateEstimateString(source).source;
            const expected = source;
            expect(actual).toEqual(expected);
        }
        {
            const source = `
3d Dies,
2h testing
2d das
-30m package nutzen`;
            const actual = translateEstimateString(source).source;
            const expected = source;
            expect(actual).toEqual(expected);
        }
    });

    it.skip('calculates when hoursPerDay changed', () => {});

    it('allows to add a multiplication before', () => {
        {
            const actual = translateEstimateString('1x1days').minutes;
            const expected = 1 * 480;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('1x3minutes').minutes;
            const expected = 3;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('3,5x2minutes').minutes;
            const expected = 7;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('3,5x2,5minutes').minutes;
            const expected = 8.75;
            expect(actual).toEqual(expected);
        }
    });
    it('allows to add a multiplication and single spaces', () => {
        {
            const actual = translateEstimateString('1 x 1 days').minutes;
            const expected = 1 * 480;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('1 x 3 minutes').minutes;
            const expected = 3;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('3,5 x 2 minutes').minutes;
            const expected = 7;
            expect(actual).toEqual(expected);
        }
        {
            const actual = translateEstimateString('3,5 x 2,5 minutes').minutes;
            const expected = 8.75;
            expect(actual).toEqual(expected);
        }
    });
});
