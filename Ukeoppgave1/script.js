function showfactbox() {
    blankAll();
    document.getElementById('fact').innerHTML = /*HTML*/`
    <div class="factbox">Diverse fakta </div>
    <div class="factlist">
    <ul>
    <li>30 år gammel</li>
    <li>Bor i Rælingen</li>
    <li>Ser alt av kampene til LSK og Leeds</li>
    <li>Samler på Vinyl plater</li>
    <li>Har en Husky/Samoyed-mix</li>
    <li>Spiller for øyeblikket Tarkov og Baldurs Gate</li>
    <li>Glad å gå turer i skogen</li>
    <li>Spiller gitar</li>
    <li>Tidligere nyhetsanker hos NRK P3</li>
    <li>Har tidligere bodd i Sydney</li>
    <li>Har en ynge bror og en yngre søster</li>
    </ul>
    </div>`
}

function showdogtax(){
    blankAll();
    document.getElementById('dogtax').innerHTML = /*HTML*/`
    <div class="dogphotos">
                <div class="dogphotos1"><img src="Easy1.jpg" alt="" > </div>
                <div class="dogphotos2"> <img src="Easy2.jpg" alt=""> </div>
                <div class="dogphotos3"><img src="Easy3.jpg" alt=""> </div>
                <div class="dogphotos4"><img src="Easy4.jpg" alt=""></div>
                </div>`

}

function blankAll(){
    document.getElementById('dogtax').innerHTML = "";
    document.getElementById('fact').innerHTML= /*HTML*/`
    <div class="factbox">Trykk for faktaliste! </div>`
    ;

}
function darkmode(){
    blankAll;
    var element = document.getElementById('entirepage')
    element.classList.toggle("darkmode")
}