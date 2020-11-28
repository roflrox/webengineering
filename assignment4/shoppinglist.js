var btn = document.getElementById('btn');

btn.addEventListener("click", event => {
    var items = document.getElementById('items').innerHTML
    inputval = document.getElementById('additem').value
    items = items + "<li>" + inputval + "<button onclick='this.parentNode.parentNode.removeChild(this.parentNode)'>Delete</button></li>"
    document.getElementById('items').innerHTML = items
    document.getElementById('additem').value = ""
})