let score = document.querySelector('.js-score').textContent
const ball = document.querySelector('.js-ball')




addScore = () => {
    score += 10
    console.log(score)
}

ball.addEventListener('click', addScore)