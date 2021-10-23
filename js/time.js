const clock = document.querySelector(".header__clock");
const time = clock.querySelector(".clock__time");
const date = document.querySelector(".header__date");

timeSet();
function timeSet(){
    let today = new Date();
    Hours = today.getHours();
    Min = today.getMinutes();
    Sec = today.getSeconds();
    Years = today.getUTCFullYear();
    Month = today.getMonth() + 1;
    Day = today.getDate();
    date.innerText = `${Years} - ${Month.toString().padStart(2,'0')} - ${Day.toString().padStart(2,'0')}`
    time.innerText = `${Hours.toString().padStart(2,'0')} : ${Min.toString().padStart(2,'0')} : ${Sec.toString().padStart(2,'0')}`
}
setInterval(timeSet,1000);