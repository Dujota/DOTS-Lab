/*
 * DOTS: Level One
 *
 */
let score = 0;
const ball = document.querySelector('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

ball.addEventListener('click', function() {
    score=score+10;
    scoreDisplay.innerText = score;
    if (score>=100) {
        levelWinner.style.opacity = 1;
    }
})

