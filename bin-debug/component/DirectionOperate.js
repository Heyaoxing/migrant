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
var DirectionOperate = (function (_super) {
    __extends(DirectionOperate, _super);
    function DirectionOperate() {
        var _this = _super.call(this) || this;
        _this._start = new egret.Point(GameData.OPERA_X, GameData.OPERA_Y);
        _this.area = new egret.Sprite();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    DirectionOperate.prototype.onAddToStage = function (event) {
        this.area.graphics.beginFill(0x00ff00, 0);
        this.area.graphics.drawCircle(0, 0, GameData.OPERA_AREA);
        this.area.graphics.endFill();
        this.area.touchEnabled = true;
        this.addChild(this.area);
        this.area.x = GameData.OPERA_X;
        this.area.y = GameData.OPERA_Y;
        this.area.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.area.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
        this.area.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.orientation_png = GameUtil.createBitmapByName("operation_png");
        this.area.addChild(this.orientation_png);
        this.orientation_png.x = -GameData.OPERA_SIZE;
        this.orientation_png.y = -GameData.OPERA_SIZE;
        this.orientationPath_png = GameUtil.createBitmapByName("operation-path_png");
        this.area.addChild(this.orientationPath_png);
        this.orientationPath_png.alpha = 0;
    };
    DirectionOperate.prototype.onTouchBegin = function (event) {
        this.orientationPath_png.alpha = 1;
        this.operationMove(event);
    };
    DirectionOperate.prototype.onTouch = function (event) {
        this.operationMove(event);
    };
    DirectionOperate.prototype.onTouchEnd = function (event) {
        this.orientationPath_png.alpha = 0;
    };
    DirectionOperate.prototype.operationMove = function (event) {
        var _end = new egret.Point(event.$stageX, event.$stageY);
        var rotation = this.getAngelByUI(this._start, _end) - 45;
        this.orientationPath_png.rotation = rotation;
    };
    /**
     * 获取DirectX坐标系弧度
     */
    DirectionOperate.prototype.getAngelByUI = function (_start, _end) {
        //	var distance = egret.Point.distance(_start, _end);//两点间的距离
        var point = new egret.Point(_end.x - _start.x, _end.y - _start.y);
        if (point.x == 0 && point.y > 0) {
            //return Math.PI * 0.5*(180/Math.PI);弧度转角度   弧度**(180/Math.PI);
            return Math.PI * 0.5 * (180 / Math.PI); //弧度
        }
        else if (point.x == 0 && point.y < 0) {
            return Math.PI * 1.5 * (180 / Math.PI);
        }
        else if (point.x > 0 && point.y >= 0) {
            return Math.atan(Math.abs(point.y / point.x)) * (180 / Math.PI);
        }
        else if (point.x < 0 && point.y >= 0) {
            return (Math.atan(Math.abs(point.x / point.y)) + Math.PI * 0.5) * (180 / Math.PI);
        }
        else if (point.x > 0 && point.y < 0) {
            return Math.atan(point.y / point.x) * (180 / Math.PI); //对于Egret而言这个弧度跟OpenGL不同,大家有没有注意到？
        }
        else if (point.x < 0 && point.y < 0) {
            return (Math.atan(Math.abs(point.y / point.x)) + Math.PI) * (180 / Math.PI);
        }
        return 0;
    };
    return DirectionOperate;
}(egret.DisplayObjectContainer));
__reflect(DirectionOperate.prototype, "DirectionOperate");
