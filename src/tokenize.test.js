const { tokenize } = require('./tokenize');

describe('tokenize(str)', () => {
    it('is a function', () => {
        const actual = typeof tokenize;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('seperates time units', () => {
        const actual = tokenize('3d and 2h something');
        const expected = [
            { content: '3d', type: 'time' },
            { content: ' and ', type: '?' },
            { content: '2h', type: 'time' },
            { content: ' something', type: '?' },
        ];
        expect(actual).toEqual(expected);
    });
});
