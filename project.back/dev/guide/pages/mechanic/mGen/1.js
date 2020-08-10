ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("mgm", {
		ctrl: "itemPage",
		items:[BlockID.molecularGenerator, 0],
		elements:[
			Guide.text("Generator, for generating a new type of energy QE (Quantum Energy)")
		]
	}, {
		ctrl: "craftPage",
		recipes:[{
                result:{id: BlockID.molecularGenerator, data: 0},
                grid:[["t", "d", "t"], ["r", "c", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: ItemID.ingotLead, data: 0},
                    "d":{id: ItemID.matteryDrive, data: 0},
                    "r":{id: 331, data: 0},
                    "s":{id: ItemID.splitterChip, data: 0},
                    "c":{id: ItemID.crystalSapphire, data: 0}
                }
            }],
            title: Translation.translate("Molecular Generator")
	}, {
		preLink: "mech_main",
        nextLink: "mgg"
	});
});
