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
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
// Round 1
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// Round 2
const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();
playRound(humanSelection2, computerSelection2);

// Round 3
const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();
playRound(humanSelection3, computerSelection3);

// Round 4
const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();
playRound(humanSelection4, computerSelection4);

// Round 5
const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();
playRound(humanSelection5, computerSelection5);

console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
} else if (humanScore < computerScore) {
    console.log("Sorry, the computer wins this time.");
} else {
    console.log("It's a draw!");
}
}
    
playGame();