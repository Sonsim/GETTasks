// Model
 const PlayerTypes = ['Keeper', 'Midtstopper', 'Høyreback', 
 'Venstreving', 'Midtbaneanker', 'Tier',]
 let UserInput = "";
 let page = document.getElementById('app');

 //View
 UpdateView()
function UpdateView() {
        page.innerHTML = /*HTML*/ `
        <h1 class="header">Posisjoner som må styrkes</h1>
        `

        for (let i = 0; i<PlayerTypes.length; i++){
            page.innerHTML += /*HTML*/ `
                <ul>
                    <li>    
                            ${PlayerTypes[i]} 
                            <input type=checkbox>
                            <button class="buttons" onclick="Deleteplayer(${i})">Slett</button> 
                            <input type="text" class="inputfield" placeholder="Endre"
                            onchange="Changeplayer()" oninput= "newplayer = this.value"; > 
                    </li>
                    
                </ul>`

        }
        page.innerHTML += /*HTML*/ `
            <div>
                <input placeholder="Skriv spiller her" onchange="AddItem()" 
                oninput="UserInput = this.value" 
                class="inputfield" type="text"> 
            </div>`
}

 // Controller

 function AddItem() {
        PlayerTypes.push(UserInput);
        UpdateView();

 }
 function Deleteplayer(index) {
        PlayerTypes.splice(index, 1);
        UpdateView();
 }
 function Changeplayer(index) {
    PlayerTypes[index] = newplayer;
    UpdateView();
 }
