const list = Element.classList; 
let first = 'toplight'; 
let second = 'middlelight';
let last = 'lastlight';


function activatelight(light, color, lightoff1,lightoff2, coloroff, coloroff2) {
    document.getElementById(light).classList.add(color);
    document.getElementById(lightoff1).classList.remove(coloroff);
    document.getElementById(lightoff2).classList.remove(coloroff2);
}

//function activatelight1() {
//    document.getElementById('toplight').classList.add('red');
//    document.getElementById('lastlight').classList.remove('green');
//    document.getElementById('middlelight').classList.remove('yellow');
    
//}
//function activatelight2(){
//    document.getElementById('middlelight').classList.add('yellow');
//    document.getElementById('lastlight').classList.remove('green');

//}
//function activatelight3 (){
//    document.getElementById('lastlight').classList.add('green');
//    document.getElementById('middlelight').classList.remove('yellow');
//    document.getElementById('toplight').classList.remove('red');
// }

function AutomaticLight() {
    setTimeout(activatelight, 1000);
    
}

