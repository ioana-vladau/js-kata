"use strict";

// create a function called `mockify` that receives a string, 
// and returns a mocified version of that string.

function mockify() {
    let letters = Array.from(this);
    letters.forEach(randomize);

    function randomize(value, index, array){
        let letter = array[index];
        const rand = Math.random();
        if(rand<0.5){
            letter = letter.toUpperCase();
        } else {
            letter = letter.toLowerCase();
        }
    
        array[index] = letter;
    }

    let fullString = letters.join("");
    console.log(fullString)
    return fullString;
}

String.prototype.mockify = mockify;
document.querySelector('h1').textContent = document.querySelector('h1').textContent.mockify();
