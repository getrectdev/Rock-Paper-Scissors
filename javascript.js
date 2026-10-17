let computerScore = 0;
let playerScore = 0;
let round = 1;

let playerScoreboard = document.getElementById("playerScoreboard");
playerScoreboard.textContent = `Player: ${playerScore}`;

let computerScoreboard = document.getElementById("computerScoreboard");
computerScoreboard.textContent = `Computer: ${computerScore}`;

let roundBoard = document.getElementById("roundBoard");
roundBoard.textContent = `Round ${round}`;

let buttons = document.getElementById("inputButtons");


buttons.addEventListener('click', (event) => {
    let target = event.target;
    playRound(target.id);
});

function refreshBoard() {
    roundBoard.textContent = `Round ${round}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
    playerScoreboard.textContent = `Player: ${playerScore}`;
}

function getComputerChoice() {
    const randInt = Math.floor((Math.random()*3));
    if (randInt == 0) return "rock";
    else if (randInt == 1) return "paper";
    else return "scissors";
}


function decideWinner(computerChoice, playerChoice) {
	if (computerChoice == playerChoice) return "tie";
	else if (playerChoice == "rock") {
		if (computerChoice == "scissors") return "player";
		else return "computer";
    }
	else if (playerChoice == "paper") {
		if (computerChoice == "rock") return "player";
		else return "computer";
    }
	else if (playerChoice == "scissors") {
		if (computerChoice == "paper") return "player";
		else return "computer";
    }
    else console.log("One of the inputs was incorrect.");
}

function scoreRound(winner) {
    if (winner == "player") playerScore++;
    if (winner == "computer") computerScore++;
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    console.log(`Computer throws ${computerChoice}`);
    console.log(`Player throws ${playerChoice}`);
    let winner = decideWinner(computerChoice, playerChoice);
    console.log(winner);
    scoreRound(winner);
    console.log(`Player: ${playerScore} Computer: ${computerScore}`)
    scoreGame();
    round++;
    refreshBoard();
}

function scoreGame() {
    if (playerScore==5) alert("You win!");
    else if (computerScore==5) alert("You lose!");
}