import * as PIXI from "pixi.js";
import { Global } from "./Global";

export class Blocker {
    constructor(x,y){
        this.sprite = new PIXI.Sprite(Global.resources["obstacle1"].texture);
        
       
        this.setScaling();
        console.log(this.sprite.height);
        this.sprite.anchor.set(0,0.5);

        this.sprite.y = window.innerHeight/2 + y*this.sprite.height/2;
        console.log(this.sprite.y);
        this.sprite.x = x;
    }

    move(){
        this.sprite.x+=this.dx;
        if(this.right < 0){
            this.sprite.emit("destroy");
        }
    }

    // checkCollision(hero){
    //     if(!this.sprite)
    //         return;
    //     // if(this.b.hit(this.sprite,hero.sprite,true)){
    //     //     hero.sprite.emit("die");
    //     // }
    //     if(hero.overlap(this)){
    //         hero.sprite.emit("die");
    //     }
    //     else {
    //         hero.sprite.emit("score");
    //     }
            
    // }

    setScaling(){
        
            // this.sprite.scale.set(0.25);
            this.dx = -10;
        
    }

    get left(){
        return this.sprite.x;
    }
    get right() {
        return this.left + this.sprite.width;
    }
    get top() {
        return this.sprite.y;
    }
    get bottom() {
        return this.top + this.sprite.height;
    }
}