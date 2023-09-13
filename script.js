let roundNumber = 0, playerScore = 0, computerScore = 0;
const symbolButtons = document.querySelectorAll('button');


function getComputerChoice() {
    let chosenSymbol = Math.floor(Math.random() * 3) + 1;
    return chosenSymbol === 1 ? "Rock" : chosenSymbol === 2 ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let message = '';
    if (!['Rock', 'Paper', 'Scissors'].includes(playerSelection)) {
        console.log('Please choose the right symbol!');
        return;
    } else if (playerSelection === computerSelection) {
        message = "It's a draw";
    } else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        message = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    } else {
        message = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    roundNumber++;
    return message;
}

function checkScore(playerScore, computerScore) {
    return playerScore > computerScore ? "You won, congratulations!" : "You lost :(";
}




function game() {
    symbolButtons.forEach((symbol) => {
        symbol.addEventListener('click', (e) => {
            let computerSelection = getComputerChoice();
            let playerSelection = e.textContent;
            playRound(playerSelection, computerSelection);
        })
    })
    console.log(checkScore(playerScore, computerScore));
}

game();