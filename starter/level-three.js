//Variables
let score = 0;
const ball = document.querySelectorAll(".js-ball");
const scoreDisplay = document.querySelector(".js-score");
const levelWinner = document.querySelector(".level-winner");

const levelThreeWinner = () =>{
    if(score>=100){
    levelWinner.style.opacity=1;
}
}


ball[0].addEventListener('click', event=>{
    const scoreValue = Number(ball[0].dataset.increment);
    score = score +scoreValue;
    const scoreString = score.toString();
    scoreDisplay.innerText = scoreString.padStart(4, "0");
    levelThreeWinner()
})


ball[1].addEventListener('click', event=>{
    const scoreValue = Number(ball[1].dataset.increment);
    score = score +scoreValue;
    const scoreString = score.toString();
    scoreDisplay.innerText = scoreString.padStart(4, "0");
    levelThreeWinner()
})


ball[2].addEventListener('click', event=>{
    const scoreValue = Number(ball[2].dataset.increment);
    score = score +scoreValue;
    const scoreString = score.toString();
    scoreDisplay.innerText = scoreString.padStart(4, "0");
    levelThreeWinner()
})



