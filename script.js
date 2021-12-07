const choices = ["rock","paper","scissors"];
let random = "placeholder";
let computerChoice = "placeholder";
let playerChoice = "placeholder";
let playerScore = 0;
let computerScore = 0;
let round = 1;
let announcement = "placeholder";
let playerThrows = "placeholder";
let computerThrows = "placeholder";

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
    console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore);
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