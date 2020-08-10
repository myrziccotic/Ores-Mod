ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("nanites", {
		ctrl: "itemPage",
		items:[
			ItemID.flaskWithNanites, 22,
			ItemID.flaskWithNanites, 23,
			ItemID.flaskWithNanites, 24,
			ItemID.flaskWithNanites, 25,
			ItemID.flaskWithNanites, 26,
			ItemID.flaskWithNanites, 27,
			ItemID.flaskWithNanites, 28
		],
		elements:[
			Guide.text("Flask With Nanites", 20, null, true),
			Guide.text("Receiving:", null, null, null, true),
			Guide.link("Nanite Collector", "ncm"),
			Guide.text("Application:", null, null, null, true),
			Guide.link("Nanite Training Node", "ntnm")
		]
	}, {
		ctrl: "itemPage",
		items:[ItemID.emptyFlask, 0],
		elements:[
			Guide.text("Empty Flask", 20, null, true),
			Guide.text("Receiving:", null, null, null, true),
			Guide.link("Craft of glass on the workbench"),
			Guide.text("Application:", null, null, null, true),
			Guide.link("Nanite Collector", "ncm")
		]
	}, {
		preLink: "items_main"
	});
});
