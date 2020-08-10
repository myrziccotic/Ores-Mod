ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("sapphire", {
		ctrl: "itemPage",
		items:[ItemID.crystalSapphire, 0, BlockID.oreSapphire, 0, BlockID.blockSapphire, 0],
		elements: StringHelper.navigator("ores_main")
	}, {
		ctrl: "basic",
		elements: StringHelper.oreDesc("the most effective material", "rate")
	}, {preLink: "malachite", nextLink: "uranium"});
});
