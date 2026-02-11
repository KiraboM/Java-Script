let chips = 0
let cards = []
let sum = 0
let message = ""
let messageEl = document.getElementById("message")
/* let sumEL = document.getElementById("sum") */
let sumEL = document.querySelector("#sum")
let cardsEl = document.getElementById("cards")
let playerEl = document.getElementById("player")
//Checks if player is still in game
let blackjack = false
let isAlive = false

let player = {
   name:  "Kirabo",
   chips:  145
}

playerEl.innerText = player.name + ":£ " + player.chips

function startGame(){
    let firstCard = getRandomCard()
    cards = [firstCard]
    sum = firstCard
    message = ""
    blackjack = false
    isAlive = true

    playGame()
}

function playGame(){
    cardsEl.innerText = "Cards: " + cards.join(" ")
    /* for(let i = 0; i < cards.length; i++){
        cardsEl.innerText += cards[i] + " "
    } */
    if(sum <= 20){
    message = "Do you want to draw a new card?"
    } else if (sum == 21){
        message = "BLACKJACK!"
        blackjack = true
        chips+= 40
    }else{
        message = "Sorry, you lost. Money is gone!"
        isAlive = false
    }
    //Cash out
    console.log(message)
    console.log(blackjack)
    console.log(isAlive)
    sumEL.innerText = "Sum: " + sum
    messageEl.innerText = message
}

function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    if(isAlive & !blackjack){
        playGame()
    }
}

function getRandomCard(){
    let card = Math.floor(Math.random() * 13) + 1
    if(card == 1){
        card = 11
    }
    if(card >= 11 && card <= 13){
        card = 10
    }
    return card
}