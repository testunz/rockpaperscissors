/*  
Here we are
That's Rock Paper Scissors game coding for The Odin Project

Let's begin with reasoning

The user need to play against the computer. 

I have to generate a function to return the right choice, and exlucde somethings different from the three choices.

Then I need a function to generate the computer choise using the Math.random() method. Study about this on MDN.

After this the next thing to do is to create a function to compare the two choices and return the winner. 
Then I need to use a variable to count the winner of the round, because the game will play for 5 rounds.


After 5 rounds the game will return the winner of the game.

I need to use often console.log() function to check the code and understand if it works.

Now the best thing to do is to start the pseudocode. or this is the pseudocode? who knows.

*/

function getHumanChoice(){
    let humanChoice = prompt("rock, paper or scissors?");
    let humanChoiceInsensitive = humanChoice.toLowerCase();
    if (humanChoiceInsensitive == "rock" || humanChoiceInsensitive == "paper" || humanChoiceInsensitive == "scissors") {
        console.log("Human Choice :" + humanChoiceInsensitive);
        return humanChoiceInsensitive;
    }
    else {
         console.log("non valido");
         alert("Please only rock, paper or scissors")
         return getHumanChoice();
    }
    
}
function getComputerChoice(){
    let computerRandomChoice = Math.random();
    let computerChoice;
    console.log(computerRandomChoice);
    if (computerRandomChoice >= 0 && computerRandomChoice < 0.3) {
        computerChoice = "rock";
        console.log("Computer Choice :" + computerChoice);
        return computerChoice;
    }
    else if (computerRandomChoice >= 0.3 && computerRandomChoice <0.7){
        computerChoice = "paper"; 
        console.log("Computer Choice :" + computerChoice);
        return computerChoice;
    }
    else if (computerRandomChoice >= 0.7 && computerRandomChoice <1) {
        computerChoice = "scissors";
        console.log("Computer Choice :" + computerChoice);
        return computerChoice;
    
    }
    
}

const humanChoiceValue = getHumanChoice();
const computerChoiceValue = getComputerChoice();


function playGame() {
    console.log("Controllo human: " + humanChoiceValue);
    console.log("Controllo pc: "+ computerChoiceValue);
    let humanScore;
    let computerScore;
    let round;
    if (round <= 5){   
    if (humanChoiceValue == "rock" && computerChoiceValue == "rock") {
        return round += 1;
    }
    if (humanChoiceValue == "rock" && computerChoiceValue == "paper") {
        return {
            round += 1;
            computerScore += 1;
         }
    }  
    if (humanChoiceValue == "rock" && computerChoiceValue == "scissors") {
    return {
        round += 1;
        humanScore +=1;
        }
    }
    if (humanChoiceValue == "paper" && computerChoiceValue == "rock") {
        return {
            round += 1;
            humanScore += 1;
        }
    }
    if (humanChoiceValue == "paper" && computerChoiceValue == "paper") {
        return {
            round += 1;
        }
    }  
    if (humanChoiceValue == "paper" && computerChoiceValue == "scissors") {
    return {
        round += 1;
        computerScore +=1;
        }
    }

    if (humanChoiceValue == "scissors" && computerChoiceValue == "rock") {
        return {
            round += 1;
            computerScore += 1;
        }
    }
    if (humanChoiceValue == "scissors" && computerChoiceValue == "paper") {
        return {
            round += 1;
            humanScore += 1;
        }
    }  
    if (humanChoiceValue == "scissors" && computerChoiceValue == "scissors") {
    return {
        round += 1;
        }
    }
}
else {
    return {
        console.log("Round n. " + round);
        console.log("Punteggio Umano: "+ humanScore);
        console.log("Punteggio del PC: " + computerScore);
    }
}
}



playGame();