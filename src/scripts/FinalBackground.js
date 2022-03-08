import * as PIXI from "pixi.js";
import { Global } from "./Global";

export class FinalBackground{
    constructor(){
        this.container = new PIXI.Container();
        this.islandSprite = new PIXI.Sprite(Global.resources["island2"].texture);
        this.sunSprite = new PIXI.Sprite(Global.resources["sun2"].texture);
        this.create();
        this.update();
    }

    create(){
        this.sunSprite.scale.set(0.10);
        this.container.addChild(this.islandSprite);
        this.container.addChild(this.sunSprite);
    }

    update(){
        
    }
}