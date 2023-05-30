function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 3) {
    return 'rock';
    } else if (randomNumber === 2) {
    return 'paper';
    } else {
    return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (
    (playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors')
    ) {
    return 'tie';
    } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
    return 'win';
    } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
    return 'lose';
    }}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    for (var i = 0; i < 5; i++) {
    var userInput = prompt("Select: paper, scissors, or rock:");
    var lowercaseInput = userInput.toLowerCase();
    var playerSelection = checkPrompt(lowercaseInput);
    var computerSelection = getComputerChoice();

    if (playerSelection === null) {
        console.log("Invalid option. Round skipped.");
        continue;
    }

    var result = playRound(playerSelection, computerSelection);

    if (result === 'win') {
        playerScore++;
        console.log("You win this round!");
    } else if (result === 'lose') {
        computerScore++;
        console.log("You lose this round.");
    } else {
        console.log("It's a tie this round.");
    }
    }

    console.log("Game Over!");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game.");
    } else {
    console.log("It's a tie game.");
    }
}

function checkPrompt(lowercaseInput) {
    var possibleValues = ["rock", "paper", "scissors"];
    return possibleValues.includes(lowercaseInput) ? lowercaseInput : null;
}

game();
