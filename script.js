var card = document.createElement("div")
card.setAttribute("class","card")
card.style.width ="500px"
card.style.height ="500px"
card.setAttribute("class", "border border-dark")
var cardbody = document.createElement("div")
cardbody.setAttribute("class","card-body")
var display = document.createElement("input")
display.setAttribute("type","text")
display.style.width="29rem"
display.style.height="50px"
display.addEventListener("input", (event) => {
    let newvalue = display.value;
    let lastchar = newvalue[newvalue.length-1]
    if(!/^[0-9.+\-*/%=]$/.test(lastchar)){
        display.value = newvalue.slice(0,-1)
        alert("Only numbers are allowed")
    }
  });

var seven = document.createElement("button")
seven.innerHTML="7"

cardbody.append(display, seven)
card.append(cardbody)
document.getElementById("box").append(card)