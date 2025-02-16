/*  
Here we are
That's the Rock Paper Scissors game coding for The Odin Project

Let's begin with reasoning

The user needs to play against the computer.

I have to generate a function to return the correct choice and exclude any input different from the three choices.

Then I need a function to generate the computer's choice using the Math.random() method. Study about this on MDN.

After this, the next step is to create a function that compares the two choices and determines the winner.
Then I need to use a variable to count the winner of each round, because the game will play for 5 rounds.

After 5 rounds, the game will declare the overall winner.

I will use console.log() frequently to check the code and understand if it works.

Now, the best thing to do is to start the pseudocode. Or is this the pseudocode? Who knows.
*/

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?");
    let humanChoiceLower = humanChoice.toLowerCase();
    if (humanChoiceLower === "rock" || humanChoiceLower === "paper" || humanChoiceLower === "scissors") {
        console.log("Human Choice: " + humanChoiceLower);
        return humanChoiceLower;
    } else {
        console.log("Invalid input");
        alert("Please only choose rock, paper or scissors");
        return getHumanChoice();
    }
}

function getComputerChoice() {
    let randomValue = Math.random();
    let computerChoice;
    console.log(randomValue);
    if (randomValue >= 0 && randomValue < 0.3) {
        computerChoice = "rock";
        console.log("Computer Choice: " + computerChoice);
        return computerChoice;
    } else if (randomValue >= 0.3 && randomValue < 0.7) {
        computerChoice = "paper"; 
        console.log("Computer Choice: " + computerChoice);
        return computerChoice;
    } else if (randomValue >= 0.7 && randomValue < 1) {
        computerChoice = "scissors";
        console.log("Computer Choice: " + computerChoice);
        return computerChoice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoiceValue = getHumanChoice();
    let computerChoiceValue = getComputerChoice();

    console.log("Human Check: " + humanChoiceValue);
    console.log("Computer Check: " + computerChoiceValue);
         
    if (humanChoiceValue === "rock" && computerChoiceValue === "rock") {
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("TIE! No one wins this match!");
    }
    if (humanChoiceValue === "rock" && computerChoiceValue === "paper") {
        computerScore += 1;
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("Computer wins this match!");
    }
    if (humanChoiceValue === "rock" && computerChoiceValue === "scissors") {
        humanScore += 1;
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("Human wins this match!");
    }
    if (humanChoiceValue === "paper" && computerChoiceValue === "rock") {
        humanScore += 1;
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("Human wins this match!");
    }
    if (humanChoiceValue === "paper" && computerChoiceValue === "paper") {
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("TIE! No one wins this match!");
    }
    if (humanChoiceValue === "paper" && computerChoiceValue === "scissors") {
        computerScore += 1;
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("Computer wins this match!");
    }
    if (humanChoiceValue === "scissors" && computerChoiceValue === "rock") {
        computerScore += 1;
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("Computer wins this match!");
    }
    if (humanChoiceValue === "scissors" && computerChoiceValue === "paper") {
        humanScore += 1;
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("Human wins this match!");
    }
    if (humanChoiceValue === "scissors" && computerChoiceValue === "scissors") {
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        console.log("TIE! No one wins this match!");
    }
}

function playGame() {
    for (let round = 0; round < 5; round++) {
        playRound();
        console.log("Round: " + round);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations, you are the winner of the game!");
    } else if (humanScore === computerScore) {
        console.log("The game is a tie!");
    } else {
        console.log("Sorry, the computer won the game.");
    }
}

playGame();