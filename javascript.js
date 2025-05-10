// This program plays Rock, Paper, Scissors in a web browser.

// used for placement of player & computer choices
const container      = document.querySelector("#container");
const playerSpan     = document.querySelector("#playerChoice");
const comSpan        = document.querySelector("#computerChoice");

// track scores to add to html
const humanTotal    = document.querySelector("#playerScore");
const computerTotal = document.querySelector('#computerScore');

// keep tally of the scores
let computerScore = 0;
let humanScore    = 0; 


function getComputerChoice() { 

    // assigns a random number to computerChoice from 0 to 1
    let randomPick = Math.random();

    // Try to divide into thirds to make it fair.
    if (randomPick > 0 && randomPick <= 0.33) {
        return "Rock";

    } else if (randomPick > 0.33 && randomPick <= 0.66) {
        return "Paper";

    } else {
        return "Scissors";

    }    

}

comSpan.textContent = getComputerChoice();