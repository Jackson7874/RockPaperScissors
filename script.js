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

let playerSelection = prompt("Choose rock, paper, or scissors")
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));



function game() {

}