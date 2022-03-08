// import {App} from "./App";
import * as PIXI from "pixi.js";
import { Global } from "./Global";

export class Collision {
    constructor(x,y){
        this.sprite = new PIXI.Sprite(Global.resources["union"].texture);
        this.sprite.anchor.set(0,0,5);
        this.sprite.x = x;
        this.sprite.y = y;
        // this.app = new App;
        // this.displayCoillison();
    }

    // displayCoillison(){
    //     this.app.app.ticker.stop();
    // }

    // restartGame(){
    //     // this.app.app.ticker.start();
    //     this.sprite.destroy();
        
    // }
}