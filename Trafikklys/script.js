const list = Element.classList; 
let intervalid1 = setTimeout(activatelight1, 1000)
let intervalid2 = setTimeout(activatelight2, 5000)
let intervalid3 = setTimeout(activatelight3, 10000)

function activatelight1() {
    document.getElementById('toplight').classList.add('red');
    document.getElementById('lastlight').classList.remove('green');
    document.getElementById('middlelight').classList.remove('yellow');
    
}
function activatelight2(){
    document.getElementById('middlelight').classList.add('yellow');
    document.getElementById('lastlight').classList.remove('green');

}
function activatelight3 (){
    document.getElementById('lastlight').classList.add('green');
    document.getElementById('middlelight').classList.remove('yellow');
    document.getElementById('toplight').classList.remove('red');
}

