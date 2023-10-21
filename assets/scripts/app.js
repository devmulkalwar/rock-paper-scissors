let humanScoreElement = document.querySelector("#humanScore");
let botScoreElement = document.querySelector("#botScore");
let resultElement = document.querySelector("#result");
let countElement = document.querySelector("#count");
let humanChoiceElement = document.querySelector("#humanChoice");
let botChoiceElement = document.querySelector("#botChoice");
let botChoice;
let humanChoice;
let count = 0;
let humanScore = 0;
let botScore = 0;

function generateBotChoice() {
    let randomNumber = 3 * Math.random();

    if (randomNumber > 0 && randomNumber <= 1) {
        botChoice = "Rock";
        console.log(`bot choice is ${botChoice}`);
    } else if (randomNumber > 1 && randomNumber <= 2) {
        botChoice = "Paper";
        console.log(`bot choice is ${botChoice}`);
    } else {
        botChoice = "Scissors";
        console.log(`bot choice is ${botChoice}`);
    }

    return botChoice;
}

function makeChoice(choice) {
    humanChoice = choice;
    console.log(`human choice is ${humanChoice}`);

    botChoice = generateBotChoice();
    displayChoice(humanChoice,botChoice);

    if (botChoice === humanChoice) {
        showResult("Match Draw!");
        countGame();
        console.log("match draw");
    } else if (
        (humanChoice === "Rock" && botChoice === "Scissors") ||
        (humanChoice === "Paper" && botChoice === "Rock") ||
        (humanChoice === "Scissors" && botChoice === "Paper")
    ) {
        updateHumanScore(humanScore + 1);
        showResult("Human won!");
        countGame();
        console.log("human won");
    } else {
        updateBotScore(botScore + 1);
        showResult("Bot won!");
        countGame();
        console.log("bot won");
    }
    displayScore();
}

// Function to update the human score
function updateHumanScore(score) {
    humanScore = score;
    humanScoreElement.innerHTML = `<h3>Human: ${humanScore}</h3>`;
}

// Function to update the bot score
function updateBotScore(score) {
    botScore = score;
    botScoreElement.innerHTML = `<h3>Bot: ${botScore}</h3>`;
}

// Function to show the result
function showResult(result) {
    resultElement.innerHTML = `<h3>${result}</h3>`;
}

// Function to display the score
function displayScore() {
    console.log(`Human Score: ${humanScore}, Bot Score: ${botScore}`);
}

// Function to count the game
function countGame() {
    count++;
    countElement.innerHTML = `<h3>Game Count: ${count}</h3>`;
}

// Function to display choice
function displayChoice(humanChoice,botChoice) {
    humanChoiceElement.innerHTML = `<h3>${humanChoice}</h3>`;
    botChoiceElement.innerHTML = `<h3>${botChoice}</h3>`;
}

// Reset function
function resetGame() {
    humanScore = 0;
    botScore = 0;
    count = 0;
    humanScoreElement.innerHTML = `<h3>Human: 0</h3>`;
    botScoreElement.innerHTML = `<h3>Bot: 0</h3>`;
    resultElement.innerHTML = "";
    countElement.innerHTML = `<h3>Game Count: 0</h3>`;
    humanChoiceElement.innerHTML="";
    botChoiceElement.innerHTML="";
}

function rockChoice() {
    makeChoice("Rock");
}

function paperChoice() {
    makeChoice("Paper");
}

function scissorsChoice() {
    makeChoice("Scissors");
}
