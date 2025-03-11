let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".buttonchoose button");
const resultSection = document.querySelector(".result");
resultSection.classList.toggle('hidden');

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
            result = "Draw";

        } else if (pcChoice === "paper") {
            result = "Lose";
            computerScore += 1;
        } else {
            result = "Win";
            humanScore += 1;
        }

        //PAPER
    } else if (humanChoice === "paper") {
        if (pcChoice === "rock") {
            result = "Win"
            humanScore += 1;
        } else if (pcChoice === "paper") {
            result = "Draw";
        } else {
            result = "Lost";
            computerScore += 1;
        };

        // SCISSORS
    } else {
        if (pcChoice === "rock") {
            result = "Lost";
            computerScore += 1;
        } else if (pcChoice === "paper") {
            result = "Win"
            humanScore += 1;
        } else { result = "Draw"};
    }

    console.log(result);
    return result;
}

function display(humanChoice,pcChoice){
    let textShow;
    textShow = playRound(humanChoice, pcChoice);
    resultSection.innerHTML = "<h2>Your Choose: </h2> " 
    + "<span class='yourChoice'>" + humanChoice 
    + "</span>" +  "<span class='versus'> VS </span>" 
    +  "<span class='enemyChoice'> " + pcChoice + "</span>";
    
    resultSection.innerHTML += "<h1>" + textShow + "</h1>"



}

function playGame() {
    let humanChoice;
    let pcChoice;
    buttons.forEach(button => button.addEventListener("click", (e) => {
        if(resultSection.classList.contains('hidden')) {resultSection.classList.toggle('hidden')};
        humanChoice = e.target.innerHTML;
        console.log(humanChoice);
        pcChoice = getComputerChoice();
        console.log(humanChoice + " " + pcChoice);
        display(humanChoice,pcChoice)
    }))
    console.log(buttons)
    // let humanChoice = document.querySelectorAll();
    // let pcChoice;

    // for (i = 0; i < 5; i++) {

        // console.log(i);
    // }

    // humanChoice = prompt("Your choice?")
    // pcChoice = getComputerChoice();
    // console.log(humanChoice + " " + pcChoice);
    // playRound(humanChoice, pcChoice);
    // alert("Your score: " + humanScore + " computer score: " + computerScore);
    // console.log("Your score: " + humanScore + " computer score: " + computerScore);
}

playGame();
