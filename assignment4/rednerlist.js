var btn = document.getElementById('btn');



btn.addEventListener("click", event => {
    var items = document.getElementById('items').innerHTML
    inputval = document.getElementById('additem').value
    items = items + "<li>" + inputval + addbutton(inputval)+ "</li>"
    document.getElementById('items').innerHTML = items
    document.getElementById('additem').value = ""
})


function addbutton(inputval) {
    return '<div id='+inputval+'></div><button onclick="startTimer(\''+inputval+'\')">Start</button>'
}

function startTimer(id){
    var d = new Date();
    d.setHours(0,0,0,0);
    document.getElementById(id).innerHTML = d.toLocaleTimeString();
    setInterval(newTimer ,1000,id);
}

function newTimer(id) {
    let time = document.getElementById(id).innerHTML
    var [hour,minute,second] = time.split(':')
    var d = new Date()
        d.setHours(parseInt(hour),parseInt(minute),parseInt(second),0)
    d.setSeconds(d.getSeconds()+1)
    document.getElementById(id).innerHTML = d.toLocaleTimeString()

}