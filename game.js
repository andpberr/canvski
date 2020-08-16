import foo from './helpers.js';

draw();

function draw() {
    let ctx = getCanvasContext();
    fillBackground(ctx);
    console.log(foo);
}

function getCanvasContext() {
    let canv = document.getElementById("game");
    console.log(canv);
    return canv.getContext("2d");
    
}

function fillBackground(ctx) {
    ctx.fillStyle = "snow";
    ctx.fillRect(0,0,640,480);
}