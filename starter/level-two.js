/*
 * DOTS: Level Two
 *
 */
//Variables
const elements = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')
let score  = 0

// Logic
/* This loop increases the score by 10 each time a ball is clicked.  Once the score reaches 100, then the word winner is displayed by setting 
the opacity of the winner variable to one so it becomes visible.
*/



for (let i = 0;i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        score = score += 10
        scoreDisplay.textContent = score
        console.log("Score = ", score)
        console.log("scoreDisplay =", scoreDisplay.textContent)
        console.log("Elements = ", elements)
   
    //change to 100
        if (score >= 100) {
           levelWinner.style.opacity = 1;
        console.log("score 300 or greater and opacity =", levelWinner.style.opacity)
        } 
    });
  
    }
