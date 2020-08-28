ModAPI.addAPICallback("GuideAPI", function(){ 
    Guide.addPage("redstone", {
        ctrl: "itemPage",
        items:[BlockID.solarPanelRedstone, 0],
        elements: [Guide.solar("redstone")]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Redstone Solar Panel"),
        recipes:[{
            grid:[
                ["p", "l", "p"],
                ["c", "b", "c"],
                ["n", "n", "n"]
            ],
            materials:{
                "p":{id: BlockID.solarPanelHardent, data: 0},
                "c":{id: ItemID.solarCoreRedstone, data: 0},
                "l":{id: ItemID.cellPhotovailtaic, data: 0},
                "n":{id: ItemID.nuggetLead, data: 0},
                "b":{id: 266, data: 0}
            },
            result:{id: BlockID.solarPanelRedstone, data: 0}
        }],
        elements: StringHelper.navigator("solar_main")
    }, {
		preLink: "hardent",
		nextLink: "resonant"
	});
});
