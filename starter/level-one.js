// import stuff

const ball = document.querySelector('.js-ball');
const counterEl = document.querySelector('.js-score');
const winnerEl = document.querySelector('.level-winner');

// create an object to store score

var score = 0;

// create a listener to increase the score when the ball is clicked

ball.addEventListener('click', function () {
    if (score < 100) {
        score = score + 10;
        counterEl.innerText = score.toString();
        if (score >= 100){
            counterEl.innerText = 100
            winnerEl.style.setProperty('opacity', 100);
        }
}})
