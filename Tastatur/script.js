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
    <button>Reset</button>
    </div>
    <div class="buttonsline2">
    <button>Q</button>
    <button>W</button>
    <button>E</button>
    <button>R</button>
    <button>T</button>
    <button>Y</button>
    <button>U</button>
    <button>I</button>
    <button>O</button>
    <button>P</button>
    <button>Å</button> 
    </div>
    <div class="buttonsline3">
    <button>A</button>
    <button>S</button>
    <button>D</button>
    <button>F</button>
    <button>G</button>
    <button>H</button>
    <button>J</button>
    <button>K</button>
    <button>L</button>
    <button>Ø</button>
    <button>Æ</button>
    </div>
    <div class="buttonsline4">
    <button>Z</button>
    <button>X</button>
    <button>C</button>
    <button>V</button>
    <button>B</button>
    <button>N</button>
    <button>M</button>
    <button>,</button>
    <button>.</button>
    <button>-</button>
    </div>
    <div class="spacebar">
    <button>SPACE</button>
    </div>
    </div>`

}

//controller
function chooseLetter() {
    output.innerHTML += /*HTML*/ `
        
    `

}