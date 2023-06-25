/** DOTS: Level One */

//Variables

let score = 0;
const ball = document.querySelector(".js-ball");
let scoreDisplay = document.querySelector(".js-score");
const levelWinner = document.querySelector(".level-winner");

//Callback Functions
const increaseScoreByTen = () =>{ 
        score = score+10;
        let scoreString = score.toString();
        scoreDisplay.innerText=scoreString.padStart(4, "0");
}
const winLevelOne = ()=>{
        if (score>=100){
                levelWinner.style.opacity = 1;
        }
}
//Event Listeners
ball.addEventListener('click', function(){
        increaseScoreByTen();
        winLevelOne();
});
