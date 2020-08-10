ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("msm", {
		ctrl: "itemPage",
		items:[BlockID.molecularSealant, 0],
		elements:[
			Guide.text("Molecular compactor compresses QE energy, turning it into matter.")
		]
	}, {
		ctrl: "craftPage",
		title: StringHelper.t("Molecular Sealer"),
            recipes:[{
                grid:[["t", "s", "t"], ["r", "d", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: ItemID.ingotLead, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "r":{id: 331, data: 0},
                    "d":{id: ItemID.quantomDetectorChip, data: 0}
                },
                result:{id: BlockID.molecularSealant, data: 0}
            }]
	}, {
		preLink: "mech_main",
        nextLink: "msg"
	});
});
