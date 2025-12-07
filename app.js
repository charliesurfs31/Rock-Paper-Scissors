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

let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        gameResult.textContent = `It's a tie.\n Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        gameResult.textContent = `You win! Rock beats scissors.\n Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        gameResult.textContent = `You win! Paper beats rock.\n Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        gameResult.textContent = `You win! Scissors beats paper.\n Score - You: ${humanScore}, Computer: ${computerScore}`;

    }
    else {
        computerScore++
        gameResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.\n Score - You: ${humanScore}, Computer: ${computerScore}`;
    }

    if (humanScore === 5) {
        gameResult.textContent = `Congratulations! You are the overall winner!\n Final Score - You: ${humanScore}, Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        gameResult.textContent = `Sorry, the computer wins this time.\n Final Score - You: ${humanScore}, Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
}

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const gameResult = document.querySelector('#gameResult');

rockButton.addEventListener("click", function() {
    playGame("rock", getComputerChoice());
});

paperButton.addEventListener("click", function() {
    playGame("paper", getComputerChoice())
});

scissorsButton.addEventListener("click", function() {
    playGame("scissors", getComputerChoice())
});

/*
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

gameResult.textContent(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

if (humanScore > computerScore) {
    gameResult.textContent("Congratulations! You are the overall winner!");
} else if (humanScore < computerScore) {
    gameResult.textContent("Sorry, the computer wins this time.");
} else {
    gameResult.textContent("It's a draw!");
}
}
*/