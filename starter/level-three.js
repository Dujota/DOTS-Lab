/*
 * DOTS: Level Three
 *
 */


let ballElements = document.querySelectorAll(".js-ball")
let scoreDisplay = document.querySelector(".js-score")
let arena = document.querySelector(".js-arena")


let levelWinner = document.querySelector(".level-winner")
let score = 0


for (i = 0; i < ballElements.length; i++) {
    ballElements[i].addEventListener("click", function (event) {
        const increment = parseInt(event.target.dataset.increment)
        if (increment === 20) {
            score += 20
            scoreDisplay.innerText = score
        } else if (increment === 10) {
            score += 10
            scoreDisplay.innerText = score
        } else if (increment === 5) {
            score += 5
            scoreDisplay.innerText = score
        }

        if (score >= 100) {
            levelWinner.style.opacity = 1;
            arena.style.display = "none";

        }
    })
}










