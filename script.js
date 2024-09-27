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
let randomNumber, attemptsLeft, minRange, maxRange;

// document body and title
const body = document.body;
const title = document.createElement('h1');
title.textContent = 'Guessing Game Lab 316.3.1';
body.appendChild(title);

const message = document.createElement('p');
message.textContent = `Click Start Game! You have 10 guesses to guess the correct number between 1 and 100.`;
body.appendChild(message);

// colored progress bar to track guesses
const progressBar = document.createElement('div');
progressBar.style.width = '100%';
progressBar.style.height = '50px';
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

// Inout for user guess
const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'Enter your guess';
body.appendChild(input);

// guess button
const guessButton = document.createElement('button');
guessButton.textContent = 'Submit Guess';
body.appendChild(guessButton);

// Start button
const startButton = document.createElement('button');
startButton.textContent = 'Start Game';
body.appendChild(startButton);

// event listener to start game
startButton.addEventListener('click', startGame);

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // generate a random number
    attemptsLeft = 10;
    minRange = 1;70557050
    maxRange = 100;7055
    console.log(randomNumber); // for testing purposes
    input.disabled = false;
    guessButton.disabled = false;
    hintMessage.textContent = 'Make a guess!';
    progress.style.width = '100%';
    progress.style.backgroundColor = 'green';
    // message.textContent = 'You have 10 guesses to guess the correct number between 1 and 100';
}
    // event listener to handle user guess
    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(input.value, 10);

        if (isNaN(userGuess) || userGuess < minRange || userGuess > maxRange) {
            alert(`Please enter a valid number between ${minRange} and ${maxRange}`);
            return;
        }

        // calculate difference between guess and correct number
        const diff = Math.abs(userGuess - randomNumber);

        let hint = '';
        if (diff === 0) {
            hint = 'Congrats you psychic! You guessed the correct number!';
            updateHint(hint, 'green');
            endGame(true);
            return;
        } else if (diff <= 3) {
            hint = 'Very close! Almost there!';
        } else if (diff <= 10) {
            hint = 'Getting warmer! Try again.';
        } else if (diff <= 20) {
            hint = 'Way off! Try again.';
        } else if (userGuess > randomNumber) {
            hint = 'Too high!';
        } else {
            hint = 'Too low!';
        }

        // adjust range to guide user
        if (userGuess > randomNumber) {
            maxRange = userGuess - 1;
        } else {
            minRange = userGuess + 1;
        }

        attemptsLeft--;
        updateHint(hint, 'yellow');
        updateProgress(attemptsLeft);

        // end game if no attempts left
        if (attemptsLeft === 0) {
            updateHint(`Game over! The correct number was ${randomNumber}.`, 'red');
            endGame(false);
        }
    });

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

    // function to update hint message
    function updateHint(hint) {
        hintMessage.textContent = hint;
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

    // function to end the game
    function endGame(isWin) {
        input.disabled = true;
        guessButton.disabled = true;
        if (isWin) {
            alert('Congratulations! You guessed the correct number!');
        } else {
            alert('Sorry, you ran out of guesses!');
        }
    }
