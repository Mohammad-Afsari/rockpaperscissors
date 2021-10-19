"use strict"

// ------------------- Get DOM elements ------------------- \\

// Get buttons
const buttons = document.querySelectorAll("input")
const rock = document.getElementById("Rock")
const paper = document.getElementById("Paper") 
const scissors = document.getElementById("Scissors") 
const player = document.getElementById("player")
const computer = document.getElementById("computer")
const res = document.getElementById("result")
const restartButton = document.getElementById("restbtn")


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
            res.textContent = "Tie!"
            result = "Tie Game!"
        } else if (computerSelection === "paper") {
            compScore++
            result = "You Lose!"
            res.textContent = "Unlucky, the computer chose paper!"
        } else if (computerSelection === "scissors") {
            playerScore++
            result = "You Win!"
            res.textContent = "Well done! You smashed those scissors!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++
            result = "You Win!"
            res.textContent = "Well done, your paper killed that rock!"
        } else if (computerSelection === "paper") {
            res.textContent = "Tie!"
            result = "Tie Game!"
        } else if (computerSelection === "scissors") {
            compScore++
            result = "You Lose!"
            res.textContent = "Unlucky, your paper got split in two!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            compScore++
            result = "You Lose!"
            res.textContent = "Unlucky, your scissors were smashed!"
        } else if (computerSelection === "paper") {
            playerScore++
            result = "You Win!"
            res.textContent = "Well done! You split that paper in two!"
        } else if (computerSelection === "scissors") {
            res.textContent = "Tie!"
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
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        restartButton.disabled = false
        res.textContent = "You Won! Click restart if you wish to play again!"
    } else if (compScore === 5) {
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        restartButton.disabled = false
        res.textContent = "Unlucky, you lost! Click restart to get some revenge!"
    }}

// Set restart button to be initially unusable
restartButton.disabled = true

// Restart button
// Set everything back to 0 and remove res.textContent
restartButton.addEventListener("click",function(){
    res.textContent = ''
    playerScore = 0
    compScore = 0
    player.textContent = 0
    computer.textContent = 0
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
    restartButton.disabled = true
})