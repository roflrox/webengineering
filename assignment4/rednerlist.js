var btn = document.getElementById('btn');

var timers = new Map()

btn.addEventListener("click", event => {
    var items = document.getElementById('items').innerHTML
    inputval = document.getElementById('additem').value
    items = items + "<li>" + inputval + addbutton(inputval) + "</li>"
    document.getElementById('items').innerHTML = items
    document.getElementById('additem').value = ""
})


function addbutton(inputval) {
    return '<div id=' + inputval + '></div><button onclick="startTimer(\'' + inputval + '\')">Start</button>'
}

function startTimer(id) {
    var btn = document.getElementById(id).nextSibling
    let timer
    if (btn.textContent === "Start") {
        if (!timers.has(id)) {
            var d = new Date();
            d.setHours(0, 0, 0, 0);
            document.getElementById(id).innerHTML = d.toLocaleTimeString();
             timer = setInterval(newTimer, 1000, id);
            timers.set(id, timer)

        }else{
            timer=setInterval(newTimer,1000,id)
            timers.set(id, timer)
        }
        timers.forEach((value,key,map) => {
                if(key !== id){
                    clearInterval(value)
                    var btn1 = document.getElementById(key).nextSibling
                    btn1.textContent = "Start"
                }
            }
        )
        btn.textContent = "Stop"
    } else {
        btn.textContent = "Start"
        clearInterval(timers.get(id))
    }
}

function newTimer(id) {
    let time = document.getElementById(id).innerHTML
    var [hour, minute, second] = time.split(':')
    var d = new Date()
    d.setHours(parseInt(hour), parseInt(minute), parseInt(second), 0)
    d.setSeconds(d.getSeconds() + 1)
    document.getElementById(id).innerHTML = d.toLocaleTimeString()

}