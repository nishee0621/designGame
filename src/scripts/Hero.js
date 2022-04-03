import { Global } from "./Global";
import * as PIXI from "pixi.js";



export class Hero {
    constructor() {
        this.sprite = new PIXI.Sprite(Global.resources["player"].texture);
        this.sprite.anchor.set(0,0.5);
        // this.sprite.scale.set(0.8);
        this.sprite.x = 100;
        this.dy = 1;
        this.flag = false;
        // this.sprite.y = window.innerHeight/2 + this.dy*(13.25 + this.sprite.height/2);
        this.sprite.y = window.innerHeight/2 + this.dy*38.007;
        // console.log(this.sprite.y);
        this.score = 0;
        // console.log(this.sprite.width);
        // console.log(this.sprite.y);
    }

    changeLane(){
        // car in lower lane
        this.dy = -this.dy;
        this.flag = true;
        
        // this.sprite.y = window.innerHeight/2 + this.dy*(25.75);
        // console.log(this.sprite.y);
    }

    overlap(blocker){
    //    if(this.dy == 0){
    //     return this.right > blocker.left + blocker.sprite.width/2 &&
    //         this.left  < blocker.right && 
    //         this.top < blocker.bottom;
    //    }
    //    else{
    //        return this.right > blocker.left + blocker.sprite.width/2 &&
    //             this.left < blocker.right &&
    //             this.bottom > blocker.top;
    //    }
        // console.log(this.sprite.y );
        // console.log(blocker.sprite.y);
        // console.log("In overlap func");
        // return this.right >= blocker.left &&
        //  this.left <= blocker.right &&  
        // Math.abs(this.sprite.y - blocker.sprite.y) <= 0.1
        return this.right >= blocker.left &&
                this.left <= blocker.right &&
                this.top < blocker.bottom &&
                this.bottom > blocker.top
        
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

        if(this.flag == true){
            if(this.dy == -1 && this.sprite.y > window.innerHeight/2 + this.dy*38.007){
                this.sprite.y = Math.max(this.sprite.y - 5, window.innerHeight/2 + this.dy*38.007);
                if(this.sprite.y == window.innerHeight/2 + this.dy*38.007){
                    this.flag = false;
                }
            }
            else if(this.dy == 1 && this.sprite.y < window.innerHeight/2 + this.dy*38.007){
                this.sprite.y = Math. min(this.sprite.y + 5, window.innerHeight/2 + this.dy*38.007);
                if(this.sprite.y == window.innerHeight/2 + this.dy*38.007){
                    this.flag = false;
                }
            }
        }
    }
}