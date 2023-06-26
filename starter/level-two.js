/** DOTS: Level Two */

//Variables
let score = 0;
const ball = document.querySelectorAll(".js-ball");
const scoreDisplay = document.querySelector(".js-score");
const levelWinner = document.querySelector(".level-winner");

//Callback Functions
const increaseScoreByTen = () =>{ 
    score = score+10;
    let scoreString = score.toString();
    scoreDisplay.innerText=scoreString.padStart(4, "0");
}

const winLevelTwo = ()=>{
    if (score>=100){
            levelWinner.style.opacity = 1;
    }
}
//Event Listeners
const increaseScoreLevelTwo = ()=>{
    for (i=0; i<ball.length; i++){
        ball[i].addEventListener('click', event=>{
            increaseScoreByTen();
            winLevelTwo();
        })
    }
}
increaseScoreLevelTwo()
