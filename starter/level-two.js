const ball = document.querySelectorAll('.js-ball');
const counterEl = document.querySelector('.js-score');
const winnerEl = document.querySelector('.level-winner');

var score = 0;

ball.forEach(el => el.addEventListener('click', function () {
    if (score < 100) {
        score = score + 10;
        counterEl.innerText = score.toString();
        if (score >= 100){
            counterEl.innerText = 100
            winnerEl.style.setProperty('opacity', 100);
        }
}}))

