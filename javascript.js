/* This program runs the game Rock, Paper, Scissors in the console */

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

    // used for placement of player & computer choices
    const container     = document.querySelector("#container");
    const scores        = document.querySelector("#scoreContainer");

    const rockButton    = document.querySelector("#rockButton");
    const paperButton   = document.querySelector("#paperButton");
    const scissorButton = document.querySelector("#scissorButton");
    
    rockButton.addEventListener("click", (event) => {
        const para = document.createElement("p");
        para.textContent = `You picked Rock.`;
        container.insertBefore(para, scores);
        return "Rock";
    })

    paperButton.addEventListener("click", (event) => {
        const para = document.createElement("p");
        para.textContent = `You picked Paper.`;
        container.insertBefore(para, scores);
        return "Paper";
    })

    scissorButton.addEventListener("click", (event) => {
        const para = document.createElement("p");
        para.textContent = `You picked Scissors.`;
        container.insertBefore(para, scores);
        return "Scissors";
    })
}


// // keep tally of the scores
// let computerScore = 0;
// let humanScore    = 0; 

// function playRound(getHumanChoice, getComputerChoice) {

//     // hold the choices to use for later
//     const humanSelection     = getHumanChoice;
//     const computerSelection  = getComputerChoice;

//     // allows the user to see what was chosen as well as allow for debugging
//     console.log(`You picked ${humanSelection}.`);
//     console.log(`Computer picked ${computerSelection}`);

//     // If a tie
//     if (humanSelection === computerSelection) {
//         console.log(`You both picked ${humanSelection}. It's a tie.`);

//     // If not a tieplayRound(getHumanChoice(), getComputerChoice());

//     } else if (humanSelection != computerSelection) { 

//         // Player picks rock
//         if (humanSelection === 'rock') {
            
//             if (computerSelection === "scissors") {     // Player wins
//                 ++humanScore;
//                 console.log("You win! Rock beats scissors.");

//             } else {                                    // Computer wins
//                 ++computerScore;
//                 console.log("You lose. Paper beats rock.");
//             }

//         // Player picks paper
//         } else if (humanSelection === 'paper') {

//             if (computerSelection === 'rock') {         // Player wins
//                 ++humanScore;
//                 console.log("You win! Paper beats rock.");

//             } else {                                    // Computer Wins
//                 ++computerScore;
//                 console.log("You lose. Scissors beat paper.");               
//             }

//         // Player picks scissors
//         } else if (humanSelection === 'scissors') {

//             if (computerSelection === 'paper') {         // Player wins
//                 ++humanScore;
//                 console.log("You win! Scissors beat paper.");

//             } else {                                    // Computer Wins
//                 ++computerScore;
//                 console.log("You lose. Rock beats scissors.");               
//             }
//         }

//     // Present the socre to to the player at the end of the round. 
//     console.log(`Score: You - ${humanScore} | Computer - ${computerScore}`);

//     }
// }


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

getHumanChoice();