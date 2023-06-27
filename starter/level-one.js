/*
 * DOTS: Level One
 *
 */


// Set initial score variable to zero:
var level1Score = 0;


// Get the ball element by its ID
var ball = document.querySelector(".js-ball");
var scoreDisplay = document.querySelector(".js-score");
var levelWinner = document.querySelector(".level-winner")

var scoreUpdateString = scoreDisplay.textContent;

ball.addEventListener("click", function() {
    // Update score:
    level1Score = level1Score + 10;
    scoreUpdateString = level1Score.toString().padStart(4, '0');
    scoreDisplay.textContent = scoreUpdateString;

    // Check if score is at the winner level:

    if (level1Score >= 100) {  // If the score is 100 or more, they won:
        levelWinner.setAttribute("style","opacity:1");

    }

});
