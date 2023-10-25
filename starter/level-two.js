/*
 * DOTS: Level Two
 *
 */

const ballElements = document.querySelectorAll(".js-ball")
const arena = document.querySelector(".js-arena")

let scoreDisplay = document.querySelector(".js-score")
let levelWinner = document.querySelector(".level-winner")
let score = 0



for (let i = 0; i < ballElements.length; i++) {
    ballElements[i].addEventListener('click', function () {
        score += 10
        scoreDisplay.innerText = score
        if (score >= 100) {
            levelWinner.style.opacity = 1;
            arena.style.display = "none";
        }
    });
};