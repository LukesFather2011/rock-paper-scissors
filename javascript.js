function getComputerChoice() {

    // assigns a random number to computerChoice from 0 to 1
    let computerChoice = Math.random();

    // used for debugging
    console.log(computerChoice)

    if (computerChoice > 0 && computerChoice <= 0.33) {
        return "rock"
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }    
}

console.log(getComputerChoice())