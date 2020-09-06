var body = document.querySelector("body");
var button = document.querySelector("button");

button.addEventListener("click", toggleBackgroundColor);

function toggleBackgroundColor(){
    body.classList.toggle("purple");
}