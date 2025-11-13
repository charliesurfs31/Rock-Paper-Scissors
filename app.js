// declare score variables
let humanScore = 0;
let computerScore = 0;

// computer logic function
function getComputerChoice() {
    const randNum = Math.random();
    if (randNum <= 0.32) {
        return "rock"
    } else if (randNum <= 0.65) {
        return "paper"
    } else {
        return "scissors"
    }
}
// human logic function
function getHumanChoice() {
   let userChoice = prompt("Rock, Paper, or Scissors?");
   return userChoice;
}
// game logic function
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        console.log("It's a tie")
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.")
        humanScore++
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.")
        humanScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper.")
        humanScore++
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore++
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);