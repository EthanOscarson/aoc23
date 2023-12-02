const fs = require('fs');

const filePath = './input.txt';
const numberRegex = /^[0-9]$/; //Magic spell to detect digits :)

function preprocess(line) {
    //This function needs to replace each spelled out digit with a number
    //For example, "one" becomes "1"
    //But also oneight becomes both "1" and "8"
    //So instead of replacing the string, we'll just add the digit in the array
    const letterDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(line)
    for (let i = 0; i < letterDigits.length; i++) {
        let digit = letterDigits[i];
        let index = line.indexOf(digit)
        if(index != -1) {
            line = line.split('');
            line.splice(index, digit.length-1, letterDigits.indexOf(digit));
            line = line.join('');
            i--;
        }
    }

    //Grrrrr problem is that with numbers that share letters it will replace the letters so that it goes from 0-9 in priority. I think solving this is really difficult in my current implementation
    console.log(line)
    return line;
}

fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
        console.error(err);
        return;
    }
    
    let lines = text.split('\n'); //Split the file into lines

    const calibrationVals = []; //The result of each of the lines

    lines.forEach(line => {
        const digits = []; //This array contains all the digits
        line = preprocess(line);
        for (const char of line) {
            if (numberRegex.test(char)) {
                digits.push(parseInt(char));
            }
            //For each, if it's a digit add it to the digits array
        }
        console.log(digits[0] + '' + digits[digits.length - 1])
        calibrationVals.push(digits[0] + '' + digits[digits.length - 1]); //Add the first and last digits to the calibrationVals array
    })

    //Next add all calibration vals together
    let sum = 0;
    calibrationVals.forEach(val => {
        sum += parseInt(val);
    })
    
    console.log("The answer is...." + sum)

});