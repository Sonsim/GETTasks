// Model
let app=document.getElementById('app');
UpdateView(); 
let content=document.getElementById('content');


// View

function UpdateView() {
    app.innerHTML = /*HTML*/ `
    <div class="container">
            <h1 class="Header">Om meg</h1>
            <div>
                <button onclick="ChangeToFacts()" class="buttons">Intro Tekst</button>
                <button onclick="ChangeToImg()" class="buttons">Bilde</button>
                <button onclick="ChangeToHobbies()" class="buttons">Hobbyer</button>
                <button onclick="ChangeToDogs()" class="buttons">Dogtax</button>
                <button onclick="ChangeColors()" class="buttons">Change Colors</button>
            </div> 
           <div id="content" class="content"></div>
           



        </div> `


}

// Controller

function ChangeToImg() {
    content.innerHTML = /*HTML*/ `
    <img class="img" src="profilbilde.jpg" alt="Bilde">`;
}
function ChangeToFacts() {
    content.innerHTML = /*HTML*/ `
    Jeg er en 30 år gammel mann fra Rælingen, rett ved siden av Lillestrøm. Jeg har en bachelorgrad i 
    journalistikk og har blant annet jobbet som journalist i NRK P3Nyheter og som kommunkasjonsrådgiver i REMA 1000. <br><br>
    På fritiden liker jeg å spille, se på fotball, trene eller gå tur i skogen med bikkja. 
    Siden jeg er oppvokst i og rundt Lillestrøm ble LSK favorittlaget og jeg er ofte på Åråsen sammen med lillebroren min. 
    Dette kan også føre til at vi får whiskystemmer dagen etterpå. 

    
    `;
}
function ChangeToHobbies() {
    content.innerHTML = /*HTML*/
     `<ul><li>Løping</li><li>Høre på musikkk</li><li>Gaming</li><li>Se på football</li><li>Turer med bikkja</li></ul>`;
}
function ChangeToDogs() {
    content.innerHTML = /*HTML*/`
    <img class="dogimg" src="Easy1.jpg" onclick="changeimage(this)">`;
    
}

function changeimage(image) {
    image.src="Easy2.jpg";
}

function ChangeColors(){
    let background = document.getElementById('body')
    background.classList.toggle("darkmode");

}