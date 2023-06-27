/*
 * DOTS: Level Two
 *
 */

let score=0;
let ball=document.querySelector(".js-ball");
let scoreDisplay=document.querySelector(".js-score");
let levelWinner=document.querySelector(".level-winner")

const elements = document.querySelectorAll('.js-ball');
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        score+=10;
        document.querySelector(".js-score").innerHTML = score;
    if (score>="100") {
        levelWinner.style.opacity ="1";
    }
    });
  };
