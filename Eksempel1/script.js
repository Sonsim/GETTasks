function showtools() {
    blankAll();
    document.getElementById('card1').innerHTML = /*HTML*/`
    <div class="Innercard">
    De to viktigste verktøyene vi skal bruke er disse:
    <ul>
        <li>Koderedigeringsprogrammet
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            <br>Vi skal bruke noen extensions:
        </li>
        <ul>
            <li>JavaScript-booster</li>
            <li>es6-string-html</li>
            <li>live-server </li>
            <li>live-share </li>
        </ul>
        <li>Nettleseren
            <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
        </li>
    </ul>
</div>`;
}

function showhtml() {
    blankAll();
    document.getElementById(`cardhtml`).innerHTML = /*HTML*/`
        <div class="Innercard">
                Vi bruker HTML til å definere et dokument.
                <ul>
                    <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                    <li>Tagger for grunnleggende formatering av tekst</li>
                    <li><tt>&lt;div&gt;</tt></li>
                    <li><tt>&lt;input type="text"&gt;</tt></li>
                    <li><tt>&lt;button&gt;</tt></li>
                    <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                    </li>
                    <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
                    </li>
                </ul>
            </div>`;

}

function showcss() {
    blankAll();
    document.getElementById(`cardcss`).innerHTML = /*HTML*/`

        <div class="Innercard">
            Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
            <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
        <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
        </li>
    </ul>
</div>`;
}

function showjavascript() {
    blankAll();
    document.getElementById(`cardjavascript`).innerHTML = /*HTML*/`
    <div class="Innercard">
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
    ved
    å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li>background-color</li>
        <li>color</li>
        <li>padding</li>
        <li>margin</li>
        <li>border</li>
        <li>border-radius</li>
        <li>text-align</li>
        <li>font-size</li>
        <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
            Moodle.</li>
        <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                Reference</a></li>

    </ul>
</div>`;
}

function showhode() {
    blankAll();
    document.getElementById(`cardhode`).innerHTML = /*HTML*/`
    <div class="Innercard knapp" id="head">
    <button onclick="showhead4()">◀</button>
    <img src="head1.png">
    <button onclick="showhead2()">▶</button>
</div>
<div class="Innercard knapp" id="body">
    <button onclick="showbody4()">◀</button>
    <img src="body1.png">
    <button onclick="showbody2()">▶</button>
</div>
<div class="Innercard knapp" id="legs">
    <button onclick="showlegs4()">◀</button>
    <img src="legs1.png">
    <button onclick="showlegs2()">▶</button>
</div>`;
}
function  blankAll() {       
    
        document.getElementById(`card1`).innerHTML = "";
        document.getElementById(`cardhtml`).innerHTML = "";
        document.getElementById(`cardcss`).innerHTML = "";
        document.getElementById('cardhode').innerHTML = "";
        document.getElementById('cardjavascript').innerHTML = "";
}           

function showhead1(){
        document.getElementById('head').innerHTML = /*HTML*/`  
        <button onclick="showhead4()">◀</button>
        <div>
        <img src="head1.png">
        </div>
        <button onclick="showhead2()">▶</button>`;
}
function showhead2(){
         document.getElementById('head').innerHTML = /*HTML*/`  
        <button onclick="showhead1()">◀</button>
        <div>
        <img src="head2.png">
        </div>
        <button onclick="showhead3()">▶</button>`;
}
function showhead3(){
        document.getElementById('head').innerHTML = /*HTML*/`  
        <button onclick="showhead2()">◀</button>
        <div>
        <img src="head3.png">
        </div>
        <button onclick="showhead4()">▶</button>`;
}
function showhead4(){
        document.getElementById('head').innerHTML = /*HTML*/`  
        <button onclick="showhead3()">◀</button>
        <div>
        <img src="head4.png">
        </div>   
        <button onclick="showhead1()">▶</button>`;
}

function showbody1(){
        document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="showbody4()">◀</button>
        <div class=>
        <img src="body1.png">
        </div>
        <button onclick="showbody2()">▶</button>`;
}

function showbody2(){
    document.getElementById('body').innerHTML = /*HTML*/`
    <button onclick="showbody1()">◀</button>
    <div>
    <img src="body2.png">
    </div>
    <button onclick="showbody3()">▶</button>`;
}
function showbody3(){
    document.getElementById('body').innerHTML = /*HTML*/`
    <button onclick="showbody2()">◀</button>
    <div>
    <img src="body3.png">
    </div>
    <button onclick="showbody4()">▶</button>`;
}
function showbody4(){
    document.getElementById('body').innerHTML = /*HTML*/`
    <button onclick="showbody3()">◀</button>
    <div>
    <img src="body4.png">
    </div>
    <button onclick="showbody1()">▶</button>`;
}
function showlegs1(){
    document.getElementById('legs').innerHTML = /*HTML*/`
    <button onclick="showlegs4()">◀</button>
    <div>
    <img src="legs1.png">
    </div>
    <button onclick="showlegs2()">▶</button>`;
}
function showlegs2(){
    document.getElementById('legs').innerHTML = /*HTML*/`
    <button onclick="showlegs1()">◀</button>
    <div>
    <img src="legs2.png">
    </div>
    <button onclick="showlegs3()">▶</button>`;
}
function showlegs3(){
    document.getElementById('legs').innerHTML = /*HTML*/`
    <button onclick="showlegs2()">◀</button>
    <div>
    <img src="legs3.png">
    </div>
    <button onclick="showlegs4()">▶</button>`;
}
function showlegs4(){
    document.getElementById('legs').innerHTML = /*HTML*/`
    <button onclick="showlegs3()">◀</button>
    <div>
    <img src="legs4.png">
    </div>
    <button onclick="showlegs1()">▶</button>`;
}

function horizontal(){
    document.getElementById('allcards').classList =[];
    document.getElementById('allcards').classList.add('horizontallayout')
}
function vertical(){
    document.getElementById('allcards').classList =[];
    document.getElementById('allcards').classList.add('vertikallayout')
}
function grid(){
    document.getElementById('allcards').classList =[];
    document.getElementById('allcards').classList.add('grid')

}
function none(){
    document.getElementById('allcards').classList =[];
}