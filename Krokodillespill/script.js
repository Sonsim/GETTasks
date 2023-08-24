// model - variabler
let outputdiv = document.getElementById('pointsdiv');
let randomnumber1 = document.getElementById('randomnr1');
let randomnumber2 = document.getElementById('randomnr2');
let points = 0;
let number1 = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;


// view - HTML/CSSS
function WhenLoad() {
    outputdiv.innerHTML = points;
    randomnumber1.innerHTML = number1; 
    randomnumber2.innerHTML = number2;
}
// controller - Funksjoner som endrer noe

function checkanswer() {
    let Userinput = document.getElementById('inputfield').value;
    document.getElementById('inputfield').value ="";

    if (number1 > number2) {
        if (Userinput == ">") {
            points++;
        }
        else {
            points--;
        }
    }
    else if (number1 == number2) {
        if (Userinput == "=") {
            points++;
        }
        else {
            points--;
        }
    }
    else if (number1 < number2) {
        if (Userinput == "<") {
            points++;
        }
        else {
            points--;
        }
    }
    number1 = Math.floor(Math.random() * 10) + 1;
    number2 = Math.floor(Math.random() * 10) + 1;
    WhenLoad();
}