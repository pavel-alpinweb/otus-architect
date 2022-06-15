function compareWidthZero(number, epsilon) {
    if (Math.abs(number) <= epsilon) {
        return 0;
    } else {
        return number;
    }
}

function solve (a, b, c, epsilon) {
    if (Math.sign(a) === 0) {
        return new Error('argument a should\'t to be 0');
    }
    for (const arg of arguments) {
        if (typeof arg !== 'number') {
            return new Error('arguments should to be a number');
        }
    }
    const D = b**2-4*a*c;
    if (compareWidthZero(D, epsilon) < 0) {
        return [];
    }
    if (compareWidthZero(D, epsilon) > 0) {
        return [-b+Math.sqrt(D)/(2*a), -b-Math.sqrt(D)/(2*a)];
    }
    if (compareWidthZero(D, epsilon) === 0) {
        return [-b/(2*a), -b/(2*a)]
    }
};
module.exports = solve;
