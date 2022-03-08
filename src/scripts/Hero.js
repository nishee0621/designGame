import { Global } from "./Global";
import * as PIXI from "pixi.js";



export class Hero {
    constructor() {
        this.sprite = new PIXI.Sprite(Global.resources["player"].texture);
        // this.sprite.anchor.set(0,0.5);
        this.sprite.x = 100;
        this.sprite.y = window.innerHeight/2 -this.sprite.height/2;
        this.dy = 0;
        this.score = 0;
        console.log(this.sprite.width);
        console.log(this.sprite.y);
        // this.sprite.y = window.innerHeight - this.sprite.height;
    }

    changeLane(){
        if(this.sprite.y == window.innerHeight - this.sprite.height){
            this.dy = 1;
            this.sprite.y-=this.LANE_SIZE;
        }
        else if(this.sprite.y == window.innerHeight - this.sprite.height-this.LANE_SIZE){
            this.dy = 0;
            this.sprite.y+=this.LANE_SIZE;
        }
    }

    overlap(blocker){
       if(this.dy == 0){
        return this.right > blocker.left + blocker.sprite.width/2 &&
            this.left  < blocker.right && 
            this.top < blocker.bottom;
       }
       else{
           return this.right > blocker.left + blocker.sprite.width/2 &&
                this.left < blocker.right &&
                this.bottom > blocker.top;
       }
    }

    // setScale(){
    //     if(window.innerWidth < 700){
    //         this.sprite.scale.set(0.02)
    //         this.sprite.x = 100;
    //         this.LANE_SIZE = 69.7;
    //     }
    //     else {
    //         this.sprite.scale.set(0.05)
    //         this.sprite.x = 100;
    //         this.LANE_SIZE = 179.25;
    //     }
    // }

    get left() {
        return this.sprite.x;
    }

    get right(){
        return this.left + this.sprite.width;
    }

    get top(){
        return this.sprite.y;
    }

    get bottom(){
        return this.top+this.sprite.height;
    }

    update(dt){
        ++this.score;
    }
}