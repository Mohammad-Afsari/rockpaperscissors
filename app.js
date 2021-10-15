"use strict"

// ------------------- Get DOM elements ------------------- \\

// Get buttons
const buttons = document.querySelectorAll("input")
const player = document.getElementById("player")
const computer = document.getElementById("computer")
const res = document.getElementById("result")

// Set initial player and computer scores to 0
let playerScore = 0;
let compScore = 0;

// Computer function and computers output
function computerPlay() {
    const outputs = ["Rock", "Paper", "Scissors"]
    return outputs[Math.floor(Math.random() * outputs.length)].toLowerCase()
}

// Logic for rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    // String to output
    let result = '';

    // Game logic
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            playerScore++
            compScore++
            result = "Tie Game!"
        } else if (computerSelection === "paper") {
            compScore++
            result = "You Lose!"
        } else if (computerSelection === "scissors") {
            playerScore++
            result = "You Win!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++
            result = "You Win!"
        } else if (computerSelection === "paper") {
            playerScore++
            compScore++
            result = "Tie Game!"
        } else if (computerSelection === "scissors") {
            compScore++
            result = "You Lose!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            compScore++
            result = "You Lose!"
        } else if (computerSelection === "paper") {
            playerScore++
            result = "You Win!"
        } else if (computerSelection === "scissors") {
            playerScore++
            compScore++
            result = "Tie Game!"
        }        
    }
    return result
}

// Add event listener to all buttons
buttons.forEach(button => {
    button.addEventListener("click", function(){
        playRound(toLowerCase(button.value), computerPlay())
        player.textContent = playerScore
        computer.textContent = compScore
        result()
    })
})

// Lower case for input
function toLowerCase(str) {
    return str.toLowerCase()
}

// Disable buttons and send message of who won
function result() {
    if (playerScore === 5) {
        buttons.forEach(element =>{
           element.disabled = true
            res.textContent = "You Won! Please refresh the page to play again!"
        })
    } else if (compScore === 5) {
        buttons.forEach(element => {
            element.disabled = true
            res.textContent = "Unlucky, you lost! Have another go but first refresh the page!"
        })
    }
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// Testing loops
// Launch countdown
let output = document.querySelector(".output")
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p')
    // if i = 10 then "Countdown 10"
    if (i === 10) {
        para.textContent = "Countdown " + i
    } else if (i === 0) {
        para.textContent = "Blastoff!"
    } else {
        para.textContent = i
    }
    // if 0 < i < 10 then "9, 8, 7, 6..., 1"
    output.appendChild(para)
    // if i = 0 then "Blast off!"
}

// Filling in a guest list
let admitted = document.querySelector('.admitted')
let refused = document.querySelector('.refused')

admitted.textContent = 'Admitted: '
refused.textContent = 'Refused: '

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];


for (let i = 0; i < people.length; i++) {
    if (people[i] === "Phil" || people[i] === "Lola") {
        refused.textContent += people[i] + ', '
    } else {
        admitted.textContent += people[i] + ', '
    }
}
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length - 2) + '.';
refused.textContent = refused.textContent.slice(0,refused.textContent.length - 2) + '.';

// Manipulating the DOM
const container = document.getElementById("container")

// Red text
const newPara = document.createElement('p')
newPara.textContent = "Hey I'm red"
newPara.style.cssText = "color: red;"
container.appendChild(newPara)

// Blue text
const newH3 = document.createElement('h3')

newH3.textContent = "I'm a blue h3!"
newH3.style.cssText = "color: blue;"
container.appendChild(newH3)

// Create new div and append a few elements
const newDivs = document.createElement('div')
const newH1s = document.createElement('h1')
const newPs = document.createElement('p')

newH1s.textContent = "I'm in a div"
newDivs.appendChild(newH1s)
newPs.textContent = "ME TOO!"
newDivs.appendChild(newPs)
newDivs.style.cssText = "background-color: pink; border: 1px solid black;"
container.appendChild(newDivs)


// Target / event listeners
const newButton = document.getElementById('clickme')

newButton.addEventListener('click',(e) =>{
    console.log(e.target.style.background = 'blue')
})