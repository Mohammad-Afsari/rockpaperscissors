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
