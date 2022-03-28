const operations       = document.querySelector(".op");
const numbers          = document.querySelector(".num");
const screen           = document.getElementById("output");
const reset            = document.getElementById("ac");
const equal            = document.getElementById("eq");

let number1, number2;

equal.onclick = Compute(prev, next);
reset.onclick = function(){ screen.innerHTML = '' ; };

function Compute(num1, num2){
    screen.innerHTML = num1 + num2;
}