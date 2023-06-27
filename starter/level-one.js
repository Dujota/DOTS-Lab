/*
 * DOTS: Level One
 *
 */
var score = 0;
const ball = document.querySelector(".js-ball");
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');


  ball.addEventListener('click', function() {
    // some logic for updating score and checking for a win here
    console.log("ball clicked");

    score += 10;

    scoreDisplay.innerText = score;

    if (score >= 100){
        levelWinner.style.opacity = 1;
    };

  });

