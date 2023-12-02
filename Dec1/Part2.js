//After watching Low Level Learnings solution for this problem, I realized a much simpler way to solve this problem.
//Instead of extracting all digits from the string and adding them to an array, I use his method of creating a singular left and right variable.
//Other than that, this is pretty different as he used c++ and I used javascript.
//Very happy to have solved this!

const fs = require('fs');

const filePath = './input.txt';

const letterDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function matchDigit (str) {
    if (str[0].match(/[0-9]/)) { //If it is a number
        return str[0] - 0; //Convert to number & return
    } else {
        for(let i = 0; i < letterDigits.length; i++) { //For each of the letterDigits
            if (str.startsWith(letterDigits[i])) { //If the string starts with one
                return i;//Return the index which is also the actual number
            }
        }
    }
    return null; //Return null if no match
}

fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
        console.error(err);
        return;
    }
    
    let lines = text.split('\n'); //Split the file into lines

    const calibrationVals = []; //The result of each of the lines

    lines.forEach(line => {
        let left = -1;
        let right = 0; //This array contains all the digits
        for (let i = 0; i < line.length; i++) {
            let digit = matchDigit(line.slice(i, i + 5));//Check if this iteration matches a digit 
            if(digit !== null) { //If there is a match
                if(left === -1) {//If the left one hasn't been set
                    left = digit;
                    right = digit;
                    //Set both to the digit
                } else {//Otherwise
                    right = digit;
                    //Just set the right one
                }
            }
           
            //For each, if it's a digit add it to the digits array
        }
    
        calibrationVals.push(left + '' + right);//Convert to string & add to calibrationVals array
    })

    //Next add all calibration vals together
    let sum = 0;
    calibrationVals.forEach(val => {
        sum += parseInt(val);
    })
    
    console.log("The answer is...." + sum)

});