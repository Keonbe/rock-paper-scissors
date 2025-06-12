//console.log("Hello World"); //Test

//Function for computer generated output
function getComputerChoice() {
    const Choice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    let output = Choice[index];
    return output;
}
//console.log(getComputerChoice()); //Debug Computer Output

//Function for user input, assume correct user types
function getHumanChoice() {
    output = prompt("Please enter your choice: rock, paper, scissors"); //Case sensitive
    return output;
}

//Track Scores
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase === computerChoice) {
        console.log("Tie");

    } else if (humanChoice.toLowerCase === "rock" && computerChoice === "paper") {
        console.log(`You lose! ${computerChoice}$ beats ${humanChoice}`);
        computerScore++;

    } else if (humanChoice.toLowerCase === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;

    } else if (humanChoice.toLowerCase === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;

    } else if (humanChoice.toLowerCase === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice}$ beats ${humanChoice}`);
        computerScore++;

    } else if (humanChoice.toLowerCase === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice}$ beats ${humanChoice}`);
        computerScore++;

    } else if (humanChoice.toLowerCase === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}

//Main Function
function playGame(){
    for (let i = 0; i < 5; i++){
        //let humanSelection = getHumanChoice(); //Get Human Choice
        //let computerSelection = getComputerChoice(); //Get Computer Choice
        //playRound(humanSelection, computerSelection);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Winner: User");
    } else if (humanScore > computerScore) {
        console.log("Winner: Computer");
    } else {
        console.log(`Its a Tie! \nYour Score: ${humanScore}\nComputer Score ${computerScore}.`);
    }
}


// Main Program Below
playGame();
