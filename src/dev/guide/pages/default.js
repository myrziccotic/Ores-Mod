ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("default", {
		ctrl: "itemPage",
		items: [ItemID.crystalSapphire, 0],
		elements:[Guide.text("All about Ores Mod", 30, UIColor.CYAN)]
	}, {
		ctrl: "basic",
		elements:[
			Guide.link("About ores", "ores_main"),
			Guide.link("About mechanical blocks", "mech_main"),
			Guide.link("About other items", "items_main"),
			Guide.link("Armor modifications", "desc_main")
		]
	});
});
