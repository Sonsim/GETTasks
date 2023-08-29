// Model
const FinalAnswers = ["Ja", "Nei", "Kanskje", "Muligens", "Åpenbart", "Vet ikke", "Åpenbart ikke", "Helt klart",];
let app = document.getElementById('app');
let GlobalAnswer = "";



// View
function UpdateView() {
    app.innerHTML = /*HTML*/ `
    <div class="backboard">
        <div class="balloutside">
            <div class="ballinnside"> <br> <br> <br> <br>
            <div class="Answer" id="Answers">${GlobalAnswer}</div>
            </div>
            </div>
        </div> 
        <div class="Inputfield"> Hva lurer du på? 
        <input id="InputfromUser" type="text" onchange="AnswerToUser()"> 
        </div>`
}

// Controller

function AnswerToUser() {
    let RandomAnswer = FinalAnswers[Math.floor(Math.random() * FinalAnswers.length)];
    GlobalAnswer = RandomAnswer;
    UpdateView();
 // Legg til While Loop så man ikke kan få samme svar 2 ganger   
      
}