const contEl = document.getElementById("container")

contEl.innerHTML = "<button onclick = 'buy()'>" + "Buy!" + "</button>"

function buy(){
    contEl.innerHTML += "<p>" + "Thanks for your purchase!" + "</p>"
}