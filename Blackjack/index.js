let firstCard = 12
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let message = ""
let messageEl = document.getElementById("message")
/* let sumEL = document.getElementById("sum") */
let sumEL = document.querySelector("#sum")
let cardsEl = document.getElementById("cards")
//Checks if player is still in game
let blackjack = false
let isAlive = true

function startGame(){
    playGame()
}

function playGame(){
    cardsEl.innerText = "Cards:" + " " + cards[0] + " " + cards[1]
    if(sum <= 20){
    message = "Do you want to draw a new card?"
    } else if (sum == 21){
        message = "BLACKJACK!"
        blackjack = true
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
    let card = 6
    sum += card
    playGame()
}