"use strict";

window.addEventListener("DOMContentLoaded", buildList);

const theList = document.querySelector("#thelist");

const list_data = [
    {
      link: "http://javascript.info/",
      description: "The Modern JavaScript Tutorial"
    },
    {
        link: "https://docs.google.com/spreadsheets/d/1n98cUW2htrh8tCvciUuXcjl9B826TuwZ9KjACsmnOW0/edit?usp=sharing",
        description: "The weekplan"
    },
    {
        link: "https://www.codecademy.com/learn/learn-the-command-line",
        description: "Command-line tutorial"
    },
    {
        link: "https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70",
        description: "Modern JavaScript Explained For Dinosaurs"
    },
    {
        link: "https://nodejs.org/en/",
        description: "Node.js"
    },
    {
        link: "https://git-scm.com/downloads",
        description: "git"
    },
    {
        link: "https://github.com/jofhatkea/js-kata",
        description: "The Kata with exercises"
    },
    {
        link: "http://flukeout.github.io",
        description: "CSS Selector practice"
    },
    {
        link: "https://code.visualstudio.com/",
        description: "Visual Studio Code editor"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        description: "MDN Array"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        description: "MDN String"
    },
    {
        link: "https://www.ecma-international.org/publications/standards/Ecma-262.htm",
        description: "ECMAScript standard specification"
    },
    {
        link: "https://www.w3schools.com/js/default.asp",
        description: "W3Schools JavaScript tutorial"
    },
    {
        link: "https://www.w3schools.com/jsref/default.asp",
        description: "W3Schools JavaScript reference"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "MDN JavaScript reference and guides"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        description: "The DOM"
    }
];

// function buildList() {
//     // build a list of all the links in list_data
//     for(let i=0; i<list_data.length; i++){
//         let str = list_data[i].description;
//         let result = str.link(list_data[i].link);
//         createLi().innerHTML = result;     
//     }
// }

function buildList() {
        // build a list of all the links in list_data
        list_data.forEach(function(object){
            let description = object.description;
            // I JUST SAW IT'S DEPRECATED
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/link
            let link = description.link(object.link);
            createLi(object).innerHTML = link;
        })
    }

// TODO: Make function createLi
function createLi(element) {
    const li = document.createElement("li");
    theList.appendChild(li);
    let url = element.link.split("://")[1].split("/")[0];
    li.setAttribute("title", url);
    return li;
}