import vector from "./vector";

export default class Particul {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;

        this.color = "#fff";
        const x = 25;
        const y = 25;
        this.location = new vector(x, y); 
        this.widht = 15;
        this.height = 15;
    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
        this.ctx.fill();
    }; 

    update(){

			this.draw(); 
    }
}