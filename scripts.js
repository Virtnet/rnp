let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.random()
    let result;
    switch (true) {
        case (random <= 0.33):
            result = "Paper";
            break;
        case (random > 0.33 && random <= 0.66):
            result = "Scissors";
            break;
        case (random > 0.66):
            result = "Rock";
            break;
        default:
            result = "null";
            break;
    }
    return result;
}




function playRound(humanChoice, pcChoice) {
    humanChoice = humanChoice.toLowerCase();
    pcChoice = pcChoice.toLowerCase();
    let result = "";

    //ROCK
    if (humanChoice === "rock") {
        if (pcChoice === "rock") {
            result = "No one won, the computer choice is " + pcChoice;

        } else if (pcChoice === "paper") {
            result = "The computer choose " + pcChoice + " which BEATS " + humanChoice + " YOU LOST";
            computerScore += 1;
        } else {
            result = "The computer choose " + pcChoice + " YOU WON! ";
            humanScore += 1;
        }

        //PAPER
    } else if (humanChoice === "paper") {
        if (pcChoice === "rock") {
            result = "The computer choose " + pcChoice + " YOU WON! "
            humanScore += 1;
        } else if (pcChoice === "paper") {
            result = "No one won, the computer choice is " + pcChoice;
        } else {
            result = "The computer choose " + pcChoice + " which BEATS " + humanChoice + " YOU LOST";
            computerScore += 1;
        };

        // SCISSORS
    } else {
        if (pcChoice === "rock") {
            result = "The computer choose " + pcChoice + " which BEATS " + humanChoice + " YOU LOST";
            computerScore += 1;
        } else if (pcChoice === "paper") {
            result = "The computer choose " + pcChoice + " YOU WON! "
            humanScore += 1;
        } else { result = "No one won, the computer choice is " + pcChoice };
    }

    console.log(result);
}


function playGame() {
    let humanChoice;
    let pcChoice;
    for (i = 0; i < 5; i++) {
        humanChoice = prompt("Your choice?")
        pcChoice = getComputerChoice();
        console.log(humanChoice + " " + pcChoice);
        playRound(humanChoice, pcChoice);
        console.log(i);
    }
    alert("Your score: " + humanScore + " computer score: " + computerScore);
    console.log("Your score: " + humanScore + " computer score: " + computerScore);
}

playGame();
