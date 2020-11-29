document.getElementById("output").addEventListener("focus", function () {
    console.log("onfocus")
    content = document.getElementById("output").textContent
    document.getElementById("output").textContent = document.getElementById("output").dataset.formula

})

document.getElementById("output").addEventListener("blur", function () {
    console.log("onblur")
    document.getElementById("output").dataset.formula = document.getElementById("output").textContent
    document.getElementById("output").textContent = content


})

function update() {
    a = document.getElementById("inputa").textContent
    b = document.getElementById("inputb").textContent
    document.getElementById("output").textContent = parseInt(a) + parseInt(b)
}