ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("uranium", {
		ctrl: "itemPage",
		items:[ItemID.ingotUranium, 0, BlockID.oreUranium, 0, BlockID.blockUranium, 0],
		elements: StringHelper.navigator("ores_main")
	}, {
		ctrl: "basic",
		elements: StringHelper.oreDesc("effective, has the highest damage", "rarely comes across")
	}, {preLink: "sapphire"});
});
