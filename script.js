const choices = ["rock", "paper", "scissors"]
const playerSelection = "rock";
const computerSelection = computerPlay();

function computerPlay() {
    const computerChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[computerChoice])
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
      return ("You Win! Paper beats Scissors.")
  }
}


console.log(playRound(playerSelection, computerSelection));
