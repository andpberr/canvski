export class Drawable {

    constructor(ctx, canv) {
        this.coordinates = {
            x:Math.floor(Math.random()*canv.width),
            y:Math.floor(Math.random()*canv.height)
        };

        this.dims = {
            w:64,
            h:64
        };

        this.velocity = {
            x: 0,
            y: 0
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
        this.velocity = velocity;
        this.coordinates.x += this.velocity.x;
        this.coordinates.y += this.velocity.y;
    }
}