/* 
Iniziamo a ballare la samba! 
Dobbiamo strutturare l'algoritmo per generare il gioco forbice, carta, sasso, ma in inglese!

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

console.log("Welcome to Rock Paper Scissors game!");
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or scissors?");
    if (humanChoice == "Rock" || humanChoice == "Paper" || humanChoice == "Scissors") {
        console.log(humanChoice);
    }
    else {
        return console.log("non valido");
    }
    }

getHumanChoice();