// Model

let app = document.getElementById('app');
let Randomnumber = Math.floor(Math.random() * 50) +1;
let UserAnswer = "";

// View
UpdateView();
function UpdateView() {
    app.innerHTML = /*HTML*/ `<h1>Gjett et tall mellom 0 og 50!</h1>
    <div id="Feedbackfield"></div>
    <input id="userinput" class="Guesshere" type="number">
    <button class="button" onclick="CheckAnswer(this)">Svar</button>
    <button class="button" onclick="Restart()">Reset</button>
    <div hidden> ${Randomnumber} </div>
    `
}

// Controller

function CheckAnswer() {
    let UserAnswer = document.getElementById('userinput').value;
    if (UserAnswer > Randomnumber) {
        document.getElementById('Feedbackfield').innerHTML = /*HTML*/ `<img src="down.png">`;  
    } 
    if (UserAnswer < Randomnumber) {
        document.getElementById('Feedbackfield').innerHTML = /*HTML*/ `<img src="top-up.png">`;
    }
    if (UserAnswer == Randomnumber) {
        document.getElementById('Feedbackfield').innerHTML = /*HTML*/ `<img src="congratulation.png">`;
    }
}
function Restart () {
    location.reload();
}