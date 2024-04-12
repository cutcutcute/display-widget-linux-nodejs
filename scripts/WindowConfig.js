import {Application} from "./Application.js";
import {ChildProcess} from "./childProcesses/ChildProcess.js";



export class WindowConfig extends Application{
    #width;
    #height;
    #ratio;

    constructor(app){
        super(app)
        this.getSize().then((res)=>{
            this.#width = res[0];
            this.#height = res[1];
        })
        .catch((error)=>{
            console.log(error);
            this.closeApp();
        })

            

    }

    async getSize(){
        return await ChildProcess.getScreenResolution();
    }

}

