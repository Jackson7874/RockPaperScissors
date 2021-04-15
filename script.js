let playerScore = 0;
let computerScore = 0;
let round = 1;
let outcome = '';
const choices = ['rock', 'paper', 'scissors'];

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const roundsCounter = document.getElementById('roundText');
    roundsCounter.innerHTML = round;
const playerWins = document.getElementById('playerScoreText');
const computerWins = document.getElementById('computerScoreText');
const playerChoseBox = document.getElementById('playerUpdates');
const computerChoseBox = document.getElementById('computerUpdates');
const roundResultsBox = document.getElementById('roundUpdates');

const popUp = document.getElementById('popUp')
const newGameButton = document.getElementById('ngButton')
const outcomeText = document.getElementById('outcome')

function computerPlay() {
    const choice = Math.floor(Math.random() * choices.length);
    choices[choice];
    return choices[choice];
}

function roundTracker() {
    if (playerScore == 5 || computerScore == 5) {
        roundsCounter.innerHTML = round;
        popUp.style.display = 'block';
    } else {
        round +=1;
        roundsCounter.innerHTML = round;
        return round
    }
}

function choicesDisplay(playerChoice, computerChoice) {
    const playerChose = document.createElement('p');
    playerChose.textContent = playerChoice;
    playerChose.style.width = '100%';
    playerChoseBox.appendChild(playerChose);

    const computerChose = document.createElement('p');
    computerChose.textContent = computerChoice;
    computerChose.style.width = '100%';
    computerChoseBox.appendChild(computerChose);
}

function win() {
    playerScore += 1;
    playerWins.innerHTML = playerScore;
    outcome = 'Won';
    outcomeText.innerHTML = 'You ' + outcome + '!';

    const roundResults = document.createElement('p');
    roundResults.textContent = 'Player Won Round ' + round + '!';
    roundResults.style.color = 'green';
    roundResultsBox.appendChild(roundResults);

    return playerScore
}

function loss() {
    computerScore += 1;
    computerWins.innerHTML = computerScore
    outcome = 'Lost';
    outcomeText.innerHTML = 'You ' + outcome + '.';

    roundResults = document.createElement('p');
    roundResults.textContent = 'Player Lost Round ' + round + '.';
    roundResults.style.color = 'red';
    roundResultsBox.appendChild(roundResults);

    return computerScore
}

function tie() {
    roundResults = document.createElement('p');
    roundResults.textContent = 'Player and Computer Tied Round ' + round + '.';
    roundResults.style.color = 'white';
    roundResultsBox.appendChild(roundResults);
    outcome = 'Tied';
    outcomeText.innerHTML = 'You ' + outcome + '.';
}

function game(playerChoice) {
    const computerChoice = computerPlay();
    switch (playerChoice + "-" + computerChoice) {
        case 'rock-scissors':
        case 'paper-rock':
        case 'scissors-paper':
            win();
            break
        case 'rock-paper':
        case 'paper-scissors':
        case 'scissors-rock':
            loss();
            break
        case 'rock-rock':
        case 'paper-paper':
        case 'scissors-scissors':
            tie();
            break
    }
    roundTracker();
    choicesDisplay(playerChoice, computerChoice);
}

newGameButton.onclick = function() {
    location.reload();
}

function playGame() {
    rockButton.addEventListener('click', function() {
        game('rock');
    })

    paperButton.addEventListener('click', function() {
        game('paper');
    })

    scissorsButton.addEventListener('click', function() {
        game('scissors');
    })
}

playGame();