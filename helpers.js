let canv;

function getCanvasContext() {
    canv = document.getElementById("game");
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    return canv.getContext("2d");
    
}

function fillBackground(ctx) {
    ctx.fillStyle = "snow";
    ctx.fillRect(0,0,canv.width,canv.height);
}

export {getCanvasContext, fillBackground, canv};