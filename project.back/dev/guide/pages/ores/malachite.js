ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("malachite", {
		ctrl: "itemPage",
		items:[ItemID.ingotMalachite, 0, BlockID.oreMalachite, 0, BlockID.blockMalachite, 0],
		elements: StringHelper.navigator("ores_main")
	}, {
		ctrl: "basic",
		elements: StringHelper.oreDesc("very fast", "not durable")
	}, {preLink: "lead", nextLink: "sapphire"});
});
