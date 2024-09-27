/** PSEUDOCODE
 * When user clicks Start Game button,
 * generate a random number
 * set initial values for attempts left
 * min range and max range 1 -100
 * While player has attempts > 0,
 * Display message asking player to guess between min and max range
 * convert input into player guess variable
 * if player guess matches, display success message
 * Calculate diff between guess and correct number
 * Create messages that give hints to player (too high, too low, very close)
 * Decrease number of attempts left, if not attempts left game is over
 * Display if player wins or loses at end
 * At end, allow player to start new game or quit
 */
// document body and title
const body = document.body;
const title = document.createElement("h1");
title.textContent = "Guessing Game Lab 316.3.1";
body.appendChild(title);

const message = document.createElement("p");
message.textContent = "You have 10 guesses to guess the correct number between 1 and 100";
body.appendChild(message);

// hint messages
const hintMessage = document.createElement("p");
hintMessage.textContent = "Make a guess!";
body.appendChild(hintMessage);

// Start button
const startButton = document.createElement("button");
startButton.textContent = "Start Game";
body.appendChild(startButton);

// event listener to start game
startButton.addEventListener("click", startGame);


function startGame() {
    // generate a random number between 1-100, include 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 10;
    let minRange = 1;
    let maxRange = 100;
    console.log(randomNumber);
}
