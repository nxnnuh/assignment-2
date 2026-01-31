const {
    sumNumbers,
    findHighest,
    findLowest,
    calculateAverage
} = require('../src/numberProcessor');

describe('Number Processor Tests', () => {

    test('calculates sum of numbers', () => {
        const result = sumNumbers([1, 2, 3, 4]);
        expect(result).toBe(10);
    });

    test('finds highest number', () => {
        const result = findHighest([5, 10, 3]);
        expect(result).toBe(10);
    });

    test('finds lowest number', () => {
        const result = findLowest([5, 10, 3]);
        expect(result).toBe(3);
    });

    test('calculates average', () => {
        const result = calculateAverage([10, 20, 30]);
        expect(result).toBe(20);
    });

});