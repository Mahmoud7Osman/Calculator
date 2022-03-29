const operations       = document.querySelectorAll(".op");
const numbers          = document.querySelectorAll(".num");
const prev             = document.getElementById("prev");
const curr             = document.getElementById("curr");
const rst              = document.getElementById("acl");
const equal            = document.getElementById("eq");

let cop;

for (let ops in operations){
    operations[ops].onclick = () => {
        cop = operations[ops].textContent;
        prev.innerHTML = curr.innerHTML + " " + operations[ops].textContent;
        curr.innerHTML = '';
    }
}

for (let nums in numbers){
    numbers[nums].onclick = () => {
        curr.innerHTML += numbers[nums].textContent;
    };
}
equal.onclick = () => {
    Compute(prev.textContent, curr.textContent);
}
rst.onclick = () =>{
    curr.innerHTML = '';
    prev.innerHTML = '';
};

function Compute(num1, num2){
    if (curr.innerHTML == "" || prev.innerHTML == "") return;
    curr.innerHTML = '';
    prev.innerHTML = '';

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (cop) {
        case "+":
            curr.innerHTML = num1 + num2;
            break;
        case "-":
            curr.innerHTML = num1 - num2;
            break;
        case "x":
            curr.innerHTML = num1 * num2;
            break;
        case "/":
            curr.innerHTML = num1 / num2;
            break;
        default:
            break;
    }
}