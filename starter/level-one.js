/*
 * DOTS: Level One
 *
 */

/* UI */

var leadingZeros = '';
var score = '0';
var scoreDisplay = Number(document.querySelector('.js-score').innerText);
// var scoreDisplay = document.querySelector('.js-score');
var levelWinner = document.querySelector('.level-winner');



/* Renderers */

function renderDisplay(e) {
    // scoreDisplay = Number((leadingZeros.padStart(4,'0') + (e)).slice(-4)) + e; //If I want to double up
    //scoreDisplay.innerText = (leadingZeros.padStart(4,'0') + (e)).slice(-4);

    // console.log(e);
    // scoreDisplay = Number((leadingZeros.padStart(4,'0') + (e)).slice(-4));
    
    console.log((leadingZeros.padStart(4,'0') + (e)).slice(-4));
    console.log(e);
    // scoreDisplay = Number((leadingZeros.padStart(4,'0') + (e)).slice(-4));
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
    score = scoreDisplay += 10;
    // score = Number((leadingZeros.padStart(4,'0') + (scoreDisplay)).slice(-4));
    // console.log(Number((leadingZeros.padStart(4,'0') + (scoreDisplay)).slice(-4)));
    score = (leadingZeros.padStart(4,'0') + (scoreDisplay)).slice(-4);
    // console.log(score);
    // console.log(scoreDisplay);
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
    if (score >= 20) {
        displayWinner();
        // ball.removeEventListener('click', incrementScore);
    }
} );
// console.log(scoreDisplay);
