/*
 * DOTS: Level Three
 *
 */

/* *****************  ELEMENT SELECTORS **************** */
const balls = document.querySelectorAll(`.js-ball`)
const scoreDisplay = document.querySelector(`.js-score`)
const levelWinner = document.querySelector(`.level-winner`)

/* ************** END ELEMENT SELECTORS **************** */

let score = 0;

/* ********************* FUNCTIONS ******************** */

const onBallClick = (event) => {
    let incrementForScore = event.target.dataset.increment;
    if(score < 100) {
        score = score + parseInt(incrementForScore);
        scoreDisplay.innerHTML = score;
    } else {
        console.log(levelWinner)
        levelWinner.style.opacity = `1`;
        scoreDisplay.style.opacity = `0`;
    }
}
/* ***************** END FUNCTIONS ******************* */


/* ***************** EVENT LISTENERS ***************** */
balls.forEach(ball =>
    ball.addEventListener(`click`, onBallClick)
  )
/* ************** END EVENT LISTENERS **************** */