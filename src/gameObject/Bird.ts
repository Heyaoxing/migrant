class Bird extends egret.DisplayObjectContainer {
    private display: dragonBones.EgretArmatureDisplay;


    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.iniView,this);

    }

    private iniView(){
        this.display = DragonBonesUtil.createDisplay("Rooster_Ani_ske_json", "Rooster_Ani_tex_json", "Rooster_Ani_tex_png", "armatureName");
		this.addChild(this.display);
		this.display.x = this.stage.stageWidth / 2;
		this.display.y = this.stage.stageHeight / 2;
		this.display.skewY = 180; //设置skewX 为180，图片将垂直翻转180度，若设置skewY 为180，图片将水平翻转180度
		this.display.animation.play("rooster_walk_anim").timeScale = 0.3;
    }



}