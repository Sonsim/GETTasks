// Model
let app = document.getElementById('app');
var yrData = [];
var lat;
var lon;
var currentTime = '';
var currentweather= '';
var tempin6hours='';
var weatherin6hours = '';
var nextday = '';
var weathernextday = '';

getLocation();





// View
function updateView() {

    app.innerHTML = /*HTML*/ `
        <div id="backbox">
            <div id="thisday"></div> <br>
            <div id="6hours"></div> <br>
            <div id="nextday"></div><br>
        </div>
        
    `
}



// Controller



Date.prototype.addHours = function(hour) {
    this.setTime(this.getTime() + (hour*60*60*1000));
    return this;
}

function getLocation() {
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        } );
        updateView();
    } 
    else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getYRdata() {
    
    axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`)
    .then( (api_data) => {
           
       let today = new Date().setMinutes(0,0,0);
       let tommorow = new Date(today).addHours(24);
       let in6hours = new Date(today).addHours(6)
       
       let isoDate1 = new Date(today).toISOString();
       isoDate1 = isoDate1.split('.')[0]+"Z";
       
       let isoDate2 = new Date(tommorow).toISOString();
       isoDate2 = isoDate2.split('.')[0]+"Z";
   
       let isoDate3 = new Date(in6hours).toISOString();
       isoDate3 = isoDate3.split('.')[0]+"Z";
       
   
     
       const yrTimeData = api_data.data.properties.timeseries;
       const yrNow = yrTimeData.filter( (timestamp) =>  timestamp.time == isoDate1);
       const yrTommorow = yrTimeData.filter( (timestamp) =>  timestamp.time == isoDate2);
       const yr6Hours = yrTimeData.filter((timestamp => timestamp.time == isoDate3))
   
       currentTime = yrNow[0].data.instant.details.air_temperature + '°C';
       currentweather = yrNow[0].data.next_1_hours.summary.symbol_code;
       
       tempin6hours = yr6Hours[0].data.instant.details.air_temperature + '°C';  
       weatherin6hours = yr6Hours[0].data.next_6_hours.summary.symbol_code;
   
       nextday = yrTommorow[0].data.instant.details.air_temperature + '°C';
       weathernextday = yrTommorow[0].data.next_1_hours.summary.symbol_code;
   
       document.getElementById('thisday').innerHTML += /*HTML*/ `
       Now: ${currentTime} and ${currentweather}
       `
     
       document.getElementById('6hours').innerHTML += /*HTML*/ `
       In 6 Hours: ${tempin6hours} and ${weatherin6hours}
       `
       document.getElementById('nextday').innerHTML = /*HTML*/ `
       Tomorrow: ${nextday} and ${weathernextday}
       `
   
    })
   }

