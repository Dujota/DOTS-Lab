// Variables
let score = 0;

let ball = document.querySelector('.level-arena');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');



// Helper/Utility Functions


// Event Handlers


// Event Listeners

ball.addEventListener('click', function() {
    console.log('test');
    score += 10;
    console.log(score);
    // some logic for updating score and checking for a win here
  });