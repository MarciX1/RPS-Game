const choiceBtn = document.querySelectorAll(".btn");
const ply = document.querySelector(".player");
const computer = document.querySelector(".computer");
const winner = document.querySelector(".winner");

let player;
let bot;

// Text
choiceBtn.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    botTurn();

    ply.textContent = `You: ${player}`;
    computer.textContent = `Bot: ${bot}`;
    winner.textContent = checkWinner();
}));

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

// Check winner, ok
function checkWinner() {

    if (player == bot) {
        return "Draw";
    } 
    else if (bot == "Rock") {
        return (player == "Paper") ? "You won" : "You lost";
    } 
    else if (bot == "Paper") {
        return (player == "Scissors") ? "You won" : "You lost";
    } 
    else if (bot == "Scissors") {
        return (player == "Rock") ? "You won" : "You lost";
    }

}
