/*
 * DOTS: Level Three
 *
 */
// Set initial score variable to zero:
var level3Score = 0;


// Get the ball element by its ID
var scoreDisplay = document.querySelector(".js-score");
var levelWinner = document.querySelector(".level-winner")
var scoreUpdateString = scoreDisplay.textContent;



const elements = document.querySelectorAll('.js-ball');

console.log(elements.length);
for (let i = 0; i < elements.length; i++) {

    elements[i].addEventListener('click', function() {
        // some logic for updating score and checking for a win here
        // Update score:

        level3Score = level3Score + Number(elements[i].getAttribute('data-increment'));
        scoreUpdateString = level3Score.toString().padStart(4, '0');
        scoreDisplay.textContent = scoreUpdateString;

        // Check if score is at the winner level:

        if (level3Score >= 100) {  // If the score is 100 or more, they won:
            levelWinner.setAttribute("style","opacity:1");

        }
    });
};