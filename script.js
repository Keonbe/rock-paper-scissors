//Track Score
let humanScore = 0;
let computerScore = 0;

// Function: computer generated output
function getComputerChoice() {
    const Choice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    let output = Choice[index];
    return output;
}
//console.log(getComputerChoice()); //Debug Computer Output


// Replace prompt with buttons, Use of DOM JS
const resultsDiv = document.getElementById("results"); 
const scoreDiv = document.getElementById("score");

// DOM 'addEventListener' function
document.getElementById("rock").addEventListener("click", function() {
  playGame("rock");
});

document.getElementById("paper").addEventListener("click", function() {
  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
  playGame("scissors");
});

// Function: Round Logic
function playGame(humanChoice) {
  const computerChoice = getComputerChoice(); // Get the computer's choice
  playRound(humanChoice, computerChoice); // Play one round and update scores
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`; // Update score
  checkWinner(humanChoice, computerChoice); // Check if 5 points yet
}

// Function: Game Logic
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    var message = "You chose " + humanChoice + ", computer chose " + computerChoice + ". ";
    if (humanChoice === computerChoice) { // Tie
        message += "It's a tie!";
    } else if ( // Player lose
        (humanChoice === "rock"     && computerChoice === "paper")    ||
        (humanChoice === "paper"    && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        message += "You lose this round!";
        computerScore++;
    } else { // Player wins
        message += "You win this round!";
        humanScore++;
    }

    resultsDiv.textContent = message; // Display result
}

 // Function: End game and declare a winner
function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            resultsDiv.textContent = `Final score! You win` + ` (You: ${humanScore}, Computer: ${computerScore})`;
        } else {
            resultsDiv.textContent = `Final score! You lose` + ` (You: ${humanScore}, Computer: ${computerScore})`;
        }
        document.querySelectorAll("button").forEach(btn => btn.disabled = true); //Disable buttons after 5 score
    }
}
