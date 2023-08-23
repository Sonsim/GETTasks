//model
let entirekeyboard = document.getElementById('Keyboard')
let input = document.getElementById('output')


Updateview();

//view
function Updateview(){
    entirekeyboard.innerHTML = /*HTML*/ `
    <div class="mainkeyboard">
    <div class="screen" id="output"> </div>
    <div class="buttonline1">
    <button onclick="resetscreen()">Reset</button>
    </div>
    <div class="buttonsline2">
    <button onclick="chooseLetter(this)">Q</button>
    <button onclick="chooseLetter(this)">W</button>
    <button onclick="chooseLetter(this)">E</button>
    <button onclick="chooseLetter(this)">R</button>
    <button onclick="chooseLetter(this)">T</button>
    <button onclick="chooseLetter(this)">Y</button>
    <button onclick="chooseLetter(this)">U</button>
    <button onclick="chooseLetter(this)">I</button>
    <button onclick="chooseLetter(this)">O</button>
    <button onclick="chooseLetter(this)">P</button>
    <button onclick="chooseLetter(this)">Å</button> 
    </div>
    <div class="buttonsline3">
    <button onclick="chooseLetter(this)">A</button>
    <button onclick="chooseLetter(this)">S</button>
    <button onclick="chooseLetter(this)">D</button>
    <button onclick="chooseLetter(this)">F</button>
    <button onclick="chooseLetter(this)">G</button>
    <button onclick="chooseLetter(this)">H</button>
    <button onclick="chooseLetter(this)">J</button>
    <button onclick="chooseLetter(this)">K</button>
    <button onclick="chooseLetter(this)">L</button>
    <button onclick="chooseLetter(this)">Ø</button>
    <button onclick="chooseLetter(this)">Æ</button>
    </div>
    <div class="buttonsline4">
    <button onclick="chooseLetter(this)">Z</button>
    <button onclick="chooseLetter(this)">X</button>
    <button onclick="chooseLetter(this)">C</button>
    <button onclick="chooseLetter(this)">V</button>
    <button onclick="chooseLetter(this)">B</button>
    <button onclick="chooseLetter(this)">N</button>
    <button onclick="chooseLetter(this)">M</button>
    <button onclick="chooseLetter(this)">,</button>
    <button onclick="chooseLetter(this)">.</button>
    <button onclick="chooseLetter(this)">-</button>
    </div>
    <div class="spacebar">
    <button class="spacebar" onclick="chooseLetter(this)"> </button>
    </div>
    </div>`

}

//controller
function chooseLetter(htmlElement) {
    output.innerHTML += htmlElement.innerHTML;

}
function resetscreen() {
    output.innerHTML = /*HTML*/ ``
}