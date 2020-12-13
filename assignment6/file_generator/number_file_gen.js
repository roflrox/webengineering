var process = require('process')
var fs = require('fs');

var lines = process.argv.slice(2);
console.log('lines: ', lines);

var stream = fs.createWriteStream("output.txt")

for (let i = 0; i < lines; i++) {
    stream.write(i+".\n","utf-8")
}

