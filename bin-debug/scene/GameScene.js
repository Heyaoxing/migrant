var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.bird = new Bird();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.upSpeed, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.normalSpeed, _this);
        return _this;
    }
    GameScene.prototype.initView = function () {
        this.bg1 = GameUtil.createBitmapByName("bg-winter_png");
        this.addChild(this.bg1);
        this.bg1.width = this.stage.stageWidth;
        this.bg1.height = this.stage.stageHeight;
        this.bg2 = GameUtil.createBitmapByName("bg-winter_png");
        this.addChild(this.bg2);
        this.bg2.width = this.stage.stageWidth;
        this.bg2.height = this.stage.stageHeight;
        this.bg2.x = this.bg1.width;
        this.operation = new DirectionOperate();
        this.addChild(this.operation);
        this.start();
        this.addChild(this.bird);
    };
    GameScene.prototype.upSpeed = function () {
        GameData.speed = GameData.upSpeed;
    };
    GameScene.prototype.normalSpeed = function () {
        GameData.speed = GameData.normalSpeed;
    };
    GameScene.prototype.start = function () {
        egret.ticker.$startTick(this.update, this);
    };
    GameScene.prototype.stop = function () {
        egret.ticker.$stopTick(this.update, this);
    };
    GameScene.prototype.update = function (timeStamp) {
        if (this.bg1.x + this.bg1.width <= 0) {
            this.bg1.x = this.bg2.width + this.bg2.x;
        }
        if (this.bg2.x + this.bg2.width <= 0) {
            this.bg2.x = this.bg1.width + this.bg1.x;
        }
        this.bg1.x -= GameData.speed;
        this.bg2.x -= GameData.speed;
        return true;
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene");
