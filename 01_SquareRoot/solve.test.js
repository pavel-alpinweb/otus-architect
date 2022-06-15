const solve =  require('./solve');

describe('Square root:', () => {
    test('For equation x^2+1=0, should return empty array', () => {
        // Act
        const result = solve(1, 0, 1); // x^2+1=0
        // assert
        expect(result).toEqual([]);
    })

    test('For equation x^2-1 = 0, should return [1, -1] (x1=1, x2=-1)', () => {
        // Act
        const result = solve(1, 0, -1); // x^2+1=0
        // assert
        expect(result).toEqual([1, -1]);
    });

    test('For equation x^2+2x+1 = 0, should return  [-1, -1] (x1= x2 = -1)', () => {
        // Act
        const result = solve(1, 2, 1); // x^2+1=0
        // assert
        expect(result).toEqual([-1, -1]);
    });

    test('If a == 0, return message: a should\'t to be 0', () => {
        // Act
        const result = solve(0, 2, 1);
        // assert
        expect(result.message).toBe('argument a should\'t to be 0');
    });

    test('type of each arguments is not a number', () => {
        // Act
        const result = solve('1', null, 3);
        // assert
        expect(result.message).toBe('arguments should to be a number');
    });
});

