var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneController = (function () {
    function SceneController() {
        this.startScene = new StartScene();
    }
    Object.defineProperty(SceneController, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    SceneController.prototype.setContainer = function (s) {
        this.container = s;
    };
    SceneController.prototype.start = function () {
        this.container.addChild(this.startScene);
    };
    return SceneController;
}());
__reflect(SceneController.prototype, "SceneController");
//# sourceMappingURL=SceneController.js.map