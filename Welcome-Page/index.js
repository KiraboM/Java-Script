let welcomeEl = document.getElementById("welcome-el")

let name = "Kirabo"
let greeting = "Hi, my name is "

welcomeEl.innerText = greeting + name

let emoji = 
welcomeEl.innerText += "👋🏾"

let greetingList = ["Hello", "my", "name", "is", "Jeff"]
let greetingEl = document.getElementById("greeting")
for(let i = 0; i < greetingList.length; i++){
    greetingEl.innerText += " " + greetingList[i]
}