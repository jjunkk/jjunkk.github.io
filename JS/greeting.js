const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const logoutBtn = document.createElement("button");
    greeting.innerText = `Hello, ${username}!`;
    logoutBtn.innerText = `Logout`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.addEventListener("click", deleteBtn);
    greeting.appendChild(logoutBtn);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);    
} else {
    paintGreetings(savedUserName);
}

function deleteBtn() {
    if (confirm('Do you want to logout?')){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
        localStorage.removeItem(USERNAME_KEY);
        loginInput.value = "";
    } else {
    }
}
// logout.classlist.remove(HIDDEN_CLASSNAME);
// logout.classlist.add(HIDDEN_CLASSNAME);