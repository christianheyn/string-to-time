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
            { content: '3d', type: 'time', id: 0 },
            { content: ' and ', type: '?', id: 1 },
            { content: '2h', type: 'time', id: 2 },
            { content: ' something', type: '?', id: 3 },
        ];
        expect(actual).toEqual(expected);
    });

    it('works with multiple spaces', () => {
        const actual = tokenize('3d and   2h something');
        const expected = [
            { content: '3d', type: 'time', id: 0 },
            { content: ' and   ', type: '?', id: 1 },
            { content: '2h', type: 'time', id: 2 },
            { content: ' something', type: '?', id: 3 },
        ];
        expect(actual).toEqual(expected);
    });

    it('works with newlines', () => {
        const actual = tokenize('3d and\n 2h something');
        const expected = [
            { content: '3d', type: 'time', id: 0 },
            { content: ' and\n ', type: '?', id: 1 },
            { content: '2h', type: 'time', id: 2 },
            { content: ' something', type: '?', id: 3 },
        ];
        expect(actual).toEqual(expected);
    });

    it('works with multiplication', () => {
        const actual = tokenize('3 x 2h something');
        const expected = [
            { content: '3 x 2h', type: 'time', id: 0 },
            { content: ' something', type: '?', id: 1 },
        ];
        expect(actual).toEqual(expected);
    });
});
