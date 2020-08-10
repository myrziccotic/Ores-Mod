ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("desc_main", {
		ctrl: "basic",
		elements:[
			Guide.text("All existing modifications of mechanical armor are listed below. They are needed to improve it", null, null, true),
			Guide.link("Builder", "imp1"),
			Guide.link("Power", "imp2"),
			Guide.link("Refractoriness", "imp3"),
			Guide.link("Protection from damage", "imp4"),
			Guide.link("Power panel", "imp5"),
			Guide.link("Night vision", "imp6"),
			Guide.link("Reinforced hull", "imp7"),
			Guide.link("Defense module", "imp8"),
			Guide.link("The speed of digging", "imp9"),
			Guide.link("Acceleration", "imp10"),
			Guide.link("Compressed Cargo Space", "imp11"),
			Guide.link("Submariner", "imp12"),
			Guide.link("Integrated jetpack", "imp13")
		]
	}, {
		ctrl: "basic",
		elements:[
			Guide.link("Anti-gravity field generator", "imp14")
		]
	}, {
		preLink: "default",
		nextLink: "imp1"
	});
});
