ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("mionite", {
		ctrl: "itemPage",
		items:[ItemID.nuggetMionite, 0, BlockID.oreLeotite, 0, BlockID.blockLeotite, 0],
		elements: StringHelper.navigator("ores_main")
	}, {
		ctrl: "basic",
		elements: [
            Guide.text("You need to search where the edge stone is located")
        ]
	}, {preLink: "leotite"});
});