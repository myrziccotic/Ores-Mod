var implantations = {};

function Implantation(categories, maxLvl, color, itemColor, name, consumption){
    if(!Array.isArray(categories)&&typeof categories != "string") categories = [categories];
    this.categories = categories;
    this.maxLvl = maxLvl;
    this.color = color;
    this.itemColor = itemColor;
    this.name = name;
    this.key = Object.keys(implantations).length+1;
	this.consumption = consumption;
}

Callback.addCallback("PostLoaded", function(){
    implantations.builders = new Implantation("all", 1, UIColor.WHITE, 7, StringHelper.t("Builder"), 0);
    implantations.power = new Implantation(1, 2, UIColor.RED, 4, StringHelper.t("Power"), 6000);
    implantations.fireResist = new Implantation(1, 1, UIColor.parseColor("#DC143C"), "c", StringHelper.t("Refractoriness"));
    implantations.damageProtection = new Implantation(1, 3, UIColor.parseColor("#800080"), 5, StringHelper.t("Protection from damage"));
    implantations.shield = new Implantation(1, 5, UIColor.RED, "a", StringHelper.t("Power panel"));
    implantations.nightVision = new Implantation(0, 1, UIColor.BLUE, 1, StringHelper.t("Night vision"));
    implantations.protection = new Implantation(1, 6, UIColor.parseColor("#D3D3D3"), 7, StringHelper.t("Reinforced hull"));
    implantations.programPROTECTER = new Implantation(0, 3, UIColor.parseColor("#FFD700"), 3, StringHelper.t("Defense module"));
    implantations.diggingSpeed = new Implantation(1, 6, UIColor.parseColor("#A9A9A9"), 8, StringHelper.t("The speed of digging"));
    implantations.acceleration = new Implantation(2, 1, UIColor.WHITE, 7, StringHelper.t("Acceleration"));
    implantations.compressedCargoSpace = new Implantation(1, 5, UIColor.parseColor("#48D1CC"), "a", StringHelper.t("Compressed Cargo Space"));
    implantations.diver = new Implantation(0, 1, UIColor.parseColor("#191970"), "9", StringHelper.t("Submariner"));
    if(IndustrialCraftIsExist){
        implantations.integratedJetpack = new Implantation(1, 1, UIColor.GREEN, 7, StringHelper.t("Integrated jetpack"));
        //implantations.integratedChargeDevice = new Implantation(2, 4, UIColor.WHITE, "e", "Интегрированное зарядное устройство");
    }
    implantations.antigravitation = new Implantation(3, 1, UIColor.RED, 5, StringHelper.t("Anti-gravity field generator"));
});

Callback.addCallback("NativeCommand", function(str){
    if(str == "/caed"){
        armorExtraData.data = [];
    }
});
