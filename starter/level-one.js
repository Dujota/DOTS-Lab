/*
 * DOTS: Level One
 *
 */

/* *****************  ELEMENT SELECTORS **************** */

const ball = document.querySelector(`.js-ball`)
const scoreDisplay = document.querySelector(`.js-score`)
const levelWinner = document.querySelector(`.level-winner`)
let score = 0
/* ************** END ELEMENT SELECTORS **************** */

/* ********************* FUNCTIONS ******************** */

const onBallClick = event => {
  if (score < 100) {
    score = score + 10
    scoreDisplay.innerHTML = score
  } else {
    console.log(levelWinner)
    levelWinner.style.opacity = `1`
    scoreDisplay.style.opacity = `0`
  }
}
/* ***************** END FUNCTIONS ******************* */

/* ***************** EVENT LISTENERS ***************** */
ball.addEventListener(`click`, onBallClick)
/* ************** END EVENT LISTENERS **************** */
