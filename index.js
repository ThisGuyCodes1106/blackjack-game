const startBtn = document.getElementById("startBtn")
const messageEl = document.getElementById("messageEl")
const sumEl = document.getElementById("sumEl")
const cardsEl = document.getElementById("cardsEl")
const playerEl = document.getElementById("playerEl")
const newCardBtn = document.getElementById("newCardBtn")

let player = {
  name: "Player",
  chips: 100,
}
playerEl.textContent = player.name + ": $" + player.chips

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {

  if (sum < 21) {
    message = "Draw new card?"
  } else if (sum === 21) {
    message = "Blackjack!"
  } else {
    message = "You're out of the game"
    isAlive = false
  }
  
  messageEl.innerText = message
  cardsEl.innerText = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
    
  }

  sumEl.innerText = "Sum: " + sum

  renderButtons()

}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard === 1) {
    randomCard = 11
  } else if (randomCard > 10) {
    randomCard = 10
  }
  return randomCard
}

function newCard() {
  if (isAlive && hasBlackjack === false) {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    console.log(cards);
    renderGame()
  }
}

function renderButtons() {
  if (isAlive) {
    newCardBtn.style.display = "block"
    startBtn.style.display = "none"
  } else {
    newCardBtn.style.display = "none"
    startBtn.style.display = "block"
  }
}

startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);
