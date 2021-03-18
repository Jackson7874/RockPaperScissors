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
  console.log("-------------------------- \n" 
            + "Computer Score: " + computerScore + "\n"
            + "Player Score: " + playerScore);
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log("Computer Chose: " + choices[computerChoice] + "\n"
            + "Player Chose: " + playerChoice);
    if (playerSelection == computerSelection) {
        console.log("-------------------------- \n"
                + "Tie.");
        gameInfo();
        return;
  } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        playerScore = ++playerScore;
        console.log("-------------------------- \n"
                + "You win!");
        gameInfo();
        return playerScore;
  } else {
        computerScore = ++computerScore;
        console.log("-------------------------- \n"
                + "You lose.");
        gameInfo();
        return computerScore;
  }
}

// First choice input doesnt log in console
function game() {
    playerPrompt();
    let roundText = ("Round " + currentRound);
    console.log("__________________________ \n"
                + roundText + "\n"
                + "__________________________");
    playRound(playerSelection, computerSelection);
}

let currentRound;
function startGame() {
    for (currentRound = 1; currentRound <= 5; currentRound++) {
        game()
    }
    if (playerScore == computerScore) {
        console.log("You tied the game against the computer.");
    } else if (playerScore > computerScore) {
        console.log("You won the game against the computer!");
    } else {
        console.log("You lost the game against the computer.");
    }
}

startGame()