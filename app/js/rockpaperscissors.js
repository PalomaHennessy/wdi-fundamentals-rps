////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return    return var move = Math.random();
}

function getComputerMove(move) {
    return    return var move = Math.random();
}

function getWinner(playerMove,computerMove) {
    var winner;
var rock = “R”;
var paper = “P”;
var scissors = “S”;

if (playerMove.equals(computerMove) {
console.log(“Tie”);
}

else if (playerMove.equals(‘R’)) {
  if (computerMove.equals(’S’))
console.log(“Rock beats scissors, you win”);
else if (computerMove.equals(‘P’))
console.log(“Paper beats rock, you lose”);
}


else if (playerMove.equals(“S”)) {
  if (computerMove.equals(“P”))
console.log(“Scissors beats Paper, you win”);
else if (computerMove.equals(“R”))
console.log(“Rock beats scissors, you lose”);
}

else if (playerMove.equals(“P”)) {
  if (computerMove.equals(“R”))
console.log(“Paper beats rock, you win”);
else if (computerMove.equals(“S”))
console.log(“Scissors beats paper, you lose”);
}

else
console.log (“Invalid input”)
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  for (var playerWins = 0; playerWins < 5; playerWins += 1){
if (playerWins === 5) {
break;
}
for (var computerWins = 0; computerWins < 5; computerWins += 1){

if (computerWins === 5) {
break;
}
    return [playerWins, computerWins];
}

