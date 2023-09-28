const userName = document.getElementById("name");
const email = document.getElementById("email");
// const token = document.getElementById("token");
const logoutBtn = document.getElementById("logout-btn");

if (!(localStorage.getItem("token"))) {
    alert("You need to Sign Up!!");
    window.location.href = "./index.html";
}

let userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);
userName.innerText = `Username: ${userData.userName}`;
email.innerText = `Email: ${userData.email}`;
// token.innerText = token;

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    alert("logout Successful");
    window.location.href = "./index.html";
});