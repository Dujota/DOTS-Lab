/*
 * DOTS: Level One
 *
 */
//variables
let scoreDisplay = document.querySelector(".js-score");
let ball = document.querySelector(".ball");
let levelWinner = document.querySelector(".level-winner");
let score = 0;

//ball click point adder: each click gets 10 additional points to the score
function changeScore(){
//if statement to check for score of 100, when score of 100 is met display a tag to go on to level 2
score = score + 10;    
if (score < 100){
scoreDisplay.innerText = `00${score}`;
}else{
    scoreDisplay.innerText = `0${score}`; 
    levelWinner.style.opacity = '1';
}
}
//event listener for ball click
ball.addEventListener("click", changeScore);

