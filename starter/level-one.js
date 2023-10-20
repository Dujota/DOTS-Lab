/*
 * DOTS: Level One
 *
 */

/* UI */

var leadingZeros = '';
var score = 0; //I had this as a string '', the reason why my renderDisplay wasn't working
var scoreDisplay = document.querySelector('.js-score');
var levelWinner = document.querySelector('.level-winner');


/* Renderers */

function renderDisplay(e) {
    scoreDisplay.innerText = e.toString().padStart(4,'0'); // An efficient way of doing ES2017 way
    // console.log(scoreDisplay);
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
// theBall.addEventListener('click', () => {console.log('Bruh')} );


ball.addEventListener('click', () => { 
    // const { target } = e;
    // console.log(target);
    // return leadingZeros.substring(0) + scoreDisplay++;
    // if (scoreDisplay === '0000') {
        incrementScore()
    //     // console.log((leadingZeros.padStart(4,'0') + scoreCounter).slice(-4));
    //     console.log(Number((leadingZeros.padStart(4,'0') + scoreCounter).slice(-4)));
    // }
    if (score >= 100) {
        // check if it reaches 100 and display the winner element
        displayWinner();
        // ball.removeEventListener('click', incrementScore);
    }
} );
// console.log(scoreDisplay.innerText); //logs 0000 text
