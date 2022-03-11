import * as PIXI from "pixi.js";
import { Global } from "./Global";

export class Background {
    constructor() {
        this.container = new PIXI.Container();
        this.sprites = [];
        this.createSprites();
        this.speed = 2;
    }

    createSprites(){
        for(let i = 0; i< 6; i++){
            this.createSprite(i);
        }
        
    }
    createSprite(i) {
        const sprite = new PIXI.Sprite(Global.resources["road"].texture);
        // sprite.scale.set(10);
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