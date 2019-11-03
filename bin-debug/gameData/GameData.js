var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var GameData = (function () {
    function GameData() {
    }
    GameData.normalSpeed = 2;
    GameData.upSpeed = 10;
    GameData.speed = 2;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
