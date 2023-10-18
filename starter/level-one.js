// Variables
let score = 0;

let ball = document.querySelector('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');



// Helper/Utility Functions


// Event Handlers


// Event Listeners

ball.addEventListener('click', function() {
    score += 10;
    scoreDisplay.innerText = score;
    if (score >= 100) {
        levelWinner.style.opacity = 1;
    }
  });