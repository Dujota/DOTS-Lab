let scoreDisplay = document.querySelector('.js-score')
const ball = document.querySelector('.js-ball')
const levelWinner = document.querySelector('.level-winner')




ball.addEventListener('click', function() {
    let score = scoreDisplay.innerHTML
    if (score < 100){
        score += 10
        console.log(score)
        scoreDisplay.innerHTML = score
    } else {
        let Winner = document.querySelector('.level-winner')
        Winner.style.opacity = '1';
        scoreDisplay.innerHTML = `100`
    }
});