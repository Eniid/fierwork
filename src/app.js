//import { controller } from "./controller";
import Particul from "./Particul";



const animation = {
    canvasElt: undefined, 
    ctx: undefined, 
    particuls : [],
    particulsNb : 1, 
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
      for(let i = 0, i < this.particulsNb)
    
      //* initialiser mon controleur 

    
    this.animate();
    },

    draw(){
      // Ajouter ici les uptade
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