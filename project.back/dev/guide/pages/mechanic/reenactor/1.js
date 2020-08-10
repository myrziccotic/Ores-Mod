ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("mrm", {
		ctrl: "itemPage",
		items:[BlockID.matterReenactor, 0],
		elements:[
			Guide.text("He accepts ordinary matter and any object, the data of which he will transmit to matter and will issue reconstructed matter.")
		]
	}, {
		ctrl: "craftPage",
		recipes:[{
                grid:[["t", "d", "t"], ["r", "c", "r"], ["t", "s", "t"]],
                materials:{
                    "t":{id: ItemID.ingotLead, data: 0},
                    "d":{id: ItemID.quantomDetectorChip, data: 0},
                    "r":{id: 331, data: 0},
                    "c":{id: ItemID.splitterChip, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0}
                },
                result:{id: BlockID.matterReenactor, data: 0}
            }],
            title: StringHelper.t("Matter Reenactor")
	}, {
		preLink: "mech_main",
        nextLink: "mrg"
	});
});
