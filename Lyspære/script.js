// Model
let mainpage = document.getElementById('page');
let Bulb = document.getElementById('Light');
let TextField = document.getElementById('Text');
let Bulbstatus = true; 


// Controller

function OnOffButton() {
    Bulbstatus = !Bulbstatus;
    TurnLightOnOff();
    changetext();
}

function TurnLightOnOff () {
    
    if (Bulbstatus == false) {
        Bulb.classList.toggle("LightOn");
        Bulb.classList.remove("LightOff")
    }
    if (Bulbstatus == true){
        Bulb.classList.toggle("LightOff");
        Bulb.classList.remove("LightOn");
    }
}

function changetext () {
    if (Bulbstatus == false){
        TextField.innerHTML = /*HTML*/ `Lyspæren er på`;
    }
    if (Bulbstatus == true) {
        TextField.innerHTML = /*HTML*/ `Lyspæren er av`;
    }
}