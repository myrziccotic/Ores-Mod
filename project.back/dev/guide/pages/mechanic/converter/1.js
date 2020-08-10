ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("mcm", {
		ctrl: "itemPage",
		items:[BlockID.molecularConverter, 0],
		elements:[Guide.text("Turns reconstructed matter into objects.")]
	}, {
		ctrl: "craftPage",
		title: Translation.translate("Molecular Converter"),
            recipes:[{
                grid:[["t", "s", "t"], ["r", "s", "r"], ["t", "d", "t"]],
                result:{id: BlockID.molecularConverter, data: 0},
                materials:{
                    "t":{id: ItemID.ingotLead, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "r":{id: 331, data: 0},
                    "c":{id: ItemID.densityControllerChip, data: 0},
                    "d":{id: 264, data: 0}
                }
            }]
	}, {preLink: "mech_main", nextLink: "mcg"});
});


