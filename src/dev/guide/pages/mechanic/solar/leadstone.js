ModAPI.addAPICallback("GuideAPI", function(){ 
	Guide.addPage("leadstone", {
		ctrl: "itemPage",
        items:[BlockID.solarPanelLeadstone, 0],
        elements:[Guide.solar("leadstone")]
	}, {
		ctrl: "craftPage",
        title: StringHelper.t("Leadstone Solar Panel"),
        recipes:[{
            grid:[
                ["l", "l", "l"],
                ["r", "c", "r"],
                ["n", "n", "n"]
            ],
            materials:{
                "l":{id: ItemID.cellPhotovailtaic, data: 0},
                "r":{id: 266, data: 0},
                "c":{id: ItemID.solarCoreHardent, data: 0},
                "n":{id: ItemID.ingotLead, data: 0}
            },
            result:{id: BlockID.solarPanelLeadstone, data: 0},
        }],
        elements: StringHelper.navigator("solar_main")
	}, {
        nextLink: "hardent"
	});
});











