/*
 * DOTS: Level Two
 *
 */

//variables
let scoreDisplay = document.querySelector(".js-score");
let ball = document.querySelectorAll(".ball");
let levelWinner = document.querySelector(".level-winner");
let score = 0;

//event listener for ball click
const elements = document.querySelectorAll('.js-ball');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
     //if statement to check for score of 100, when score of 100 is met display a tag to go on to level 2
     score = score + 10;
     if (score < 100){
        scoreDisplay.innerText = `00${score}`;
        }else{
            scoreDisplay.innerText = `0${score}`; 
            levelWinner.style.opacity = '1';
        }
  });
};