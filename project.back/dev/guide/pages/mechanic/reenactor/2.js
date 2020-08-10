ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("mrg", {
		ctrl: "basic",
		elements:[
			Guide.title("Use of matter re-constructor"),
			Guide.text("To understand the mechanism, just open it and look at the panel below."),
			Guide.text("The red and yellow text indicates that the mechanism is lacking for work.")
		]
	}, {}, {
		preLink: "mrm",
        nextLink: "mech_main"
	});
});
