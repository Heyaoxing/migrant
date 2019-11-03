class GameScene extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initView, this);
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.upSpeed, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.normalSpeed, this);

	}

	private bg1: egret.Bitmap;
	private bg2: egret.Bitmap;
	public initView() {
		this.bg1 = GameUtil.createBitmapByName("migrant-game-bg_jpg");
		this.addChild(this.bg1);
		this.bg1.width = this.stage.stageWidth;
		this.bg1.height = this.stage.stageHeight;

		this.bg2 = GameUtil.createBitmapByName("migrant-game-bg_jpg");
		this.addChild(this.bg2);
		this.bg2.width = this.stage.stageWidth;
		this.bg2.height = this.stage.stageHeight;

		this.bg2.x = this.bg1.width;

		this.start();

	}

	public upSpeed() {
		console.log("upSpeed");
		GameData.speed = GameData.upSpeed;
	}


	public normalSpeed() {
		console.log("normalSpeed");
		GameData.speed = GameData.normalSpeed;
	}

	public start() {
		egret.ticker.$startTick(this.update, this);
	}

	public stop() {
		egret.ticker.$stopTick(this.update, this);
	}


	public update(timeStamp: number): boolean {
		if (this.bg1.x + this.bg1.width <= 0) {
			this.bg1.x = this.bg2.width + this.bg2.x;
		}

		if (this.bg2.x + this.bg2.width <= 0) {
			this.bg2.x = this.bg1.width + this.bg1.x;
		}


		this.bg1.x -= GameData.speed;
		this.bg2.x -= GameData.speed;
		return true;
	}
}