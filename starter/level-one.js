// level-one.js

// Create necessary variables
let score = 0;
const ball = document.querySelector('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

// Add event listener to ball element
ball.addEventListener('click', function() {
  // Increment the score by 10
  score += 10;

  // Update the score display
  scoreDisplay.innerText = score;

  // Check if the player's score reaches 100
  if (score >= 100) {
    // Show the win message by setting opacity to 1
    levelWinner.style.opacity = '1';
  }

  // Console log for testing purposes
  console.log('Score:', score);
});
