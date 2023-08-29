// model
let main = document.getElementById('app');
let firstinput = "__";
let secondinput = "__";
let thirdinput = "__";
let lastinput = "__";
Updateview();

// view

function Updateview() {
        main.innerHTML = /*HTML*/ `
        <div class="story"> 
            <div>I'm waiting in my &nbsp;</div>  
            <div id="input1">${firstinput}</div> 
             <div> &nbsp;cell when the bell &nbsp;</div>
            <div id="input2">${secondinput}</div> 
            <div> &nbsp; to chime. Reflecting on my &nbsp;</div>
            <div id="input3">${thirdinput} </div>
            <div>&nbsp; life and it doesn't have much time</div>
            <div> 'Cause at &nbsp; </div>
            <div id="input4">${lastinput}</div>
            <div>, they take me to the Gallows Pole </div>  
        </div>
        <div class="buttons"id="wordbuttons">
            <button onclick="changefirstword(this)">cold</button>
            <button onclick="changefirstword(this)">warm</button><br>
            <button onclick="changesecondword(this)">begins</button>
            <button onclick="changesecondword(this)">cease</button><br>
            <button onclick="changethirdword(this)">past</button>
            <button onclick="changethirdword(this)">former</button><br>
            <button onclick="changelasttword(this)">5 o'clock</button>
            <button onclick="changelasttword(this)">midday</button>
        </div>`


}

// controller

function changefirstword(htmlElement) {
        document.getElementById('input1').innerHTML = htmlElement.innerHTML;
}

function changesecondword(htmlElement) {
        document.getElementById('input2').innerHTML = htmlElement.innerHTML;
}

function changethirdword(htmlElement) {
        document.getElementById('input3').innerHTML = htmlElement.innerHTML;
}

function changelasttword(htmlElement) {
        document.getElementById('input4').innerHTML = htmlElement.innerHTML;
}