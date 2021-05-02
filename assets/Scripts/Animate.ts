// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        // cc.tween(this.node)
        //     .to(5, { angle: -360 })
        //     .to(10, { x: 100 })
        //     .to(15, { opacity: 0 })
        //     .to(20, { opacity: 500 })
        //     .by(25, { x: -100 })
        //     .to(30, { angle: 360 })
        //     .start();
    }

    onMouseDown() {
        console.log("down");
        cc.tween(this.node)
            .to(5, { angle: -360 })
            .to(10, { x: 100 })
            .to(15, { opacity: 0 })
            .to(20, { opacity: 500 })
            .by(25, { x: -100 })
            .to(30, { angle: 360 })
            .start();
        console.log("test");
    }

    onMouseEnter() {
        console.log("enter");
        cc.tween(this.node)
            .to(5, { scaleY: 1.5 })
            .start();
    }

    onMouseLeave() {
        console.log("leave");
        cc.tween(this.node)
            .to(5, { scaleY: 1 })
            .start();
    }

    // start() {
    //     this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    // }

    // update (dt) {}
}
