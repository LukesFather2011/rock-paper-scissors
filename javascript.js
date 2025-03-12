/* This program runs the game Rock, Paper, Scissors in the console */

// function getComputerChoice() { 

//     // assigns a random number to computerChoice from 0 to 1
//     let computerChoice = Math.random();

//     // used for debugging
//     console.log(computerChoice)

//     // Try to divide into thirds to make it fair.
//     if (computerChoice > 0 && computerChoice <= 0.33) {
//         return "rock";

//     } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
//         return "paper";

//     } else {
//         return "scissors";
//     }    
// }


// function getHumanChoice() {

//     // store and convert input to lowercase letter to ensure consistency.
//     let humanChoice = prompt("Please enter 'r' for Rock, 'p' for Paper, or 's' for Scissors.").toLowerCase();

//     console.log(humanChoice);
    
//     if (humanChoice === "r") {
//         return "rock";

//     } else if (humanChoice === "p") {
//         return "paper";

//     } else if (humanChoice === "s") {
//         return "scissors";

//     } else {
//         return "Please make a valid entry.";
//     }
// }


// keep tally of the scores
let computerScore = 0;
let humanScore =    0; 
