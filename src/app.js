//import { controller } from "./controller";
import Particul from "./Particul";
import Explodep  from "./Explodep";



const animation = {
    canvasElt: undefined, 
    ctx: undefined, 
    particuls : [],
    particulsNb : 5, 
    Explodep : [],
    ExplodepNb : 1, 
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
    
            if(particul.location.y < particul.maxH){
                for(let i = 0; i < this.ExplodepNb; i++){
                    const newEx = new Explodep(this);
                    //console.log(particul.location);
                    newEx.color = particul.color
                    newEx.location.x = particul.location.x
                    //newEx.location.y = particul.location.y
                    this.particuls.push(newEx); 
                }  
                //particul.splice(particul[i], 1)
            }
        })



        this.particuls.forEach (particul => {
            if(particul !== undefined){
                particul.update(); 
            }
            
        })

        this.Explodep.forEach (eparticul => {
            if(eparticul !== undefined){
                eparticul.update(); 
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