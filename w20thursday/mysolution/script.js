"use strict";

const listItemsNodes = document.querySelectorAll("#colorselector li");
const listItems = Array.from(listItemsNodes);
const body = document.documentElement;
// listen for clicks on the color-selectors
listItems.forEach((e)=>{
    // find the element that was clicked
    e.addEventListener("click", ()=>{
        // find the color from that element
        console.log(`Base color: ${e.dataset.basecolorValue}`)
        // set the css variable --basecolor 
        body.style.setProperty('--basecolor', e.dataset.basecolorValue);
    })
});