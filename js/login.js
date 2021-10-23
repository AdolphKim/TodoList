const loginform = document.querySelector(".header__loginform");
const loginInput = loginform.querySelector(".login");
const greeting = document.createElement("span");

//const values

const USERNAME_KEY = "username"
const HIDDEN_CLASS ="hidden"

function greetingUser(username){
    loginInput.classList.add(HIDDEN_CLASS);
    greeting.innerText = `${username}님, 오늘도 계획적인 하루 도전하세요 !`
    loginform.appendChild(greeting);
}
function hadelLoginForm(event){
    event.preventDefault();
    username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY,username)
}

localUsername = localStorage.getItem(USERNAME_KEY)
if(localUsername){
    greetingUser(localUsername);
}
loginform.addEventListener("submit",hadelLoginForm)



