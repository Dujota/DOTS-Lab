/*
 * DOTS: Level Two
 *
 */

let score = 0;

const balls = document.querySelectorAll('.ball.js-ball');
const scoreDisplay = document.querySelector('div.level-header__score h2.score.js-score');
const winnerDisplay = document.querySelector('.level-winner');

for(let i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', function() {
        score += 10;
        scoreDisplay.innerText = padNumber(score);
        checkScore(score);
    });
};

function checkScore(score) {
    if(score >= 100) {
        winnerDisplay.style.opacity = 1;
    }
}

function padNumber(number) {
    return number.toString().padStart(4, '0');
}