ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("adamantite", {
		ctrl: "itemPage",
		items: [ItemID.ingotAdamantite, 0, BlockID.oreAdamantite, 0, BlockID.blockAdamantite, 0],
		elements: StringHelper.navigator("ores_main")
	}, {
		ctrl: "basic",
		elements: StringHelper.oreDesc("strength", "low speed", UIColor.parseColor("#191970"))
	}, {preLink: "ores_main", nextLink: "lead"});
});
