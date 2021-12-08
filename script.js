const choices = ["rock","paper","scissors"];
let random = "placeholder";
let computerChoice = "placeholder";
let playerChoice = "placeholder";
let playerScore = 0;
let computerScore = 0;
let round = 1;
let announcement = "to play the round";
let playerThrows = "Press";
let computerThrows = "1, 2, or 3";

function playRound(playerChoice,computerChoice) {

    random = Math.floor(Math.random() * choices.length);
    computerChoice = choices[random];

    playerThrows = "You throw " + playerChoice;
    computerThrows = "The computer throws " + computerChoice;
    console.log(playerThrows);
    console.log(computerThrows);

    if (playerChoice === computerChoice) {
        announcement = "It is a tie!";
        console.log(announcement);
    }
    else if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock" ) {
        announcement = "You win the round!";
        console.log(announcement);
        playerScore++;
    } else {
        announcement = "The Computer wins the round!";
        console.log(announcement);
        computerScore++;
    }

    if (computerScore == 5) {
        announcement = "The Computer beat you " + computerScore + " to " + playerScore;
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 5) {
        announcement = "You beat the computer " + playerScore + " to " + computerScore;
        playerScore = 0;
        computerScore = 0;
    } 

    console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore);
    document.getElementById("ps").innerHTML = playerScore;
    document.getElementById("cs").innerHTML = computerScore;
    document.getElementById("pt").innerHTML = playerThrows;
    document.getElementById("ct").innerHTML = computerThrows;
    document.getElementById("res").innerHTML = announcement;
}

window.addEventListener('keydown', function(e) {
    if (e.key == "1") {
        playerChoice = "rock";
    } else if (e.key == "2") {
        playerChoice = "paper";
    } else if (e.key == "3") {
        playerChoice = "scissors";
    }
    console.log(playerChoice);
    console.log(playRound(playerChoice,computerChoice));
});



/* you need to figure out how to update the html! */