/*
 * DOTS: Level One
 *
 */

/*
 * Objectives
 * -User has to click a moving ball until a certain score to level up
 * -Use DOM manupulation, event listeners, and conditional game logic
 * -Track player scores
 * -Display winning messages after level completion
 *
 * Level 1 Requirements
 * add a single listener to .js-ball element, when a user clicks the ball add 10+ on their score
 * when user reaches 100 points, they can level up
 *
 * ball js ball
 * score js-score
 *
 */

//create a score variable
let score = 0;
//create variables to allow access to HTML elements and control their behavior
const ball = document.querySelector(".js-ball");
console.log(ball);
const scoreDisplay = document.querySelector(".js-score");
console.log(scoreDisplay);
const levelWinner = document.querySelector(".level-winner");
console.log(levelWinner);

//functionality
//add an event listener to the ball variable
ball.addEventListener("click", function () {
  //needs an anonymous callback function to perform the logic of the game when the ball is clicked
  //some logic for updating score and checking for a win here
  //increment score by 10 when clicked
  score = score + 10;
  console.log(score);
  //player sees that their score has gone up
  //set innerText property to scoreDisplay euqal to score
  scoreDisplay.innerHTML = score;
  console.log(scoreDisplay);
  //if score is greater than or equal to 100, the player has bean the game
  //to show player won the game, target opacity within style property of levelWinner and set it to 1 to show win message
  if (score >= 10) {
    levelWinner.style.opacity = "1";
    console.log(levelWinner);
    console.log(levelWinner.style.opacity);
  }
});
