/*
 * DOTS: Level Two
 *
 */


let score = 0;
const allBalls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

const ballClicked = (Event) => {
    score += 10;

    // Update the score display
    scoreDisplay.innerText = score;

    // Check if the player's score reaches 100
    if (score >= 100) {
        // Show the win message by setting opacity to 1
        levelWinner.style.opacity = '1';
    }

    // Console log for testing purposes
};

for (let i = 0; i < allBalls.length; i++) {
    allBalls[i].addEventListener('click', ballClicked);
};