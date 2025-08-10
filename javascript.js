// Constants
const container             = document.querySelector("#container");
const buttons               = document.querySelectorAll("button");
const playerScoreTracking   = document.querySelector("#playerScore");
const computerScoreTracking = document.querySelector("#computerScore");
const h2 = document.createElement("h2"); // for displaying the results of the winner.

// Variables
let playerScore     = 0;
let computerScore   = 0;

// Functions
function getComputerChoice() {  // Easiest way to make it a fair choice. 
    let choice = Math.random();

    if (choice < 0.33 ) {
        return "Rock";
    } else if (choice >= 0.33 && choice < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function compareChoice(playerChoice, comChoice) {
    if (playerChoice === comChoice) {
        alert("It's a tie!");

    } else if (playerChoice === "Rock" && comChoice === "Scissors") {
        alert("Rock beats Scissors, you win!");
        playerScore += 1; 
        playerScoreTracking.textContent = playerScore;

    } else if (playerChoice === "Rock" && comChoice === "Paper") {
        alert("Paper beats Rock. You lose.");
        computerScore += 1;
        computerScoreTracking.textContent = computerScore;

    } else if (playerChoice === "Paper" && comChoice === "Rock") {
        alert("Paper beats Rock, you win!");
        playerScore += 1; 
        playerScoreTracking.textContent = playerScore;

    } else if (playerChoice === "Paper" && comChoice === "Scissors") {
        alert("Scissors beat Paper. You lose.");
        computerScore += 1;
        computerScoreTracking.textContent = computerScore;

    } else if (playerChoice === "Scissors" && comChoice === "Paper") {
        alert("Scissors beat Paper, you win!");
        playerScore += 1; 
        playerScoreTracking.textContent = playerScore;

    } else {
        alert("Rock beats Scissors. You lose.");
        computerScore += 1;
        computerScoreTracking.textContent = computerScore;
    } 
}


function checkForWin() {
    if (playerScore === 5) {
        h2.textContent = "You win the game! Congratulations!  Refresh the page to play again.";
        container.appendChild(h2);

    } else if (computerScore === 5) {
        h2.textContent = "The Computer wins the game. :(  Refresh the page to play again.";
        container.appendChild(h2);
    }
}


function playGame() {

    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let comChoice = getComputerChoice();
        let playerChoice = button.id;

        alert("You picked " + playerChoice + "!");
        alert("Computer picked " + comChoice + "!");
        compareChoice(playerChoice, comChoice);
        checkForWin();
        })
    });
}

playGame();

