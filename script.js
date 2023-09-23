const loginForm = document.getElementsByClassName("input-container")
const username = document.getElementById("username")
const password = document.getElementById("password")
const loginBtn = document.getElementById("continue-btn")

let token;


loginBtn.addEventListener("click", ()=>{
console.log("hello");
profilePage();
})


function profilePage(){
    window.location.href="./profile.js"
}