let playerScore = 0, computerScore = 0;
const symbolButtons = document.querySelectorAll('button');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');


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
    return message;
}

function checkScore(playerScore, computerScore) {
    return playerScore > computerScore ? "You won, congratulations!" : "You lost :(";
}




function game() {
    reset.style.visibility = "hidden";
    symbolButtons.forEach((symbol) => {
        symbol.addEventListener('click', (e) => {
            if (![playerScore, computerScore].includes(5)) {
                let computerSelection = getComputerChoice();
                let playerSelection = e.target.textContent;
                message.textContent = playRound(playerSelection, computerSelection);
                score.textContent = `You: ${playerScore}      Computer: ${computerScore}`
                if ([playerScore, computerScore].includes(5)) {
                    result.textContent = checkScore(playerScore, computerScore);
                    reset.addEventListener('click', () => {
                        playerScore = 0;
                        computerScore = 0;
                        message.textContent = '';
                        score.textContent = '';
                        result.textContent = '';
                        reset.style.visibility = "hidden";
                    })
                    reset.style.visibility = "visible";
                }
            }
        })
    })
}

game();