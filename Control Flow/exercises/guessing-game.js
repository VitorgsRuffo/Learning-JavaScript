var secretNumber = 6;

//using a built-in function to convert the string into a number:
var guessString = prompt("Guess the number: ");
var guess = Number(guessString);

if(guess === secretNumber){
    alert("You got it right!");
}else if(guess > secretNumber){
    alert("Too high, guess again.");
}else{
    alert("Too low, guess again.");
}