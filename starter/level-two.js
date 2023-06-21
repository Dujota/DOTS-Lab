/*
 * DOTS: Level Two
 *
 */
/* *****************  ELEMENT SELECTORS **************** */
const balls = document.querySelectorAll(`.js-ball`)
const scoreDisplay = document.querySelector(`.js-score`)
const levelWinner = document.querySelector(`.level-winner`)

/* ************** END ELEMENT SELECTORS **************** */

let score = 0

/* ********************* FUNCTIONS ******************** */
const onBallClick = () => {
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
balls.forEach(ball => ball.addEventListener(`click`, onBallClick))
/* ************** END EVENT LISTENERS **************** */
