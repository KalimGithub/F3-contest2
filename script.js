
const username = document.getElementById("username")
const password = document.getElementById("password")
const loginBtn = document.getElementById("continue-btn")
const email = document.getElementById("email");
const confirmPassword = document.getElementById("confirm-password");
const mandatoryText = document.getElementById("mandatory-text");
const passwordNotMatched = document.getElementById("password-not-matched");

if (localStorage.getItem("token")) {
    alert("Aready Logged in!");
    window.location.href = "./profile.html";
}

function tokenGenerator(length) {
    const allCharacters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        token += allCharacters[randomIndex];
    }
    return token;
}

function saveUser() {
    let userData = {
        userName: username.value,
        email: email.value,
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('token', tokenGenerator(16));
    alert("signup Successful!!");
    window.location.href = "/profile.html";
}

loginBtn.addEventListener("click", (event) => {
    event.preventDefault() // required attribute will not work with preventDefault

    if (!username.value ||
        !password.value ||
        !email.value ||
        !confirmPassword.value
    ) {
        // alert("all fields mandatory")
        mandatoryText.innerText = `Error: All fields are mandatory!`;

    } else {
        // password checking
        if (password.value !== confirmPassword.value) {
            // alert("password does not match");
            passwordNotMatched.innerText = `*password does not match`;
            password.value = '';
            confirmPassword.value = '';
        } else {
            //save the user in local storage
            console.log("hello");
            saveUser();
        }
    }
});
