/** DOTS: Level One */

//Variables

let score = 0;
const ball = document.querySelector(".js-ball");
const scoreDisplay = document.querySelector(".js-score");
const levelWinner = document.querySelector(".level-winner");

//Callback Functions

/** LEVEL 1 - 
 *  when a player interacts with Level 1, their `score` display should update as they click the `ball` and they should have a win message appear when their `score` reaches `100`
         * 1- we should increment the `score` by `10` when the ball is clicked
                * if ball is clicked, then store/take the value of the content and add 10 to it, keep doing that through a loop - everytime it is cliked
         * 2- make sure that a player sees that their score has gone up
                 * store the value of the score and use innerText or innerHTML to add the score to HTML - Set the `innerText` property of `scoreDisplay` equal to `score` to accomplish this 
         * 3- Write a conditional statement that checks if the player's `score` is `greater than or equal to 100` - winning score
             * If their `score` is at or above `100` we'll need to reflect that by showing the player that they've beaten the level
             * To show that the player has won, we'll need to target `opacity` within the `style` property of `levelWinner` and set its value to `1`
     */

const increaseScoreByTen = () =>{
        
}
//Event Listeners
ball.addEventListener('click', function(){

});