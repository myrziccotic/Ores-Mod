ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("lavarite", {
		ctrl: "itemPage",
		items:[ItemID.ingotLavarite, 0, BlockID.oreLavarite, 0, BlockID.blockLavarite, 0],
		elements: StringHelper.navigator("ores_main")
	}, {
		ctrl: "basic",
		elements:[
            Guide.text("It is found in the lower world in magma.")
        ]
	}, {preLink: "uranium", nextLink: "leotite"});
});