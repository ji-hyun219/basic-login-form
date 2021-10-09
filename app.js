const loginForm = document.querySelector('#login_form');
const loginInput = document.querySelector('#login_form input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `hello ${username}`;
    
}

loginForm.addEventListener('submit', onLoginSubmit);

