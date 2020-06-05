import vector from "./vector";

export default class Particul {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;

        this.color = "#fff";
        this.widht = 5;
        this.height = 5;
        const x = 10;
        const y = 10;
        this.location = new vector(x, y); 

        this.speed = 10; 
        this.angle = Math.rendom() *360; 
        this.gravity = 0.2; 

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
            this.angle = this.angle + 5; 
        }

			this.draw(); 
    }
}