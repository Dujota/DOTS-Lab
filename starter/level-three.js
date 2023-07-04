let scoreDisplay = 0;
function levelWinner() {
    document.querySelector(".level-winner").style.opacity = 1;
    document.querySelector("#gameBall1").style.opacity = 0;
    document.querySelector("#gameBall2").style.opacity = 0;
    document.querySelector("#gameBall3").style.opacity = 0;
    document.body.addEventListener('click', e => {
        document.querySelector(".level-winner").style.opacity = 0;
        document.querySelector(".game-over").style.opacity = 1;
        }
)};

// Element Selectors
document.querySelector("#gameBall1");
document.querySelector("#gameBall2");
document.querySelector("#gameBall3");

// Event Handlers
function clickedBall1(event) {
    if (scoreDisplay < 90) {
        scoreDisplay += 10;
        document.querySelector(".js-score").innerHTML = scoreDisplay;
    } else if (scoreDisplay === 90) {
        scoreDisplay += 10;
        document.querySelector(".js-score").innerHTML = scoreDisplay;
        levelWinner();
    } 
};

function clickedBall2(event) {
    if (scoreDisplay < 90) {
        scoreDisplay += 10;
        document.querySelector(".js-score").innerHTML = scoreDisplay;
    } else if (scoreDisplay === 90) {
        scoreDisplay += 10;
        document.querySelector(".js-score").innerHTML = scoreDisplay;
        levelWinner();
    } 
};

function clickedBall3(event) {
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
gameBall1.addEventListener('click', e => {
	clickedBall1();
	e.stopPropagation();
});

gameBall2.addEventListener('click', e => {
	clickedBall2();
	e.stopPropagation();
});

gameBall3.addEventListener('click', e => {
	clickedBall3();
	e.stopPropagation();
});