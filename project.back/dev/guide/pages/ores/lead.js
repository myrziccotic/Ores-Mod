ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("lead", {
		ctrl: "itemPage",
		items:[ItemID.ingotLead, 0, BlockID.oreLead, 0, BlockID.blockLead, 0],
		elements: StringHelper.navigator("ores_main")
	}, {
		ctrl: "basic",
		elements: StringHelper.oreDesc("not rare", "no strengths", UIColor.parseColor("#191970"))
	}, {preLink: "adamantite", nextLink: "malachite"});
});
