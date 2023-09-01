// Model
let app = document.getElementById('app');
Updateview();


// View
function Updateview() {
    app.innerHTML += /*HTML*/ `
    <div class="backboard">
            <div id="player" class="soundplayer">
                <audio id="audioplayer" class="player" controls>
                    <source src="" type="audio/mpeg">

                </audio>
            </div> 
            <div class="allbuttons">
                <button class="button" onclick="Playsound('Ler.mp3')">Blør og ler</button>
                <button class="button" onclick="Playsound('GammalTante.mp3')">Vi har ei gammal tante</button>
                <button class="button" onclick="Playsound('Fort.mp3')">Fort Åråsen</button>
                <button class="button" onclick="Playsound('11Mann.mp3')">Vi er 11 mann fra flisbyen</button>
                <button class="button" onclick="Playsound('Hjem.mp3')">Våres hjem er Åråsen</button>
                <button class="button" onclick="Playsound('Duermitthjerte.mp3')">Du er mitt hjerte/1-0 scoring mot søpla</button>
            </div>
        </div>
    
    `
}


// Controller

function Playsound(soundfile){
    document.getElementById('audioplayer').setAttribute('src', soundfile);

}
