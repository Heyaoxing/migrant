class SceneController {
	private container: egret.DisplayObjectContainer;
	private startScene: StartScene;
	public constructor() {
		this.startScene = new StartScene();
	}

	private static _instance: SceneController;
	public static get Instance() {
		return this._instance || (this._instance = new this());
	}

	public setContainer(s: egret.DisplayObjectContainer) {
		this.container = s;
	}

    public  start(){
		this.container.addChild(this.startScene);
	}
}
