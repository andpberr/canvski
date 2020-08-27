import {Drawable} from './drawable.js';

class Player extends Drawable {
    constructor(ctx, canv) {
        super(ctx, canv);
        this.coordinates = {
            x:Math.floor(canv.width/2),
            y:Math.floor(canv.height/4)
        };
        this.spritecoords = {
            x:128,
            y:0
        };
    }

}

export {Player};
