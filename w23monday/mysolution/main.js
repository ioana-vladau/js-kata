"use strict";

let form = document.querySelector("#user-form");
let textColor, backgroundColor, userName, email;

form.onsubmit = e => {
    e.preventDefault();

    //grab the user input
    textColor = form.textcolor.value;
    backgroundColor = form.backgroundcolor.value;
    userName = form.username.value;
    email = form.email.value;

    //set the key and the value
    localStorage.setItem("username", userName);
    userName = localStorage.getItem("username");

    //email
    localStorage.setItem("email", email);
    email = localStorage.getItem("email");

    //text color
    localStorage.setItem("textcolor", textColor);
    textColor = localStorage.getItem("textcolor");

    //background color
    localStorage.setItem("backgroundcolor", backgroundColor);
    backgroundColor = localStorage.getItem("backgroundcolor");
    
    //call the function that does the changes on UI
    applyColor();  
}

function applyColor(){
    document.querySelector('body').style.backgroundColor = backgroundColor;
    document.querySelector('body').style.color = textColor;
} 