const listOfAllDice = document.querySelectorAll(".die")
const scoreInputs = document.querySelectorAll("input")
const scoreSpans = document.querySelectorAll("#score-options span")
const roundElement = document.querySelector("#current-round")
const rollsElement = document.querySelector("#current-round-rolls")
const totalScoreElement = document.querySelector("#total-score")
const scoreHistory = document.querySelector("#score-history")
const rollDiceBtn = document.getElementById("roll-dice-btn")
const keepScoreBtn = document.querySelector("#keep-score-btn")
const rulesBtn = document.querySelector("#rules-btn")
const rulesContainer = document.querySelector(".rules-container")


let isModalShowing = false

let diceValuesArr = []

let rolls = 0
let score = 0
let round =  1


/*rulesBtn.addEventListener('toggle', function check(isModalShowing) { if (isModalShowing = false) {
  return rulesContainer
} else {
  return ""
} } )
*/

rulesBtn.addEventListener('click', function() {
  if (!isModalShowing) {
    rulesContainer.style.display = 'block'
  } else {
    rulesContainer.style.display = 'none'
  }

  isModalShowing = !isModalShowing

} )

