import * as PIXI from "pixi.js";
import { Background } from "./Background";
import { Global } from "./Global";
import { LabelScore } from "./LabelScore";
import { MainScene } from "./MainScene";
import { FinalBackground } from "./FinalBackground";

export class FinalScene{
    constructor(score){
        this.container = new PIXI.Container();
        // this.createBackground();
        this.createPopUp();
        this.createLabelScore(score);
        this.createText();
        this.container.interactive = true;
        this.container.once("pointerdown", () => {
            Global.scene.start(new MainScene());
        })
    }

    createBackground() {
        // create a sprite using a texture and addChild to app.stage
        this.background = new Background();
        this.container.addChild(this.background.container);
    }

    createPopUp(){
        // this.popup = new PIXI.Graphics();
        // const width = window.innerWidth;
        // const height = window.innerHeight/2;
        // // const height = 139;
        // const x = 0
        // const y = window.innerHeight/2 - 51.5;

        // this.popup.beginFill(0x000000, 0.5);
        // this.popup.drawRect(x,y,width,height);
        // this.container.addChild(this.popup);
        this.popup = new PIXI.Container();
        
        this.popup.x = 0;
        this.popup.y = window.innerHeight/2 - 76.014;
        // this.popup.height = 139;
        this.popup.width = window.innerWidth;
        this.container.addChild(this.popup);
    
        this.sprite = new PIXI.Sprite(Global.resources["finalbg"].texture);
        // this.sprite.alpha = 0.8
        this.sprite.scale.set(1.467);
        this.sprite.x = window.innerWidth/2;
        this.sprite.y = 0;
        this.sprite.anchor.set(0.5,0);
        this.popup.addChild(this.sprite);
    }

    createLabelScore(score){
        const x = window.innerWidth/2;
        const y = 90;
        const anchorx = 0.5;
        this.view = new LabelScore(x,y,anchorx);
        this.popup.addChild(this.view.view);
        this.view.render(score);
    }

    createText(){
        const text = new PIXI.Text();
        text.anchor.set(0.5,0);
        // text.x = window.innerWidth/2;
        // text.y = window.innerHeight/2;
        text.x = window.innerWidth/2;
        text.y = 100;
        // text.x = 
        text.style = {
            fontFamily : "Verdana",
            fontWeight : "normal",
            fontSize : 22,
            fill : ["##000000"],
        }
        text.alpha = 0.7
        text.text = "Tap to start again!";
        console.log("hy")
        this.popup.addChild(text);
    }
}