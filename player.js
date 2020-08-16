class Player {
    constructor(ctx, canv) {
        this.coordinates = {
            x:Math.floor(canv.width/2),
            y:Math.floor(canv.height/4)
        };
        this.dims = {
            w:64,
            h:64
        };

        this.velocity = {
            x:0,
            y:0
        }

        this.spritecoords = {
            x:128,
            y:0
        };

        this.ctx = ctx;
    }

    draw(sprites) {
        this.ctx.drawImage(
            sprites, 
            this.spritecoords.x,
            this.spritecoords.y,
            this.dims.w,
            this.dims.h,
            this.coordinates.x,
            this.coordinates.y,
            this.dims.w,
            this.dims.h
        );
    }

    update(velocity) {
        //this.coordinates.x += this.velocity.x;
        //this.coordinates.y += this.velocity.y;
    }
}

export {Player};
