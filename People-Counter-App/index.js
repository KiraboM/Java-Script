/* document.getElementById("Counter").innerText = "5"; */

let countEl = document.getElementById("Counter")

console.log(countEl)
let count = 0
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
    
}