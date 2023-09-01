//model

let FirstDropdown = document.getElementById('dropdown1');
let SecondDropdown = document.getElementById('dropdown2');
let LastDropdown = document.getElementById('dropdown3');
let Showpage = document.getElementById('mainpage');
Updateview();

//view

function Updateview() {
  Showpage.innerHTML += /*HTML*/ `
        <h1 class="header">Work in progress!</h1>
        <div class="backbox" id="box">
        <h2 class="header">Alle ferdige oppgaver</h2>
        <div  id="entirepage"  class="AllSubjects">
        <div>
          <div class="dropdown">
            <button class="buttons"  onclick="dropdownmenu1()">Emne 1</button>
            <div id="dropdown1" class="dropdowncontent">
              <a href="Eksempel1/">Eksempel 1</a>
              <a href="Ukeoppgave1/">Ukeoppgave 1</a>
              <a href="Stoppeklokke/">Stoppeklokke</a>
              <a href="Trafikklys/">Trafikklys</a> 
              <a href="Tastatur/">Tastatur</a> 
              <a href="Lyspære/">Lyspære</a> 
              <a href="Krokodillespill/">Krokodillespill</a> 
              <a href="Magic8Ball/">Magic 8 Ball</a> 
              <a href="Soundboard/">Soundboard</a> 
              <a href="https://fshnchpz.github.io/Teamoppgave1/">Teamoppgave 1</a> 
              <a href="Teamoppgave2/">Teamoppgave 2</a> 
              </div>
          </div>
          <div class="dropdown">
          <div id="Subject2"><button class="buttons"  onclick="dropdownmenu2()">Emne 2</button> </div>
            <div id="dropdown2" class="dropdowncontent">
              <a href="">test</a>
              <a href="">test</a>
              <a href="">test</a>
              </div>
          </div>
          <div class="dropdown">
            <div id="Subject2"><button class="buttons"  onclick="dropdownmenu3()">Emne 3</button> </div>
              <div id="dropdown3" class="dropdowncontent">
                <a href="">test</a>
                <a href="">test</a>
                <a href="">test</a>
                <a href="">test</a>
                </div>
          </div>
        </div>
        </div>
        </div> <br><br> <br> 
        <div class="img">
        <img src="Get.png">
        </div>`;

}

//controller

function dropdownmenu1() {
  document.getElementById("dropdown1").classList.toggle("show");
}
function dropdownmenu2() {
  document.getElementById("dropdown2").classList.toggle("show");
}
function dropdownmenu3() {
  document.getElementById("dropdown3").classList.toggle("show");
}
