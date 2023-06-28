/*
 * DOTS: Level Three
 *
 */
let score=0;
let ball1=document.querySelector(".js-ball1");
let ball2=document.querySelector(".js-ball2");
let ball3=document.querySelector(".js-ball3");
let scoreDisplay=document.querySelector(".js-score");
let levelWinner=document.querySelector(".level-winner");



ball1.onclick=function(){
    score+=20;
    document.querySelector(".js-score").innerHTML = score;
    if (score>="100") {
        levelWinner.style.opacity ="1";
    }}


ball2.onclick=function(){
    score+=5;
    document.querySelector(".js-score").innerHTML = score;
    if (score>="100") {
        levelWinner.style.opacity ="1";
    }}


ball3.onclick=function(){
    score+=10;
    document.querySelector(".js-score").innerHTML = score;
    if (score>="100") {
        levelWinner.style.opacity ="1";
    }}