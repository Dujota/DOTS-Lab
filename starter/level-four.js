const scoreDisplay = document.querySelector('.js-score')
const balls = document.querySelectorAll('.js-ball')
const levelWinner = document.querySelector('.level-winner')

let clickCount = 0

function trackClicks(e) {
    const clickedBall = e.currentTarget;
    const amountOfPoints = parseInt(clickedBall.dataset.increment);
    clickCount = clickCount + amountOfPoints;
    scoreDisplay.innerText = clickCount;


    if (clickCount >= 100) {
        levelWinner.style.opacity = 1;
    } else {
        levelWinner.style.opacity = 0;
    }
}

balls.forEach(ball => {
    ball.addEventListener('click', trackClicks);
});