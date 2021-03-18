const choices = ["rock", "paper", "scissors"]

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
  }
}

let playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));