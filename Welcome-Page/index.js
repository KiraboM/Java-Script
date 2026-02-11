/* let welcomeEl = document.getElementById("welcome-el")

let name = "Kirabo"
let greeting = "Hi, my name is "

welcomeEl.innerText = greeting + name

let greetingList = ["Hello", "my", "name", "is", "Jeff"]
let greetingEl = document.getElementById("greeting")
for(let i = 0; i < greetingList.length; i++){
    greetingEl.innerText += " " + greetingList[i]
} */
let randNum = Math.floor(Math.random() * 6) + 1
console.log(randNum)

let course = {
    title: "Learn CSS Grid for Free!",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["HTML","CSS"]
}

console.log(course.length)
