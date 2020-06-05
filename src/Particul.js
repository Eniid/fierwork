import vector from "./vector";

export default class Particul {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;

        this.color = 'hsla(' + (Math.random() * 360) + ', 50%, 40%, 1)';;
        this.widht = 10;
        this.height = 10;
        const x = (Math.random() * this.canvas.width + 15) -15;
        const y = this.canvas.height -15;
        this.location = new vector(x, y); 

        this.speed = 10; 
        this.maxH = this.canvas.height/2;
        this.gavity = 0.6; 
        this.angle = 270; 
    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
        this.ctx.fill();
    }; 

    update(){ 
        const x = this.speed * Math.cos(this.angle * (Math.PI/180));
        const y = this.speed * Math.sin(this.angle * (Math.PI/180));
        const newCoo = new vector(x, y);
        this.location.add(newCoo);

        if(this.location.y < this.maxH){
            //console.log("coucou");
            
            
        }

			this.draw(); 
    }
}