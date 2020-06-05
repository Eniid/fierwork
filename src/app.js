//import { controller } from "./controller";
import Particul from "./Particul";



const animation = {
    canvasElt: undefined, 
    ctx: undefined, 
    particuls : [],
    particulsNb : 5, 
    //controller,

    init(){
        this.canvasElt = document.createElement("canvas")
        document.body.insertAdjacentElement("beforeend", this.canvasElt);
        this.ctx = this.canvasElt.getContext('2d'); 

        this.resize(); 
        window.addEventListener('resize', e => {
            this.resize();
        }, false)
    
      //Ajouter ici les nouvelles classes 
    for(let i = 0; i < this.particulsNb; i++){
        this.particuls.push(new Particul(this)); 
    }    
    
      //* initialiser mon controleur 

    
    this.animate();
    },

    draw(){
        this.particuls.forEach (particul => {
            if(particul !== undefined){
                particul.update(); 
            }
        })
    },

    resize(){
        this.canvasElt.height = window.innerHeight;
        this.canvasElt.width = window.innerWidth;
    },

    animate(){ 
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); 
        });
    },
}

animation.init() 