ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("items_main", {
		ctrl: "basic",
		elements:[
			Guide.link("Matter", "matter"),
			Guide.link("Chips", "chips"),
			Guide.link("Cores", "cores"),
			Guide.link("Nuggets", "nuggets"),
			Guide.link("Photovailtaic Cell","PhotovailtaicCell"),
			Guide.link("Nanites", "nanites"),
			Guide.link("Components of mechanical armor", "comp_main"),
			Guide.link("Mechanic Armor", "mamain")
		]
	}, {}, {
		preLink: "default"
	});
});
