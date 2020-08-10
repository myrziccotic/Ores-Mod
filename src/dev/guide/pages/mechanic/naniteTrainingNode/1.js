ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("ntnm", {
		ctrl: "itemPage",
		items:[BlockID.naniteTrainingNode, 0],
		elements:[
			Guide.text("Nanites also need to learn")
		]
	}, {
		ctrl: "craftPage",
		title: StringHelper.t("Nanite Training Node"),
		recipes:[{
			grid:[["b", "s", "b"], ["r", "d", "r"], ["b", "c", "b"]],
			materials:{
				"d":{id: ItemID.quantomDetectorChip},
				"b":{id: ItemID.ingotLead},
				"r":{id: 331},
				"c":{id: ItemID.matteryDrive},
				"s":{id: ItemID.crystalSapphire}
			},
			result:{id: BlockID.naniteTrainingNode, count: 1, data: 0}
		}]
	}, {
		preLink: "mech_main",
		nextLink: "ntng"
	});
});
