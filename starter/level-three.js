/*
 * DOTS: Level Three
 *
 */
var score = 0;
const allBalls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

const ballClicked = (Event) => {
    // get points value from event current target
    const points = parseInt(Event.currentTarget.getAttribute('data-increment'));

    score += points;

    scoreDisplay.innerText = score;

    if (score >= 100) {
        levelWinner.style.opacity = '1';
    }

};

for (let i = 0; i < allBalls.length; i++) {
    allBalls[i].addEventListener('click', ballClicked);
};