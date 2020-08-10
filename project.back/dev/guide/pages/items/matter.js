ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("matter", {
		ctrl: "itemPage",
		items:[ItemID.Oresmatter, 0],
		elements:[
			Guide.text("Matter", 20, null, true),
			Guide.text("Receiving:", null, null, null, true),
			Guide.link("Molecular Sealer", "msm")
		]
	}, {
		ctrl: "itemPage",
		items:[ItemID.rebuiltMatter, 0],
		elements:[
			Guide.text("Rebuilt Matter", 20, null, true),
			Guide.text("Receiving:", null, null, null, true),
			Guide.link("Matter Reenactor", "mrm"),
			Guide.text("Application:", null, null, null, true),
			Guide.link("Molecular Converter", "mcm")
		]
	}, {
		preLink: "items_main"
	});
});
