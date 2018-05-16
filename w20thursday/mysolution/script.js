"use strict";

const listItemsNodes = document.querySelectorAll("#colorselector li");
const listItems = Array.from(listItemsNodes);
const body = document.documentElement;
// listen for clicks on the color-selectors
listItems.forEach((e)=>{
    e.addEventListener("click", ()=>{
        console.log(`Base color: ${e.dataset.basecolorValue}`)
        body.style.setProperty('--basecolor', e.dataset.basecolorValue);
    })
})


// when one is clicked:

    // find the element that was clicked

    // find the color from that element

    // set the css variable --basecolor 
