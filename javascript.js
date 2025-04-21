// This program plays Rock, Paper, Scissors in a web browser.

// used for placement of player & computer choices
const container     = document.querySelector("#container");
const humanTotal    = document.querySelector("#playerScore");
const computerTotal = document.querySelector('#computerScore');

// keep tally of the scores
let computerScore = 0;
let humanScore    = 0; 

// containers to update the player and computer choices
const playerChoice   = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");


function getComputerChoice() { 

    // assigns a random number to computerChoice from 0 to 1
    let randomPick = Math.random();

    // Try to divide into thirds to make it fair.
    if (randomPick > 0 && randomPick <= 0.33) {
        computerChoice.textContent("Rock");

    } else if (randomPick > 0.33 && randomPick <= 0.66) {
        computerChoice.textContent("Paper");

    } else {
        computerChoice.textContent("Scissors");

    }    
}

