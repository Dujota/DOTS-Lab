let scoreDisplay = document.querySelector('.js-score')
const ball = document.querySelectorAll('.js-ball')
const levelWinner = document.querySelector('.level-winner')


for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', function() {

        let increment = parseInt(this.dataset.increment);

        let score = Number(scoreDisplay.innerHTML)+ increment;
            scoreDisplay.innerHTML = score
        
      

        if (score >= 100) {
            Winner = document.querySelector('.level-winner')
            Winner.style.opacity = '1';
            scoreDisplay.innerHTML = `100`
        }
  });
};
   