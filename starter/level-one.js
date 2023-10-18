/*
 * DOTS: Level One
 *
 */

const scoreDisplay = document.querySelector('.js-score')
const ball = document.querySelector('.js-ball')
const levelWinner = document.querySelector('.level-winner')

let clickCount = 0

function trackClicks() {
    clickCount = clickCount + 10
    scoreDisplay.innerText = clickCount

    if (clickCount === 100) {
        levelWinner.style.opacity = 1;
    } else {
        levelWinner.style.opacity = 0;
    }
}

ball.addEventListener('click', trackClicks)
