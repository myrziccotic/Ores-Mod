ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("ncm", {
		ctrl: "itemPage",
		items:[BlockID.naniteCollector, 0],
		elements: [
			Guide.text("Father of mechanical micro-organisms")
		]
	}, {
		ctrl: "craftPage",
		title: StringHelper.t("Nanite Collector"),
		recipes:[{
			grid:[["b", "d", "b"], ["s", "c", "s"], ["b", "r", "b"]],
			materials:{
				"r":{id: 331},
				"c":{id: ItemID.splitterChip},
				"s":{id: ItemID.crystalSapphire},
				"d":{id: ItemID.densityControllerChip},
				"b":{id: ItemID.ingotLead}
			},
			result:{id: BlockID.naniteCollector, count: 1, data: 0}
		}]
	}, {
		preLink: "mech_main",
		nextLink: "ncg"
	});
});

