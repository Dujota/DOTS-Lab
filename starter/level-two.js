/*
 * DOTS: Level Two
 *
 */
const elements = document.querySelectorAll('.js-ball')
//const scoreDisplay = document.querySelector('.score')
const scoreDisplay = document.querySelector('.js-score')
//If starting Level 2, then the score should be equal to 100 which is the Level 1 threshold
let score  = 0


for (let i = 0;i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        score = score += 10
        scoreDisplay.innertext = score
        console.log("Score = ", score)
        console.log("scoreDisplay =", scoreDisplay.innertext)
        console.log("Elements = ", elements)
   
    //change to 100
        if (score >= 30) {
           // levelWinner.style.opacity = 1;
            console.log("score 300 or greater and opacity =", levelWinner.style.opacity)
        } 
    });
  
    }
