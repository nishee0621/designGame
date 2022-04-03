import * as PIXI from "pixi.js";
import { Global } from "./Global";
import { Collision } from "./Collision";


export class Blocker {
    constructor(x,y, obstacleNum, speed){
        let obs = "obstacle" + obstacleNum.toString();
        this.sprite = new PIXI.Sprite(Global.resources[obs].texture);
        this.dx = -speed;
        this.sprite.anchor.set(0,0.5);
        this.speed = 1;
        this.sprite.y = window.innerHeight/2 + y*38.007;
        console.log(this.sprite.y);
        this.sprite.x = x;
    }

    move(){
        this.sprite.x+=this.speed*this.dx;
        if(this.right < 0){
            this.sprite.emit("destroy");
        }
    }

    checkCollision(hero){
        if(!this.sprite)
            return;
        if(hero.overlap(this)){
            this.speed = 0;
            this.collison = new Collision(-5,0);
            this.sprite.addChild(this.collison.sprite);
            setTimeout(this.restartGame(hero), 10000);
            
        }
        
            
    }

    restartGame(hero){
        this.collison.sprite.destroy();
        hero.sprite.emit("die");
    }

    setScaling(){
        
            // this.sprite.scale.set(0.25);
          
        
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