/*
 * DOTS: Level One
 *
 */

let score = 0;

const ball = document.querySelector('.js-ball');
let scoreDisplay = document.querySelector('.score.js-score');
const levelWinner = document.querySelector('.level-winner');


ball.addEventListener('click', function() {
    score += 10;
    scoreDisplay.innerText = padNumber(score);
    checkScore(score);
});

function checkScore(score) {
    if(score >= 100) {
        levelWinner.style.opacity = 1;
    }
}

function padNumber(number) {
    return number.toString().padStart(4, '0');
}