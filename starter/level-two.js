/*
 * DOTS: Level Two
 *
 */
/* UI */

var score = 0;
var scoreDisplay = document.querySelector('.js-score');
var levelWinner = document.querySelector('.level-winner');
levelWinner.style.transform = 'scale(.5, .5) translate(-80%, -80%)'; // Adding a default scale and position

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
    score += 10
    renderDisplay(score)
}

/* Events */
// let ballCount = 1;
let balls = document.querySelectorAll('.js-ball');


// balls.forEach((ball) =>  ball.addEventListener('click', () => { 
//     incrementScore()
//     // console.log(ball);
//     if (score >= 100) {
//         // check if it reaches 100 and display the winner element
//         displayWinner();
//         balls.forEach((ball) => {
//             ball.removeEventListener('click', balls);
//          // console.log(ball.removeEventListener);
//         });
//     }
// } )); // the removeEventListener was not working, attempting a new approach, because of scope issue


function handleClick(event) {
    incrementScore();
    if (score >= 100) {
      displayWinner();
      balls.forEach((ball) => {
        ball.removeEventListener('click', handleClick);
        ball.style.pointerEvents = "none"; // a fall back if it doesn't remove the event listener
      });
    }
}

balls.forEach((ball) => {
    ball.addEventListener('click', handleClick);
});


// balls.forEach((ball) =>  addEventListener('click', (ball) => { 
//     // console.dir(ball.target.className);
//     // console.dir(ball.target.classList[1]);
    
//     const { target } = ball;
//     target.dataset.ballCount = ballCount;

//     if (target.dataset.ballCount <= 3) {
//         target.dataset.ballCount = ballCount++;
//     }
    
//     // console.log('----');
//     console.log(target.className);
//     console.log(target.dataset);
//     // console.dir(target.classList[1]);
//     // console.log('----');
//     console.log(ball.target.classList[1]);


//     // if ( ball.target.className.contains('ball js-ball')) {
//     if ( ball.target.classList.contains('js-ball')) {
//     // if ( ball.target.className === 'ball js-ball') {
//         // switch (ball) {
//         //     case balls[0]:
//         //         incrementScore();
//         //         break;
//         //     case balls[1]:
//         //         incrementScore();
//         //         break;
//         //     case balls[2]:
//         //         incrementScore();
//         //         break;
//         //     default:
//         //         console.log('what is going on');
//         //         incrementScore();
//         //         break;
//         // }
//         console.log('what is going on');
//     }
//     if (score >= 100) {
//         // check if it reaches 100 and display the winner element
//         displayWinner();
//         // ball.removeEventListener('click', incrementScore);
//     }
    
// } ));
