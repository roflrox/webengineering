const express = require('express')
const fs = require('fs')
const app = express()






app.get('/', function (req, res) {
    var completed = false
    let lines1 = [], lines2 = []
    let data1, data2 = ""
    let start = Date.now()


    var readStream1 = fs.createReadStream('output.txt')
    var readStream2 = fs.createReadStream('output_text.txt')

    readStream1.on("data",data => callback(data,1))
    readStream2.on("data",data => callback(data,2))
    readStream1.on("end",_ => close())
    readStream2.on("end",_ => close())

    var stream = fs.createWriteStream("output_merge_files.txt")

    function callback(data,lines){
        if(lines === 1)
            data1 += data.toString()
        if(lines === 2 )
            data2 += data.toString()


    }

    function close(){
        if(!completed){
            if(data1.split("\n").length === data1.split("\n").length){
                createLines()
                lines1.forEach((line, index) => stream.write(line + lines2[index]+"\n"));
                var duration = Date.now() - start
                console.log(`time elapsed = ${Math.floor(duration)} ms`)
                completed = true
                stream.close()
                res.download('./output_merge_files.txt',function (err){
                    console.log(err)
                })
            }
        }
    }

    function createLines(){
        if(data1.length > 20000){
            var datasub = data1.match(/.{1,20000}/g)
            datasub.forEach(sub => lines1.push(...sub.split("\n")))
        }else {
            lines1.push(...data2.split("\n"))
        }
        if(data2.length > 20000){
            var datasub = data2.match(/.{1,20000}/g)
            datasub.forEach(sub => lines2.push(...sub.split("\n")))
        }else {
            lines2.push(...data2.split("\n"))
        }
    }
})





app.listen(3000)