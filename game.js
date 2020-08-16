import {
    getCanvasContext,
    fillBackground,
    canv
} from './helpers.js';
import {Obstacle} from './obstacle.js';
import {Player} from './player.js';

class game {
    constructor() {
        this.ctx = getCanvasContext();
        this.refresh = () => fillBackground(this.ctx);

        this.refresh();

        this.sprites = document.createElement("img");
        this.sprites.src="./sprites.png";

        this.objects = [];
        this.objects.push(new Player(this.ctx, canv));
        this.velocity = {
            x:0,
            y:0
        };
        for (let i = 0; i < 5; ++i) {
            let obs = new Obstacle(this.ctx, canv);
            this.objects.push(obs);
        }
        document.addEventListener('keydown',(e) => this.keyHandler(e));
    }

    draw() {
        this.refresh();
        for (let obj of this.objects) {
            obj.draw(this.sprites);
        }
    }

    update() {
        let delta = {x:0.01, y:0};

        if (this.velocity.x !== 0) {
            delta.x = -Math.sign(this.velocity.x)*(1/1+Math.exp(-Math.abs(this.velocity.y)))*0.01;
            this.updateVelocity(delta);
        }


        if (Math.random() > .9) {
            let o = new Obstacle(this.ctx, canv);
            o.coordinates = {
                x: Math.random()*canv.width,
                y: canv.height+100
            }
            this.objects.push(o);
        }

        for (let obj of this.objects) {
            obj.update(this.velocity);
        }
    }

    updateVelocity(delta) {
        this.velocity.x += delta.x;
        this.velocity.y += delta.y;
    }

    keyHandler(e) {
        let delta = {x:0, y:0};
        let xval = this.velocity.y === 0 ? 1 : Math.log2(Math.abs(this.velocity.y));
        switch (e.code) {
            case 'KeyS': delta = {x: 0, y: -1}; break;
            case 'KeyW': delta = {x: 0, y: this.velocity.y >= 0 ? 0 : 2}; break;
            case 'KeyA': delta = {x: xval,y: 0}; break;
            case 'KeyD': delta = {x: -xval, y: 0}; break;
        }
        console.log('v');
        console.log(this.velocity);
        console.log('dv');
        console.log(delta);
        this.updateVelocity(delta);

    }

    main() {
        this.update();
        this.draw();
        window.requestAnimationFrame(()=>this.main());
    }

}

let g = new game();
g.main();