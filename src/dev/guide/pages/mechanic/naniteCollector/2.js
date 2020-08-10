ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("ncg", {
		ctrl: "basic",
		elements:[
			Guide.title("Using the nanite collector"),
			Guide.text("There are three slots in the mechanism next to each other"),
			Guide.text("The left slot is intended for iron ingots"),
			Guide.text("Central for empty flasks"),
			Guide.text("Right for red dust"),
			Guide.text("The mechanism needs two types of energy to start producing nanites", null, UIColor.RED, null, true),
			Guide.text("Once production is complete you will receive one nanite capsule")
		]
	}, {}, {
		preLink: "ncm",
		nextLink: "mech_main"
	});
});
