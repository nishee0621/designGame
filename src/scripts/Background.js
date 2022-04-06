import * as PIXI from "pixi.js";
import { Global } from "./Global";

export class Background {
    constructor() {
        this.container = new PIXI.Container();
        this.sprites = [];
        this.createSprites();
        this.addShadow();
        this.speed = 2;
    }

    createSprites(){
        for(let i = 0; i< 6; i++){
            this.createSprite(i);
        }
        
    }

    addShadow(){
        const shadow = new PIXI.Sprite(Global.resources["shadow"].texture);
        shadow.anchor.set(0,0.5);
        shadow.scale.set(1,1.5);
        shadow.x = 0;
        shadow.y = window.innerHeight/2;
        this.container.addChild(shadow);
    }
    createSprite(i) {
        const sprite = new PIXI.Sprite(Global.resources["road"].texture);
        sprite.scale.set(1.476);
        console.log(`Road width: ${sprite.height}`);
        sprite.x = i*sprite.width;
        sprite.y = (window.innerHeight - sprite.height)/2
        this.container.addChild(sprite);
        this.sprites.push(sprite);
    }

    move(sprite, offset){
        const leftmostX = 0;
        const rightSpriteX = sprite.x + sprite.width;

        if(rightSpriteX <= leftmostX){
            sprite.x = sprite.x + this.sprites.length*sprite.width;
        }
        sprite.x -= offset;
    }
    update(dt){
        this.sprites.forEach(sprite => {
            const offset = this.speed*dt;
            this.move(sprite, offset);
        });
    }
}