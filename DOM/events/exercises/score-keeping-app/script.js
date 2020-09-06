var player1Button = document.querySelector("#p1");
var player2Button = document.querySelector("#p2");

var player1Score = 0;
var player2Score = 0;

var displayP1Score = document.querySelector("#displayP1Score");
var displayP2Score = document.querySelector("#displayP2Score");

var gameover = false;
var winningScore = 5;

var resetButton = document.querySelector("#reset");

var winningScoreInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

player1Button.addEventListener("click", function(){
    if(!gameover){
        player1Score++;
        if(player1Score === winningScore){
            displayP1Score.classList.add("winner");
            gameover = true;
        }
        displayP1Score.textContent = player1Score;
    }
});

player2Button.addEventListener("click", function(){
    if(!gameover){
        player2Score++;
        if(player2Score === winningScore){
            displayP2Score.classList.add("winner");
            gameover = true;
        }
        displayP2Score.textContent = player2Score;
    }
});

function resetGame(){
    player1Score = 0;
    player2Score = 0;
    displayP1Score = 0;
    displayP2Score = 0;
    displayP1Score.classList.remove("winner");
    displayP2Score.classList.remove("winner");
    gameover = false;
}

resetButton.addEventListener("click", function(){
    resetGame();
});

winningScoreInput.addEventListener("change", function(){
    //to get the value of the input we can use the property "value" (it returns a string!).
    winningScoreDisplay.textContent = winningScoreInput.value;
    winningScore = Number(this.value); //Number function converts a string into a number (if possible).
    resetGame();
    //Notice that in this context 'this' === winningScoreInput (inside an addEventListener method this refers to the object that called it)
});