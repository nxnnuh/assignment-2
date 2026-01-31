//Create a script that reads a file containing numbers
//Calculate the sum of all numbers
//Find the highest and lowest numbers
//Calculate the average

const fs = require('fs');

//convert file text into array of numbers
function parseNumbers(text) {
    const lines = text.split('\n');
    const numbers = [];

    for(let i = 0; i < lines.length; i++) {
        const value = lines[i].trim();
        if (value.length>0) {
            numbers.push(parseFloat(value));
        }
    }
    return numbers;
}

//calculate sum
function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum+=numbers[i];
    }
    return sum;
}

//find highest number
function findHighest(numbers) {
    let highest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i]> highest) {
            highest = numbers[i];
        }
    }
    return highest;
}

//find lowest number
function findLowest(numbers) {
    let lowest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }
    return lowest;
}

//calculate average
function calculateAverage(numbers) {
    if (numbers.length ===0) {
        return 0;
    }
    return sumNumbers(numbers) / numbers.length;
}

//testing
if (require.main == module) {
const numberText = fs.readFileSync('./data/sample-numbers.txt','utf8');
const numbers = parseNumbers(numberText);

console.log('Sum:', sumNumbers(numbers));
console.log('Highest:', findHighest(numbers));
console.log('Lowest:', findLowest(numbers));
console.log('Average:', calculateAverage(numbers));
}
module.exports = {
    parseNumbers, 
    sumNumbers, 
    findHighest, 
    findLowest, 
    calculateAverage
};