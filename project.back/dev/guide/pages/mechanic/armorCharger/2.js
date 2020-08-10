ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("macg", {
		ctrl: "basic",
		elements:[Guide.text("Well there's nothing to explain ｡ ◕ ‿ ◕ ｡")]
	}, {}, {
		preLink: "mac",
		nextLink: "mech_main"
	});
});
