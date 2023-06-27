/*
 * DOTS: Level One
 *
 */
var score = 0;
const ball = document.querySelector(".js-ball");
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

const ballClicked = (Event) => {
    // some logic for updating score and checking for a win here
    // update score by 10
    console.log("ball clicked");
    score += 10;

    scoreDisplay.innerText = score;

    if (score >= 100){
        levelWinner.style.opacity = 1;
    };


  };

ball.addEventListener('click', ballClicked);


