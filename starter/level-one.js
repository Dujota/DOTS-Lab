/*
 * DOTS: Level One
 *
 */

// Element Selectors
/**
 * select an element by id - getElementById / querySelector
 * select an element by class - querySelector
 * select an element by tag name - querySelector
 * select multiple elements by class or tag  - querySelectorAll
 */

 const ball = document.querySelector(`.js-ball`)
 const scoreDisplay = document.querySelector(`.js-score`)
 const levelWinner = document.querySelector(`.level-winner`)
 let score = 0;


 // Higer Order Functions

 const onBallClick = (event) => {
    if(score < 100) {
        score = score+10
        scoreDisplay.innerHTML = score;
    } else {
        console.log(levelWinner)
        levelWinner.style.opacity = `1`;
        scoreDisplay.style.opacity = `0`;
    }
}

 // Event Listeners
ball.addEventListener(`click`,onBallClick)
