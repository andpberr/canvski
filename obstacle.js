import {Drawable} from './drawable.js';

class Obstacle extends Drawable {
    constructor(ctx, canv) {
        super(ctx, canv);
        this.obstacleType = Math.random() > 0.5 ? "tree" : "rock";

        if (this.obstacleType === "tree") {
            this.spritecoords = { x:0, y:0 };
        } else {
            this.spritecoords = { x:64, y:0 };
        }
    }
 
}

export {Obstacle};