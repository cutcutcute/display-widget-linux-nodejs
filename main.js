import {WindowConfig} from "./scripts/WindowConfig.js";
import { app, BrowserWindow } from "electron";

const createWindow = () => {
    const win = new BrowserWindow({
        title: "Window Editor",
        width:800,
        height: 800,
        webPreferences: {
            devTools:true
        }
    });
    const cfg = new WindowConfig(app);
    win.loadFile("index.html");
}

app.whenReady().then(()=>{
        
    createWindow();
})

