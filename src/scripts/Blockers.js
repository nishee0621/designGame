import * as PIXI from "pixi.js";
import { Global } from "./Global";
import { Blocker } from "./Blocker";

export class Blockers {
    constructor(){
        this.container = new PIXI.Container();
        this.blockers = [];
        this.possibleHeight = [-1,1];
        
        this.setScale();
        // this.current = null;
        this.createBlocker({x: window.innerWidth,y: 1, z: 5, w: 2.5 });
    }

    createBlocker(data){
        let blocker;
        console.log(this.getTimeElapsed());
        if(this.getTimeElapsed() < 60)
            blocker = new Blocker(data.x, data.y, 5, 2.5);
        else if(this.getTimeElapsed() >= 60 ){
            let blockerArray = [1,2,3,4,5];
            let blockerNum = Math.floor(Math.random()*5);
            blocker = new Blocker(data.x,data.y, blockerArray[blockerNum], 3);
        } 
        
        this.container.addChild(blocker.sprite);
        // console.log("blocker created");

        this.blockers.push(blocker);
        this.current = blocker;

        blocker.sprite.once("destroy", ()=> {
            this.blockers = this.blockers.filter(b => b!==blocker);
            blocker.sprite.destroy();
        });

        
    }

    getRandomData(){
        const offset = Math.floor(Math.random()*2);
        // console.log(this.possibleHeight[offset]);
        const y = this.possibleHeight[offset];
        const x = this.rangeOffset.min + Math.round(Math.random()*(this.rangeOffset.max - this.rangeOffset.min)) + this.current.right;
        // console.log(x);
        return {x,y};
    }

    update(dt) {
        if(this.current.right < window.innerWidth){
            // console.log("In here");
            this.createBlocker(this.getRandomData());
        }

        this.blockers.forEach(blocker => {
            blocker.move();
        })

    }

    getTimeElapsed(){
        let time = Date.now() - Global.timestamp;
        time = time/1000;

        return time;
    }

    setScale(){
        if(window.innerWidth < 700){
            this.rangeOffset = {min: 100, max: 200};
        }
        else {
            this.rangeOffset = {min: 200, max: 300};
        }
    }

    checkCollision(hero){
        this.blockers.forEach(blocker =>{
            blocker.checkCollision(hero);
        });
    }
}