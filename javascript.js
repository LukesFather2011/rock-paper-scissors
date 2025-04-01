/* This program runs the game Rock, Paper, Scissors in the console */

// used for placement of player & computer choices
const container     = document.querySelector("#container");
const scores        = document.querySelector("#scoreContainer");


function getComputerChoice() { 

    // assigns a random number to computerChoice from 0 to 1
    let computerChoice = Math.random();

    // Try to divide into thirds to make it fair.
    if (computerChoice > 0 && computerChoice <= 0.33) {
        return "rock";

    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        return "paper";

    } else {
        return "scissors";
    }    
}


// Rework this function to work with buttons
function getHumanChoice() {

    const rockButton    = document.querySelector("#rockButton");
    const paperButton   = document.querySelector("#paperButton");
    const scissorButton = document.querySelector("#scissorButton");
    
    rockButton.addEventListener("click", (event) => {
        return "rock";
    })

    paperButton.addEventListener("click", (event) => {
        return "paper";
    })

    scissorButton.addEventListener("click", (event) => {
        return "scissors";
    })
}


// used to create a paragraph element in case of tie
function createParaIfTie (humanSelection) {
    const para = document.createElement("p");
    para.textContent = `You both picked ${humanSelection}. It's a tie.`;
    container.insertBefore(para, scores);
}


function checkIfWin(getHumanChoice, getComputerChoice) {

    // hold the choices to use for later
    const humanSelection     = getHumanChoice;
    const computerSelection  = getComputerChoice;

    // If a tie
    if (humanSelection === computerSelection) {
        return "tie";

    } else if (humanSelection != computerSelection) { 

        // Player picks rock
        if (humanSelection === 'rock') {
            
            if (computerSelection === "scissors") {     // Player wins
                return true;

            } else {                                    // Computer wins
                return false;
            }

        // Player picks paper
        } else if (humanSelection === 'paper') {

            if (computerSelection === 'rock') {         // Player wins
                return true;

            } else {                                    // Computer Wins
                return false;               
            }

        // Player picks scissors
        } else if (humanSelection === 'scissors') {

            if (computerSelection === 'paper') {         // Player wins
                return true;

            } else {                                    // Computer Wins
                return false;              
            }
        }
    }
}


// keep tally of the scores
let computerScore = 0;
let humanScore    = 0; 

function playRound() {  // completely rewrite to incorporate checkIfWin()


}


// // Plays the game
// function playGame() {

//     //used to keep the below while loop going
//     let gameOn = true;

//     while(gameOn) {

//         playRound(getHumanChoice(), getComputerChoice());
        
        
//         let playAgain = prompt("Do you want to play another round? ('y' or 'n')").toLowerCase();

//         if (playAgain === 'n') {
//             gameOn = false;
//         } 
//     }
// }


// // Plays the actual game
// playGame();

playRound(getHumanChoice(), getComputerChoice());