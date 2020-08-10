ModAPI.addAPICallback("GuideAPI", function(){ 
    Guide.addPage("resonant", {
        ctrl: "itemPage",
        items:[BlockID.solarPanelResonant, 0],
        elements:[Guide.solar("resonant")]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Resonant Solar Panel"),
        recipes:[{
            grid:[
                ["r", "l", "r"],
                ["c", "p", "c"],
                ["r", "r", "r"]
            ],
            materials:{
                "p":{id: BlockID.solarPanelRedstone, data: 0},
                "c":{id: ItemID.solarCoreResonant, data: 0},
                "l":{id: ItemID.cellPhotovailtaic, data: 0},
                "r":{id: 351, data: 4}
            },
            result:{id: BlockID.solarPanelResonant, data: 0}
        }],
        elements: StringHelper.navigator("solar_main")
    }, {
		preLink: "redstone",
		nextLink: "advanced"
	});
});
