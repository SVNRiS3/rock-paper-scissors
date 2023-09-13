let roundNumber = 0, playerScore = 0, computerScore = 0;


function getComputerChoice() {
    let chosenSymbol = Math.floor(Math.random() * 3) + 1;
    return chosenSymbol === 1 ? "Rock" : chosenSymbol === 2 ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelectionCapitalized = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let message = '';
    if (!['Rock', 'Paper', 'Scissors'].includes(playerSelectionCapitalized)) {
        console.log('Please choose the right symbol!');
        return;
    } else if (playerSelectionCapitalized === computerSelection) {
        message = "It's a draw";
    } else if (playerSelectionCapitalized === "Rock" && computerSelection === "Paper" || playerSelectionCapitalized === "Paper" && computerSelection === "Scissors" || playerSelectionCapitalized === "Scissors" && computerSelection === "Rock") {
        message = `You lose! ${computerSelection} beats ${playerSelectionCapitalized}`;
        computerScore++;
    } else {
        message = `You win! ${playerSelectionCapitalized} beats ${computerSelection}`;
        playerScore++;
    }
    roundNumber++;
    return message;
}

function checkScore(playerScore, computerScore) {
    return playerScore === computerScore ? "It's a draw, there's no winner!" : playerScore > computerScore ? "You won, congratulations!" : "You lost :(";
}


function game() {
    while (true) { //roundNumber < 5
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Please write your symbol: ");
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(checkScore(playerScore, computerScore));
}

game();