const fs = require('fs');

const filePath = './input.txt';
const numberRegex = /^[0-9]$/; //Magic spell to detect digits :)

fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
        console.error(err);
        return;
    }
    
    let lines = text.split('\n'); //Split the file into lines

    const calibrationVals = []; //The result of each of the lines

    lines.forEach(line => {
        const digits = []; //This array contains all the digits
        for (const char of line) {
            if (numberRegex.test(char)) {
                digits.push(parseInt(char));
            }
            //For each, if it's a digit add it to the digits array
        }
        calibrationVals.push(digits[0] + '' + digits[digits.length - 1]); //Add the first and last digits to the calibrationVals array
    })

    //Next add all calibration vals together
    let sum = 0;
    calibrationVals.forEach(val => {
        sum += parseInt(val);
    })
    
    console.log("The answer is...." + sum)

});