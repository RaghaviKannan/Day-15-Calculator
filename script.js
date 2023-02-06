var heading = document.createElement("h3")
heading.innerHTML="Calculator"
heading.style.fontStyle="Italic"
heading.style.color="green"
var card = document.createElement("div")
card.setAttribute("class", "card")
card.style.width = "270px"
card.style.height = "300px"
card.setAttribute("class", "border border-dark")
var cardbody = document.createElement("div")
cardbody.setAttribute("class", "card-body")
var display = document.createElement("input")
display.setAttribute("type", "text")
display.style.width = "14rem"
display.style.height = "50px"
display.style.marginBottom="10px"
display.addEventListener("input", (event) => {
    let newvalue = display.value;
    let lastchar = newvalue[newvalue.length - 1]
    if (!/^[0-9.+\-*/%=]$/.test(lastchar)) {
        display.value = newvalue.slice(0, -1)
        alert("Only numbers are allowed")
    }
});

display.addEventListener("keydown", (event) => {
    if (event.key === "=") {
        let expression = display.value;
        let result = eval(expression);
        display.value = result;
    }
});

var container = document.createElement("div")
container.setAttribute("class", "container")

var row1 = document.createElement("div")
row1.setAttribute("class", "row")

var row2 = document.createElement("div")
row2.setAttribute("class", "row")

var row3 = document.createElement("div")
row3.setAttribute("class", "row")

var row4 = document.createElement("div")
row4.setAttribute("class", "row")

var reset = document.createElement("button")
reset.innerHTML = "C"
reset.addEventListener("click", () => {
    display.value = ""
})

var add = document.createElement("button")
add.innerHTML = "+"
add.addEventListener("click", () => {
    display.value += "+"
})

var subtract = document.createElement("button")
subtract.innerHTML = "-"
subtract.addEventListener("click", () => {
    display.value += "-"
})

var divide = document.createElement("button")
divide.innerHTML = "/"
divide.addEventListener("click", () => {
    display.value += "/"
})

var multiply = document.createElement("button")
multiply.innerHTML = "*"
multiply.addEventListener("click", () => {
    display.value += "*"
})

var equal = document.createElement("button")
equal.innerHTML = "="
equal.addEventListener("click", () => {
    display.value = eval(display.value)
})

var seven = document.createElement("button")
seven.innerHTML = "7"
seven.addEventListener("click", () => {
    display.value += "7"
})

var eight = document.createElement("button")
eight.innerHTML = "8"
eight.addEventListener("click", () => {
    display.value += "8"
})

var nine = document.createElement("button")
nine.innerHTML = "9"
nine.addEventListener("click", () => {
    display.value += "9"
})

var six = document.createElement("button")
six.innerHTML = "6"
six.addEventListener("click", () => {
    display.value += "6"
})

var five = document.createElement("button")
five.innerHTML = "5"
five.addEventListener("click", () => {
    display.value += "5"
})

var four = document.createElement("button")
four.innerHTML = "4"
four.addEventListener("click", () => {
    display.value += "4"
})

var three = document.createElement("button")
three.innerHTML = "3"
three.addEventListener("click", () => {
    display.value += "3"
})

var two = document.createElement("button")
two.innerHTML = "2"
two.addEventListener("click", () => {
    display.value += "2"
})

var one = document.createElement("button")
one.innerHTML = "1"
one.addEventListener("click", () => {
    display.value += "1"
})

var zero = document.createElement("button")
zero.innerHTML = "0"
zero.addEventListener("click", () => {
    display.value += "0"
})

var dot = document.createElement("button")
dot.innerHTML = "."
dot.addEventListener("click", () => {
    display.value += "."
})

for (var i = 1; i <= 4; i++) {
    var col = document.createElement("div")
    col.setAttribute("class", "col-lg-12")
    col.append(seven,eight,nine,add)
    row1.append(col)
}

for (var i = 1; i <= 4; i++) {
    var col = document.createElement("div")
    col.setAttribute("class", "col-lg-12")
    col.append(four, five, six, subtract)
    row2.append(col)
}

for (var i = 1; i <= 4; i++) {
    var col = document.createElement("div")
    col.setAttribute("class", "col-lg-12")
    col.append(one, two, three, multiply)
    row3.append(col)
}

for (var i = 1; i <= 4; i++) {
    var col = document.createElement("div")
    col.setAttribute("class", "col-lg-12")
    col.append(zero, dot, reset, equal)
    row4.append(col)
}

container.append(row1,row2,row3,row4)
cardbody.append(display, container)
card.append(cardbody)
document.getElementById("box").append(heading,card)