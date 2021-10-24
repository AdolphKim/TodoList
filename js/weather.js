const API_KEY ="0f19516defde52e001b3416c1ed2e6b2";

const weatherBox  = document.querySelector(".header__weather");
const city = weatherBox.querySelector(".weather__city");
const temp = weatherBox.querySelector(".weather__temp");
const weather = weatherBox.querySelector(".weather__weather");

navigator.geolocation.getCurrentPosition(geoOk,geoError)

function geoOk(pos){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

    fetch(url).then((response) => response.json()).then(data =>{
        temp.innerText = data.main.temp;
        city.innerText = `${data.sys.country} , ${data.name}`;
        weather.innerText = data.weather[0].main;
    }
        
        )
}

function geoError(){
    console.log("ERROR");
}
