/*const choices = ["rock", "paper", "scissors"]

function computerPlay() {
    const computerChoice = Math.floor(Math.random() * choices.length);
    console.log("computer chose: " + choices[computerChoice])
    return choices[computerChoice]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie game!"
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose!"
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win!"
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose!"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win!"
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose!"
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win!"
  }
}

let playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */





const choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function playerPrompt() {
  playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
  return playerChoice;
}

playerSelection = playerPrompt();

function gameInfo() {
  console.log("--------------------------")
  console.log("Computer Score: " + computerScore);
  console.log("Player Score: " + playerScore);
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  console.log("Computer Chose: " + choices[computerChoice]);
  console.log("Player Chose: " + playerChoice);
  if (playerSelection == computerSelection) {
    console.log("--------------------------");
    console.log("Tie game.");
    gameInfo();
    return;
  } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
    playerScore = ++playerScore;
    console.log("--------------------------");
    console.log("You win!");
    gameInfo();
    return playerScore;
  } else {
    computerScore = ++computerScore;
    console.log("--------------------------");
    console.log("You lose.");
    gameInfo();
    return computerScore;
  }
}

// In the loop the first input doesn't display
function game() {
  let currentRound;
  for (currentRound = 1; currentRound <= 5; currentRound++) {
    let roundText = ("Round " + currentRound);
    playerPrompt()
    console.log("__________________________")
    console.log(roundText)
    console.log("__________________________")
    playRound(playerSelection, computerSelection);
  }
  if (playerScore == computerScore) {
    console.log("You tied the game against the computer.")
  } else if (playerScore > computerScore) {
    console.log("You won the game against the computer!")
  } else {
    console.log("You lost the game against the computer.")
  }
}

game()