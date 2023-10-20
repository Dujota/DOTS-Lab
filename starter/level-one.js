/*
 * DOTS: Level One
 *
 */

/* UI */

var score = 0;
var scoreDisplay = document.querySelector('.js-score');
var levelWinner = document.querySelector('.level-winner');

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
    fadeIn();
}

/* Incrementor */

function incrementScore() {
    score += 10; // Somehow I misread the prompt about Set the `innerText` property of `scoreDisplay` equal to `score` to accomplish this. I had it as score = scoreDisplay += 10;; when I had line 10 uncommented
    renderDisplay(score)
}

/* Events */

let ball = document.querySelector('.js-ball');

ball.addEventListener('click', () => { 
    incrementScore()
    if (score >= 100) {
        // check if it reaches 100 and display the winner element
        displayWinner();
        // ball.removeEventListener('click', incrementScore);
    }
} );
