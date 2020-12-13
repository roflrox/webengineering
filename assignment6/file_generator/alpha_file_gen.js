var process = require('process')
var fs = require('fs');

var lines = process.argv.slice(2);
console.log('lines: ', lines);

var stream = fs.createWriteStream("output_text.txt")

for (let i = 0; i < lines; i++) {

    stream.write(calcLetters(i),"utf-8")

}

function calcLetters(i) {
    var current = i%26
    if(i/26<1){
        return String.fromCharCode(i%26+65) + "\n";
    }

    var x = Math.floor(i/26)
    if(x <= 26){
        return String.fromCharCode(x+65-1)+String.fromCharCode(i%26+65) + "\n";
    }
    var y = Math.floor(x/26)
    if(y <= 26) {
        if(x%26===0){
            x++
        }
        return String.fromCharCode(y + 65-1) + String.fromCharCode(x % 26 + 65-1) + String.fromCharCode(i % 26 + 65) + "\n";
    }

    var z = Math.floor(y/26)
    if(y%26===0){
        y++
    }
    return String.fromCharCode(z+65-1)+String.fromCharCode(y%26+65-1)+String.fromCharCode(x%26+65-1)+String.fromCharCode(i%26+65) + "\n";







}

