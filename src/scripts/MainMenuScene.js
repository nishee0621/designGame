import * as PIXI from "pixi.js";
import { Global } from "./Global";

export class MainMenuScene {
    constructor(){
        this.container = new PIXI.Container();
        this.displayBackground();
        // this.createButton();
    }

    displayBackground(){
        this.sprite = new PIXI.Sprite(Global.resources["mainmenu"].texture);
        this.sprite.anchor.set(0.5);
        this.sprite.x = window.innerWidth/2;
        this.sprite.y = window.innerHeight/2;

        this.container.addChild(this.sprite);

    }

}