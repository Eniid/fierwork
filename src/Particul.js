import vector from "./vector";

export default class Particul {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;

        this.color = 'hsla(' + (Math.random() * 360) + ', 50%, 40%, 1)';;
        this.widht = 15;
        this.height = 15;
        const x = (Math.random() * this.canvas.width + 15) -15;
        const y = this.canvas.height -15;
        this.location = new vector(x, y); 
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