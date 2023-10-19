/*
 * DOTS: Level Two
 *
 */

/* Objectives
 * -There are 3 moving balls to increment scores when clicked
 * -Implement a single click handle to listen when a user click on a ball until they reach 100
 *
 * Level 2 Requirements
 * -There are 3 elements of js-ball
 * -Set all 3 elements to one variable
 * -We have js-score and level-winner
 * -We need variables for each of these elements and one for score
 * -querySelectorAll() outputs an array of elements with the same class
 * -set a variable equal to this array
 */

//create a score variable
let score = 0;
//create variables with querySelectorAll() for 3 ball elements
const ball = document.querySelectorAll(".js-ball");
console.log(ball);
const scoreDisplay = document.querySelector(".js-score");
console.log(scoreDisplay);
const levelWinner = document.querySelector(".level-winner");
console.log(levelWinner);

//functionality
//add a click event listener to each ball element within an array
//use a for loop

for (let i = 0; i < ball.length; i++) {
  ball[i].addEventListener("click", function () {
    // some logic for updating score and checking for a win here
    //increment score by 10 when clicked
    score = score + 10;
    console.log(score);
    //player can see their score has gone up
    scoreDisplay.innerHTML = score;
    console.log(scoreDisplay);
    //if score is greater or equal to 100, show winner text by changing opacity to 1
    if (score >= 10) {
      levelWinner.style.opacity = "1";
      console.log(levelWinner.style.opacity);
    }
  });
}
