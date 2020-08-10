ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("ntng", {
		ctrl: "basic",
		elements:[
			Guide.title("Using the nanite training node"),
			Guide.text("You need to select the desired specification of nanites, and then place the flask with nanites in the left slot. The mechanism will issue a flask with trained nanites")
		]
	}, {}, {
		preLink: "ntnm",
		nextLink: "mech_main"
	});
});
