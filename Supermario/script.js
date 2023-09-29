// Model
let app = document.getElementById('app');

let chosenChar = 'mario'
let bowserMax = 300;
let playerMax = 200;

let bowserHealth = 300;
let marioHealth = 200;
let peachHealth = 100;
let yoshiHealth = 80;
let luigiHealth = 140
let playerHealth = 200;

let playerattack = 10;
let bowserAttack = 15;
let toadHealing = 20;


// View
updateView();
updateBowserHealth();

function updateView()  {
    app.innerHTML = /*HTML*/ `
    
        <div id="background">
             <div id="activePlayer">
             
                <div>                   
                    <img id="sopp" src="img/heal.png" onclick="healPlayer()">
                    <img id="sopp" src="img/red.png" onclick="attackBowser(); bossAttack()">
                    <img id="sopp" src="img/blue.png" onclick="blueShell()">
                </div>
                    <div class="playerHealth" id="playerHealth">${playerHealth}/${playerMax}</div>
                    <img id="selectedChar" src="img/${chosenChar}.png">
                    
                </div>
                    <div id="bowser">
                        <div class="bowserHealth"  id="bowserHealth">${bowserHealth}/${bowserMax}</div>
                        <img src="img/bowser.png">
                </div>
            
                
        </div>
        
        <h1>Choose your fighter!</h1>
        <div id="characterSelect">
            
            <img src="img/luigi.png" onclick="selectCharacter('luigi')">
            <img src="img/peach.png" onclick="selectCharacter('peach')">
            <img src="img/yoshi.png" onclick="selectCharacter('yoshi')">
            <img src="img/Mario.png" onclick="selectCharacter('mario')">
        </div>
    `
}

// Controller

function selectCharacter(chosen) {

    if(chosen == 'mario')   {
            playerHealth = marioHealth;
            playerMax = 200;
            bowserHealth = 300;
            chosenChar = chosen;
            updateView();
            return;
        }
    else if (chosen == 'luigi'){
            playerHealth = luigiHealth;
            playerMax = 140;
            bowserHealth = 300;
            chosenChar = chosen;
            playerattack= 10;
            updateView();
            return;
    }
    else if (chosen == 'peach'){
            playerHealth = peachHealth;
            playerMax = 100;
            bowserHealth = 300;
            chosenChar = chosen;
            playerattack = 10;
            updateView();
            return;
    }
    else if (chosen == 'yoshi') {
            playerHealth = yoshiHealth;
            playerMax = 80;
            bowserHealth = 300;
            chosenChar = chosen;
            playerattack = 10;
            updateView();
            return;
    }

}

function attackBowser(){
    bowserHealth = bowserHealth - playerattack;
    if (bowserHealth < 0 ) {
        alert('You win!');
        restart();
    }
    updateView();
}
function bossAttack() {
    playerHealth = playerHealth - bowserAttack;
    if (playerHealth < 0) {
        alert('You Lose!')
        restart();
    }
    updateView();
}
function healPlayer() {
    playerHealth = playerHealth + toadHealing;
    updateView();
}
function blueShell() {
    bowserHealth = bowserHealth - 301;
    
    if (bowserHealth < 0 ) {
        alert('You win!');
        restart();
    }
    updateView();
}

function restart() {
    location.reload();
}

function updateBowserHealth() {
    let player = document.getElementById('playerHealth');
    let bowser = document.getElementById('bowserHealth');
    
    

}