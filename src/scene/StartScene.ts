class StartScene extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initView, this);
	}

	public initView() {
		var bg = GameUtil.createBitmapByName("bg_jpg");
		this.addChild(bg);
		bg.width = this.stage.stageWidth;
		bg.height = this.stage.stageHeight;

		var btn_start = GameUtil.createText("猪猪敏");
		this.addChild(btn_start);

	}
}