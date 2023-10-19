/*
 * DOTS: Level Three
 *
 */

/*
 * Objectives
 * -There are 3 balls of different sizing worth different points
 * -number of points user gets for each ball is saved inside of a data attribute on the ball html elements
 * -access the data attribute of an element from the event object by event targets dataset property
 * -increment points when clicked on a ball until they reach 100
 *
 * Level 3 Requirements
 * -3 ball elements have the class of js-ball
 * -there is js-score and level-winner classes
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
// for (let i = 0; i < ball.length; i++) {
//   ball[i].addEventListener("click", function () {
//     //console.log(ball.dataset.increment);
//     //the value of how many balls each ball is inside the dataset.increment property of each ball
//     //getAttribute() allows us to target HTML element attributes
//     console.log(ball.getAttribute("dataset-increment"));
//   });
// }

ball[0].addEventListener("click", function () {
  console.log(ball[0].dataset.increment);
  score = score + parseInt(ball[0].dataset.increment);
  //console.log(ball[0].getAttribute(parseInt("dataset-increment")));
  scoreDisplay.innerHTML = score;
  console.log(scoreDisplay);
  if (score >= 100) {
    levelWinner.style.opacity = "1";
    console.log(levelWinner.style.opacity);
  }
});

ball[1].addEventListener("click", function () {
  console.log(ball[1].dataset.increment);
  score = score + parseInt(ball[1].dataset.increment);
  //console.log(ball[0].getAttribute(parseInt("dataset-increment")));
  scoreDisplay.innerHTML = score;
  console.log(scoreDisplay);
  if (score >= 100) {
    levelWinner.style.opacity = "1";
    console.log(levelWinner.style.opacity);
  }
});

ball[2].addEventListener("click", function () {
  console.log(ball[2].dataset.increment);
  score = score + parseInt(ball[2].dataset.increment);
  //console.log(ball[0].getAttribute(parseInt("dataset-increment")));
  scoreDisplay.innerHTML = score;
  console.log(scoreDisplay);
  if (score >= 100) {
    levelWinner.style.opacity = "1";
    console.log(levelWinner.style.opacity);
  }
});
