ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("leotite", {
		ctrl: "itemPage",
		items:[ItemID.formationsLeotite, 0, BlockID.oreLeotite, 0, BlockID.blockLeotite, 0],
		elements: StringHelper.navigator("ores_main")
	}, {
		ctrl: "basic",
		elements: [
            Guide.text("A strange mutation of the glowing stone, found in the lower world.")
        ]
	}, {preLink: "lavarite", nextLink: "mionite"});
});