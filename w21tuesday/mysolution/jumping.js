function jumping_init() {
    // TODO: Find classes .jumping

    const jumpingElements = document.querySelectorAll(".jumping");

    for(let i=0; i<jumpingElements.length; i++){
        console.log(jumpingElements);

        const jumpingText = jumpingElements[i].textContent.split(" ").join("\xa0");
        console.log(jumpingText)
        // create a span for every letter in the textContent
        jumpingElements[i].innerHTML = "";
    
        for(let j=0; j<jumpingText.length; j++){
            let span = document.createElement('span');
            span.innerHTML = jumpingText[j];
            jumpingElements[i].appendChild(span);
            // make sure every span has a style animation-delay of 0.05s more than the last one!
            span.setAttribute("style", `animation-delay: ${j*0.05}s`)
        }

    }


    // replace the content with these spans    
}
