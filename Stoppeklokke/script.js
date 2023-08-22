const timer = document.getElementById('seconds');
const laptimes = document.getElementById('laptime');
const timer2 = document.getElementById('minutes');
let intervalID = null; 
let seconds = 0;
let minutes = 0;



function countSeconds(){
    timer.innerHTML = seconds;
    seconds++;
    timer2.innerHTML = minutes;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
       
}
function takelaps(){
    laptimes.innerHTML +=  `${minutes}:${seconds}`;
    
    if (laptimes.innerHTML = `${minutes}:${seconds}`) {
        laptimes.innerHTML += "";
    }
}
function Starttime(){ 
    intervalID = setInterval(countSeconds, 1000);
}
function stoptimer(){
    clearInterval(intervalID);
}