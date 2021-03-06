import vector from "./vector";

export default class Explodep {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;

        this.color = "#fff";
        this.widht = 5;
        this.height = 5;
        const x = 100;
        const y = 100;
        this.location = new vector(x, y); 

        this.speed = 5; 
        this.angle = Math.random() *360; 
        //this.angle = 100; 
        this.friction = 4; 

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
        
        //console.log(this.location.y);
        
        //this.location.y = this.location.y + this.friction; 




			this.draw(); 
    }
}