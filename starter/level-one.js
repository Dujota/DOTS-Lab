let scoreDisplay = 0;

function levelWinner() {
    document.querySelector(".level-winner").style.opacity = 1;
    document.body.addEventListener('click', e => {
        window.location.href = "/level-two.html"; 
    }
)};

// Element Selectors
const gameBall = document.querySelector(".js-ball");

// Event Handlers
function clickedBall(event) {
    if (scoreDisplay < 90) {
        scoreDisplay += 10;
        document.querySelector(".js-score").innerHTML = scoreDisplay;
    } else if (scoreDisplay === 90) {
        scoreDisplay += 10;
        document.querySelector(".js-score").innerHTML = scoreDisplay;
        levelWinner();
    } 
};

// Event Listeners
gameBall.addEventListener('click', e => {
	clickedBall();
	e.stopPropagation();
});
