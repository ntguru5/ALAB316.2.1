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
const title = document.createElement('h1');
title.textContent = 'Guessing Game Lab 316.3.1';
body.appendChild(title);

const message = document.createElement('p');
message.textContent = 'You have 10 guesses to guess the correct number between 1 and 100';
body.appendChild(message);

// colored progress bar to track guesses
const progressBar = document.createElement('div');
progressBar.style.width = '100%';
progressBar.style.height = '50px';
progressBar.style.backgroundColor = 'lightgray';
progressBar.style.margin = '20px 0';
body.appendChild(progressBar);

// progress bar to show number of attempts left
const progress = document.createElement('div');
progress.style.width = '100%';
progress.style.height = '100%';
progress.style.backgroundColor = 'green';
progressBar.appendChild(progress);

// hint messages
const hintMessage = document.createElement('p');
hintMessage.textContent = 'Make a guess!';
body.appendChild(hintMessage);

// Start button
const startButton = document.createElement('button');
startButton.textContent = 'Start Game';
body.appendChild(startButton);

// event listener to start game
startButton.addEventListener('click', startGame);


function startGame() {
    // generate a random number between 1-100, include 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 10;
    let minRange = 1;
    let maxRange = 100;
    console.log(randomNumber);

    while (attemptsLeft > 0) {
        const userGuess = parseInt(prompt(`Guess a number between ${minRange} and ${maxRange}. You have ${attemptsLeft} guesses left.`), 10);

        if (isNaN(userGuess) || userGuess < minRange || userGuess > maxRange) {
            alert(`Please enter a valid number between ${minRange} and ${maxRange}`);
            continue;
        }
        // calculate difference between guess and correct number
        const diff = Math.abs(userGuess - randomNumber);

        // Provide hint messages based on diff
        let hint = '';
        if (diff === 0) {
            hint = 'Congrats you psychic! You guessed the correct number!';
            updateHint(hint);
            break;
        } else if (diff <= 3) {
            hint = 'Very close! Almost there!';
        } else if ( diff <= 10) {
            hint = 'Getting warmer! Try again.';
        } else if ( diff <= 20) {
            hint = 'Way off! Try again.';
        } else if ( userGuess > randomNumber) {
            hint = 'Too high!';
        } else {
            hint = 'Too low!';
        }

        // adjust range to guide user
        if (userGuess > randomNumber) {
            maxRange = userGuess - 1;
        } else if (userGuess < randomNumber) {
            minRange = userGuess + 1;
        }

        // update hint
        updateHint(hint, 'yellow');
        attemptsLeft--;
        updateProgress(attemptsLeft);

        // end game if no attempts left
        if (attemptsLeft === 0) {
            alert(`Game over! The correct number was ${randomNumber}.`);
            updateHint(`Game over! Better luck next time.`, 'red');
        }
    }
}

// function to update hint message
function updateHint(hint, color) {
    hintMessage.textContent = hint;
    hintMessage.style.color = color;
}

// function to update progress bar
function updateProgress(attemptsLeft) {
    const progressPercentage = (attemptsLeft / 10) * 100;
    progress.style.width = progressPercentage + '%';

    if (attemptsLeft > 7) {
        progress.style.backgroundColor = 'green';
    } else if (attemptsLeft > 4) {
        progress.style.backgroundColor = 'yellow';
    } else {
        progress.style.backgroundColor = 'red';
    }

    message.textContent = `You have ${attemptsLeft} guesses left.`;
}
