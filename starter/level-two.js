/*
 * DOTS: Level Two
 *
 */


var score = 0;
const allBalls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

const ballClicked = (Event) => {
    score += 10;

    scoreDisplay.innerText = score;

    //score check
    if (score >= 100) {
        levelWinner.style.opacity = '1';
    }

};

// loop to add event listeners
for (let i = 0; i < allBalls.length; i++) {
    allBalls[i].addEventListener('click', ballClicked);
};