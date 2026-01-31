const {
    countWords,
    findLongestWord,
    countLines
} = 
require('../src/textAnalyzer');

describe('Text Analyzer Tests', () => {

    test('counts total number of words', () => {
        const result = countWords('Hello world');
        expect(result).toBe(2);
    });

    test('finds longest word', () => {
        const result = findLongestWord('hi hola hello');
        expect(result).toBe('hello');
    });

    test('counts number of lines', () => {
        const result = countLines('Line one\nLine two\nLine three\nLine four');
        expect(result).toBe(4);
    });

});