// Model

const Morse = ['-...', '-.-.', '-..', '.', '..-.', 
'--.', '....', '..', '.---', '-.-', '.-..', '--', 
'-.', '---', '.--.', '--.-', '.-.', '...', '-',
 '..-', '...-', '.--', '-..-', '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'];
 const alphabet = "abcdefghijklmnopqrstuvwxyz æøå";
let translatedtext = "";
UpdateView();


 // View
 function UpdateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <h1>Morsekodeoversetter</h1>
    <div id="output">${translatedtext}</div>
        <input onchange="TranslateThis(this)" id="inputfield" 
        type="text" placeholder="Tekst til oversetting">
    `
 }


 // Controller

 function TranslateThis() {
    let Textfromuser = document.getElementById('inputfield').value;
    let TextinMorse = "";
     
    for (let i=0; i<Textfromuser.length; i++){
        let letter = "";
        letter = Textfromuser[i];
        let Letterindex = alphabet.indexOf(letter.toLowerCase());
        TextinMorse += `${Morse[Letterindex]}`;
    }
    translatedtext = TextinMorse;
    UpdateView();
    
    
 }