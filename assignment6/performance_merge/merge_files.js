var process = require('process')
var fs = require('fs');

var vars = process.argv.slice(2);
console.log('vars: ', vars);
let start = Date.now()

var file_one = vars[0]
var file_two = vars[1]

let lines1 = [], lines2 = []


fs.readFile(file_one,'utf8',callback(lines1))
fs.readFile(file_two,'utf8',callback(lines2))
var stream = fs.createWriteStream("output_merge_files.txt")

function callback(lines){
    return function (err,data){
        if(data.length > 20000){
            var datasub = data.match(/.{1,20000}/g)
            datasub.forEach(sub => lines.push(...sub.split("\n")))
        }else {
            lines.push(...data.split("\n"))
        }
        if(lines1.length === lines2.length){
            lines1.forEach((line, index) => stream.write(line + lines2[index]+"\n"));
            var duration = Date.now() - start
            console.log(`time elapsed = ${Math.floor(duration)} ms`)
        }
    }
}

