function jumping_init() {
    // TODO: Find classes .jumping
    const jumpingText = document.querySelector(".jumping").textContent;
    // create a span for every letter in the textContent
console.log(jumpingText)


function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }


    for(let i=0; i<jumpingText.length; i++){
        let span = document.createElement('span');
        span.innerHTML = jumpingText[i];
        document.querySelector(".jumping").appendChild(span);
        // make sure every span has a style animation-delay of 0.05s more than the last one!
        span.setAttribute("style", `animation-delay: ${i*0.05}s`)
    }
    // replace the content with these spans

    
}
