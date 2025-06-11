//console.log("Hello World"); //Test

//Function for computer generated output
function getComputerChoice() {
    const Choice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    let output = Choice[index];
    return output;
}
//console.log(getComputerChoice()); Debug Computer Output

//Function for user input, assume correct user types
function getHumanChoice() {
    let output = prompt("Please enter your choice: rock, paper, scissors", ""); //Case sensitive
    return output.toLowerCase;
}

//Track Scores
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Tie");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log(`You lose! ${computerChoice}$ beats ${humanChoice}`);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Tie");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log(`You lose! ${computerChoice}$ beats ${humanChoice}`);
    }

    if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log(`You lose! ${computerChoice}$ beats ${humanChoice}`);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Tie");
    }
}

//Main Function
function playGame(){
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice() //Get Computer Choice
        let computerChoice = getComputerChoice() //Get User Choice
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("Winner: User");
    } else if (humanScore > computerScore) {
        console.log("Winner: Computer");
    }
}


// Main Program Below
playGame();

