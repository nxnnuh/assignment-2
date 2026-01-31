//Create functions that do the following: 
//Count the total number of words
// Find the longest word
// Count how many lines the file has

const fs = require('fs');

//count total number of words in a file
function countWords(text) {
    if (!text || text.trim() === ''){
        return 0;
    }
    return text.trim().split(' ').length;
}

//find longest word in file
function findLongestWord(text) {
    if (!text || text.trim() == '') {
        return '';
    }
    const words = text.trim().split(' ');
    let longest = words[0];

    for(let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {longest = words[i];

        }
    }
    return longest;
}

//count number of lines in text
function countLines(text) {
    if (!text || text.trim() === ''){
        return 0;
    }
    return text.split('\n').length;
}

//testing 
const textTest = fs.readFileSync('./data/sample-text.txt','utf8');
console.log('sample-text.txt: ')
console.log('Word count: ', countWords(textTest));
console.log('Longest word: ', findLongestWord(textTest));
console.log('Line count: ', countLines(textTest));

const quotesTest = fs.readFileSync('./data/quotes.txt','utf8');
console.log('quotes.txt: ')
console.log('Word count: ', countWords(quotesTest));
console.log('Longest word: ', findLongestWord(quotesTest));
console.log('Line count: ', countLines(quotesTest));

//export for jest test
module.exports = {
    countWords, 
    findLongestWord, 
    countLines
};