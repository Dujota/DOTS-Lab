/*
 * DOTS: Level Three
 *
 */

//Variables
const ball = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')
let score  = 0
let ballvalue = 0
let intballvalue = 0

// Logic
/* This loop increases the score by the ball's value each time a ball is clicked.  Once the score reaches 100, then the word winner is displayed by setting 
the opacity of the winner variable to one so it becomes visible.
*/


for (let i = 0;i < ball.length; i++) {
    ball[i].addEventListener('click', function() {
        ballvalue = parseInt(ball[i].getAttribute("data-increment"))
        console.log("Ball Value = ", ballvalue)
        score = score + ballvalue
        scoreDisplay.textContent = score
        console.log("Score = ", score)
        //console.log("scoreDisplay =", scoreDisplay.textContent)
   
        if (score >= 100) {
           levelWinner.style.opacity = 1;
        console.log("score 100 or greater and opacity =", levelWinner.style.opacity)
        } 
    });
  
    }
