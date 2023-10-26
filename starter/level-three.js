/*
 * DOTS: Level Three
 *
 */

let score = 0;

const balls = document.querySelectorAll('.ball.js-ball');
let scoreDisplay = document.querySelector('.score.js-score');
const winnerDisplay = document.querySelector('.level-winner');

function updateScore(evt) {
    score += Number.parseInt(evt.target.dataset.increment);
    scoreDisplay.innerText = padNumber(score);
    checkScore(score);
}

function checkScore(score) {
    if(score >= 100) {
        winnerDisplay.style.opacity = 1;
    }
}

function padNumber(number) {
    return number.toString().padStart(4, '0');
}

for(let i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', updateScore);
}