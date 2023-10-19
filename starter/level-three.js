/*
 * DOTS: Level Three
 *
 */
//variables
let scoreDisplay = document.querySelector(".js-score");
let ball = document.querySelectorAll(".ball");
let levelWinner = document.querySelector(".level-winner");
let score = 0;
let scoreAdd = 10;


//event listener for ball click
const elements = document.querySelectorAll('.js-ball');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
    //figure out point value based on data-increment
    let dataAtt = this.getAttribute('data-increment');
    console.log(dataAtt);
    scoreAdd = parseInt(dataAtt);
     //if statement to check for score of 100, when score of 100 is met display a tag to go on to level 2
     score = score + scoreAdd;
     if (score >= 100){
            scoreDisplay.innerText = `0${score}`; 
            levelWinner.style.opacity = '1';
        
        }else{
        scoreDisplay.innerText = `00${score}`;
        }
  });
};