let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const randInt = Math.floor((Math.random()*3));
    if (randInt == 0) return "rock";
    else if (randInt == 1) return "paper";
    else return "scissors";
}

function getPlayerChoice() {
    let playerInput = prompt("Enter rock, paper, or scissors: ");
    return playerInput;
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

function playRound(i) {
    console.log(`Round ${i}`);
    let computerChoice = getComputerChoice();
    console.log(`Computer throws ${computerChoice}`);
    let playerChoice = getPlayerChoice();
    console.log(`Player throws ${playerChoice}`);
    let winner = decideWinner(computerChoice, playerChoice);
    console.log(winner);
    scoreRound(winner);
    console.log(`Player: ${playerScore} Computer: ${computerScore}`)
}

function playGame() {
	for (let i=0; i<5; i++) {
			playRound(i);
	}
    if (playerScore>computerScore) console.log("You win!");
    else console.log("You lose!");
}

playGame();