export const controller = {

    init(animation){

        this.inputParSpeed = document.getElementById("name");
        this.inputParSpeed.addEventListener('change', e=>{
            console.log(this.inputParSpeed.value);
            this.animation.Exp = this.inputParSpeed.value;
        })

    },

}