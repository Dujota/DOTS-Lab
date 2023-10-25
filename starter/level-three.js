/*
 * DOTS: Level Three
 *
 */

/* UI */

var score = 0;
var scoreDisplay = document.querySelector('.js-score');
var levelWinner = document.querySelector('.level-winner');
levelWinner.style.transform = 'scale(.5, .5) translate(-80%, -80%)'; // Adding a default scale and position
levelWinner.style.transformOrigin = 'center'; // Best if configure the origin for the transform

/* Renderers */

function renderDisplay(e) {
    scoreDisplay.innerText = e.toString().padStart(4,'0'); // An efficient way of doing ES2017 way
}

fadeIn = () => { levelWinner.style.opacity = .8; }
function displayWinner() {
    // levelWinner.style.transition = 'opacity 400ms ease-in';
    levelWinner.style.transition = 'opacity 600ms cubic-bezier(.87,-.41,.19,1.44)';
    levelWinner.style.backgroundColor = 'paleturquoise';
    levelWinner.style.borderRadius = '8px';
     levelWinner.style.transform = 'scale(1, 1) translate(-50%, -50%)'; // Changing the scale and position
    fadeIn();
}

/* Iterator */

function incrementScore(e) {
    score += e;
    renderDisplay(score)
}

/* Events */

let balls = document.querySelectorAll('.js-ball');


function handleClick(event) {
    incrementValue = Number(event.target.dataset.increment);
    incrementScore(incrementValue);
    console.log(incrementValue);
    // incrementScore();
    if (score >= 100) {
      displayWinner();
      balls.forEach((ball) => {
        ball.removeEventListener('click', handleClick);
        ball.style.pointerEvents = "none"; // a fall back if it doesn't remove the event listener
      });
    }
}


balls.forEach((ball) => {
    // console.dir(parseInt(balls[0].dataset.increment));
    // console.dir(ball.dataset.increment);
    // ball.addEventListener('click', handleClick(parseInt(balls[0].dataset.increment));
    ball.addEventListener('click', handleClick);

});
