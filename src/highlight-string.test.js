const { highlightString } = require('./highlight-string');

describe('highlight-string()', () => {
    it('is a function', () => {
        const actual = typeof highlightString;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns string', () => {
        const actual = typeof highlightString();
        const expected = 'string';
        expect(actual).toEqual(expected);
    });

    it('returns highlighted string', () => {
        const actual = highlightString('3d und 4h');
        const expected = '_*3d*_ und _*4h*_';
        expect(actual).toEqual(expected);
    });

    it('returns works with multiplication', () => {
        const actual = highlightString('3x3d und 4h');
        const expected = '_*3x3d*_ und _*4h*_';
        expect(actual).toEqual(expected);
    });
});
