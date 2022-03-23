import * as PIXI from "pixi.js";

export class LabelScore {
    constructor(x=10, y=10, anchor=0) {
        this.view = new PIXI.Text();
        this.view.x = x;
        this.view.y = y;
        this.view.anchor.set(anchor, 1);
        this.view.style = {
            fontFamily : "Verdana",
            fontWeight : "normal",
            fontSize : 20,
            fill : ["##000000"]
        };
        this.render(0);
    }

    render(score) {
        this.view.text = `Score: ${score}`;
        // console.log("render function called");
    }
}