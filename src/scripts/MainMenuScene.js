import * as PIXI from "pixi.js";
import { Global } from "./Global";
import { MainScene } from "./MainScene";

export class MainMenuScene {
    constructor(){
        this.container = new PIXI.Container();
        this.displayBackground();
        this.createButton();
        this.createText();
    }

    displayBackground(){
        this.sprite = new PIXI.Sprite(Global.resources["mainmenu3"].texture);
        this.sprite.anchor.set(0.5);
        this.sprite.x = window.innerWidth/2;
        this.sprite.y = window.innerHeight/2;
        this.container.addChild(this.sprite);
    }

    createButton(){
        this.button = new PIXI.Sprite(Global.resources["button"].texture);
        this.button.interactive = true;
        this.button.once("pointerdown", () => {
            console.log("menu screen");
            Global.scene.start(new MainScene());
        })
        this.button.anchor.set(0.5,0);
        this.button.x = 0
        this.button.y = 0.5
        this.sprite.addChild(this.button); 
    }

    createText(){
        const text = new PIXI.Text();
        text.anchor.set(0.5,0);
        text.x = 0
        text.y = 20
        text.style = {
            fontFamily : "Verdana",
            fontWeight : "bold",
            fontSize : 15,
            fill : ["##000000"],
        }
        text.text = "Start Gaming";
        
        this.button.addChild(text);
    }

}