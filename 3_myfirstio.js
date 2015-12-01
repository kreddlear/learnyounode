var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var fileString = file.toString();

var fileStringLength = fileString.split('\n').length

console.log(fileStringLength-1);