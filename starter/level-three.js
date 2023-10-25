// Variables
let score = 0;

let balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');



// Event Listeners
for (let i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', function() {
        score += parseInt(balls[i].getAttribute('data-increment'));
        scoreDisplay.innerText = score;
        if (score >= 100) {
            levelWinner.style.opacity = 1;
    }
  });
};