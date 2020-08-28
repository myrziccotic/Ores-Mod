ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("hardent", {
        ctrl: "itemPage",
        items:[BlockID.solarPanelHardent, 0],
        elements:[
            Guide.solar("hardent")
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Hardent Solar Panel"),
            recipes:[{
                grid:[
                    ["p", "l", "p"],
                    ["c", "r", "c"],
                    ["n", "r", "n"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelLeadstone, data: 0},
                    "c":{id: ItemID.solarCoreHardent, data: 0},
                    "r":{id: ItemID.ingotLead, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "n":{id: ItemID.nuggetLead, data: 0}
                },
                result:{id: BlockID.solarPanelHardent, data: 0}
            }],
            elements: StringHelper.navigator("solar_main")
    }, {
		preLink: "leadstone",
		nextLink: "redstone"
	});
});
