let scoreDisplay = document.querySelector('.js-score')
const ball = document.querySelector('.js-ball')
const levelWinner = document.querySelector('.level-winner')


ball.addEventListener('click', function() {
   
   let score = Number(scoreDisplay.innerHTML)+ 10;
    scoreDisplay.innerHTML = score


    if (score >= 100) {
        Winner = document.querySelector('.level-winner')
        Winner.style.opacity = '1';
        scoreDisplay.innerHTML = `100`
    }

});