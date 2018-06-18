"use strict";

document.querySelector("#stage").addEventListener("mousemove", mouseMove);

function mouseMove(e) {
    // Find the x and y coordinates of the mouse, relative to the stage (upper left corner is 0,0)
    let xCoord = e.clientX;
    let yCoord = e.clientY;
    console.log(`coord X: ${xCoord}, coord Y: ${yCoord}`);

    // Find the center of the stage (relative to the stage) (centerX and centerY)
    let centerX = document.documentElement.clientWidth / 2;
    let centerY = document.documentElement.clientHeight / 2;

    console.log(`center X: ${centerX}, center Y: ${centerY}`);
    // Calculate the horisontal (distX) and vertical (distY) distance from the mouse to the center of the stage
    let distX = centerX-xCoord;
    let distY = centerY-yCoord;
    console.log(`X: ${distX}, Y: ${distY}`)
    
    // Calculate the relativistic distance, using this formula

    let relativeX = ( centerX + distX ) / centerX;
    console.log(`relativeX distance: ${relativeX}`)

    let relativeY = ( centerY + distY ) / centerY;
    console.log(`relativeY distance: ${relativeX}`)
// These 2 values relativeX and Y range in my project from 0 to 2, not from -1 to 1


    // This gives you a value from -1 when the mouse is at the very left, 
    //                           to 0 when the mouse is in the center, 
    //                           to 1 when the mouse is at the very right

    // Try it out before continuing - just for horisontal (x) movement

    // Then position the foreground using the relativeX (you might need to calculate the center of the foreground!), by
    // trying these things in order, let each one replace the former, so you end up with just the last:
    // 1. Let the foreground follow the mouse - calculate the position like this
    //        position = centerX + stage.width/2 * relativeX
    // experiment with other formulas. Why does this one work best?
    // 2. Let the foreground move opposite the mouse, change something to be negative. Experiment!
    // 3. Let the foreground move opposite the mouse, but not as much as the mouse.
    //  you are going to need a factor, a value that it max should be moved by. Then try:
    //        position = centerX - factor * relativeX


    let factor = 100;
    let positionX = centerX - factor * relativeX;
    document.querySelector("#foreground").style.left = positionX + "px";

    let positionY = centerY - factor * relativeY;
    document.querySelector("#foreground").style.top = positionY+"px";

    console.log("positionX: " + positionX);
    console.log("positionY: " + positionY);

    let factor2 = -100;
    let positionX2 = centerX*(-0.005) - factor2 * relativeX*2;
    let positionY2 = centerY*(-0.008) - factor2 * relativeY*2;
    document.querySelector("#background").style.left = positionX2+"px";
    document.querySelector("#background").style.top = positionY2+"px";

    // When done, get it working for the vertical (y) movement as well - use the same formulas, but with different values almost everywhere

    // When that is done, do the same for the background, but get it to move opposite the foreground.

    // Congratulate yourself, and then test the same code on graphics.html!
}