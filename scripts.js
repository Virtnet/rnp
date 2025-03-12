let humanScore = 0;
let computerScore = 0;
const toReach = 5;
const buttons = document.querySelectorAll(".buttonchoose div");
const resultSection = document.querySelector(".result");
resultSection.classList.toggle('hidden');
const humanScoreHTML = document.querySelector("#score-me");
const pcScoreHTML = document.querySelector("#score-pc");
const winnerPopUp = document.querySelector(".popupwinner");


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
    humanScoreHTML.textContent = humanScore;
    pcScoreHTML.textContent = computerScore;
}

function whoTheWinner(humanScore,computerScore){
    if(humanScore > computerScore) return 'You';
    if(computerScore > humanScore) return 'Computer';
}

function popUpWinner(winner) {
    
    winnerPopUp.classList.toggle("hidden");
    if(winner === 'You') {
        winnerPopUp.innerHTML= "<h1>You Win!</h1>"
    } else {
        winnerPopUp.innerHTML= "<h1>You Lose!</h1>"
    }
}

function playGame() {
    let humanChoice;
    let pcChoice;
    buttons.forEach(button => button.addEventListener("click", (e) => {
        if(resultSection.classList.contains('hidden')) {resultSection.classList.toggle('hidden')};
        console.log(e);
        humanChoice = e.currentTarget.id;
        console.log(humanChoice);
        pcChoice = getComputerChoice();
        console.log(humanChoice + " " + pcChoice);
        display(humanChoice,pcChoice)
        if(humanScore >= toReach || computerScore >= toReach) {
            let winner = whoTheWinner(humanScore,computerScore);
            popUpWinner(popUpWinner);
        }
        
    }))
}

function reset(){
    
}

playGame();
