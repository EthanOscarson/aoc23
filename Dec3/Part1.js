const fs = require('fs');

const numberRegex = /^[0-9]$/;



fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
	lines = data.split('\n');
	console.log(lines)
	const digitIndexes = [];
	for(const [index, line] of lines.entries()) {
		for(const [charIndex, char] of line.split('').entries()) {
			if(numberRegex.test(char)) {
				digitIndexes.push([index, charIndex]);
			}
		}
		
	}
	console.log(digitIndexes)
	digitIndexes.forEach(val => {
		console.log(lines[val[0]][val[1]])
	})
});