"use strict";

let cookies = document.querySelector("#cookies");

window.onload = () => {
    cookies.classList.remove("hidden");
    document.querySelector("#cookies-accept").addEventListener("click", () => {
        event.preventDefault();
        cookies.classList.add("hidden");
        let cookieImage = document.querySelector("#cookie-image");
        cookieImage.src = "https://pbs.twimg.com/profile_images/552145045663408129/egywNuyx_400x400.png";
    });
}
