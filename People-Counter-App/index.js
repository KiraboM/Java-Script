/* document.getElementById("Counter").innerText = "5"; */
let count = 0
let countEl = document.getElementById("Counter")
let saveEl = document.getElementById("countList")

function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)

}

function decrement(){
    count -= 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    saveEl.innerText += " " + count + " - " + " "
    count = 0
    console.log(count)
    countEl.innerText = count
}