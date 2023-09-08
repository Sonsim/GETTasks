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
    <button class="buttons" onclick="resetscreen()">Reset</button>
    </div>
    <div class="buttonsline2">
    <button class="buttons" onclick="chooseLetter(this)">Q</button>
    <button class="buttons" onclick="chooseLetter(this)">W</button>
    <button class="buttons" onclick="chooseLetter(this)">E</button>
    <button class="buttons" onclick="chooseLetter(this)">R</button>
    <button class="buttons" onclick="chooseLetter(this)">T</button>
    <button class="buttons" onclick="chooseLetter(this)">Y</button>
    <button class="buttons" onclick="chooseLetter(this)">U</button>
    <button class="buttons" onclick="chooseLetter(this)">I</button>
    <button class="buttons" onclick="chooseLetter(this)">O</button>
    <button class="buttons" onclick="chooseLetter(this)">P</button>
    <button class="buttons" onclick="chooseLetter(this)">Å</button> 
    </div>
    <div class="buttonsline3">
    <button class="buttons" onclick="chooseLetter(this)">A</button>
    <button class="buttons" onclick="chooseLetter(this)">S</button>
    <button class="buttons" onclick="chooseLetter(this)">D</button>
    <button class="buttons" onclick="chooseLetter(this)">F</button>
    <button class="buttons" onclick="chooseLetter(this)">G</button>
    <button class="buttons" onclick="chooseLetter(this)">H</button>
    <button class="buttons" onclick="chooseLetter(this)">J</button>
    <button class="buttons" onclick="chooseLetter(this)">K</button>
    <button class="buttons" onclick="chooseLetter(this)">L</button>
    <button class="buttons" onclick="chooseLetter(this)">Ø</button>
    <button class="buttons" onclick="chooseLetter(this)">Æ</button>
    </div>
    <div class="buttonsline4">
    <button class="buttons" onclick="chooseLetter(this)">Z</button>
    <button class="buttons" onclick="chooseLetter(this)">X</button>
    <button class="buttons" onclick="chooseLetter(this)">C</button>
    <button class="buttons" onclick="chooseLetter(this)">V</button>
    <button class="buttons" onclick="chooseLetter(this)">B</button>
    <button class="buttons" onclick="chooseLetter(this)">N</button>
    <button class="buttons" onclick="chooseLetter(this)">M</button>
    <button class="buttons" onclick="chooseLetter(this)">,</button>
    <button class="buttons" onclick="chooseLetter(this)">.</button>
    <button class="buttons" onclick="chooseLetter(this)">-</button>
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