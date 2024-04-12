
import {exec} from "child_process";


export class ChildProcess{

    static #shellScriptsPath = "./shellScripts/";
    static #resolutionFolder = this.#shellScriptsPath + "resolution/";

    /**
     * Bash script return Array [width, height]
     * @returns [width, height]
     */

    static getScreenResolution() {
        const command = this.#resolutionFolder + "showRes.sh";
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.log("Error: " + error);
                    reject(error);
                } else if (stderr) {
                    console.log("Error: " + stderr);
                    reject(stderr);
                } else {
                    const [width, height] = stdout.trim().split("\n");
                    resolve([Number.parseInt(width), Number.parseInt(height)]);
                }
            });
        });
    }
}

