const choiceBtn = document.querySelectorAll(".btn");
const ply = document.querySelector(".player");
const computer = document.querySelector(".computer");
const winner = document.querySelector(".winner");
const counter = document.querySelector(".counter");
const playerWin = document.querySelector(".playerWin");
const botWin = document.querySelector(".botWin");
const roundWinner = document.querySelector(".roundWinner");

let player;
let bot;
let playerCounter = 0;
let botCounter = 0;
let counterNum = 5;
let timeoutID;

// Text
choiceBtn.forEach(button => button.addEventListener("click", () => {

    if (!button.disabled) {
        player = button.textContent;
        botTurn();

        ply.textContent = `You: ${player}`;
        computer.textContent = `Bot: ${bot}`;
        winner.textContent = checkWinner();

        points();
        counterDec();
        
        if (counterNum == 0) {

            choiceBtn.forEach(btn => {
                btn.disabled = true;
            });

            if (playerCounter > botCounter) {
                roundWinner.textContent = "You";
            } else if (playerCounter < botCounter){
                roundWinner.textContent = "Bot";
            } else {
                roundWinner.textContent = "Draw";
            }
            
            timeoutID = setTimeout(() => {
                resetGame();
            }, 3000);
            
        }

    }

}));

// Counter Decrase
function counterDec() {
    if (counterNum > 0) {
        counterNum--;
        counter.textContent = counterNum;
    } 
}


// Bot turn, random number -> words
function botTurn() {

    const num = Math.floor(Math.random() * 3) + 1;

    switch(num) {
        case 1:
            bot = "Rock";
            break;
        case 2:
            bot = "Paper";
            break;
        case 3:
            bot = "Scissors";
            break;
    }

}

// Check winner
function checkWinner() {

    if (player == bot) {
        return "Draw";
    } 
    else if (bot == "Rock") {
        return (player == "Paper") ? "You" : "Bot";
    } 
    else if (bot == "Paper") {
        return (player == "Scissors") ? "You" : "Bot";
    } 
    else if (bot == "Scissors") {
        return (player == "Rock") ? "You" : "Bot";
    }

}

// If the player wins the counter increase else the bot counter increase
function points() {
    if (winner.textContent.includes("You")) {
        playerCounter++;
        playerWin.textContent = playerCounter;
    } else if (winner.textContent.includes("Bot")) {
        botCounter++;
        botWin.textContent = botCounter;
    }
}

function resetGame() {
    clearTimeout(timeoutID);
    playerCounter = 0;
    playerWin.textContent = playerCounter;
    botCounter = 0;
    botWin.textContent = botCounter;
    counterNum = 5;
    counter.textContent = counterNum;
    ply.textContent = "You: ";
    computer.textContent = "Bot: ";
    winner.textContent = "";
    roundWinner.textContent = ""
    choiceBtn.forEach(btn => {
        btn.disabled = false;
    })
}