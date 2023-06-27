score = document.querySelector('.js-score').textContent
ball = document.querySelector('.js-ball')



addScore = () => {
    let score = 0
    score += 10
    console.log(score)
    score.innerText = 'score'
}

ball.addEventListener('click', addScore)