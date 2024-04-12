

/**
 * Global Application Class 
 */
export class Application{
    #app;

    /**
     * Init application from Electron App
     * @param {} app 
     */
    constructor(app){
        this.#app = app;
    }



    /**
     * Use for close application
     */
    closeApp(){
        this.#app.quit();
    }

}
