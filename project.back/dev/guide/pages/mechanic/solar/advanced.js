ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("advanced", {
        ctrl: "itemPage",
            items:[BlockID.solarPanelAdvanced, 0],
            elements:[
                Guide.solar("advanced")
            ]
        }, {
        ctrl: "craftPage",
        title: StringHelper.t("Advanced Solar Panel"),
            recipes:[{
                grid:[
                    ["r", "l", "r"],
                    ["c", "p", "c"],
                    ["s", "s", "s"]
                ],
                materials:{
                    "p":{id: BlockID.solarPanelAdvanced, data: 0},
                    "c":{id: ItemID.solarCoreAdvanced, data: 0},
                    "l":{id: ItemID.cellPhotovailtaic, data: 0},
                    "r":{id: 266, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0}
                },
                result:{id: BlockID.solarPanelAdvanced, data: 0}
            }],
            elements: StringHelper.navigator("solar_main")
    }, {
		preLink: "resonant",
		nextLink: "ultimate"
	});
});
