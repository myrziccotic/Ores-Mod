ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("ultimate", {
        ctrl: "itemPage",
        items:[BlockID.solarPanelUltimate, 0],
        elements:[Guide.solar("ultimate")]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Ultimate Solar Panel"),
        recipes:[{
            grid:[
                ["p", "l", "p"],
                ["c", "r", "c"],
                ["n", "c", "n"]
            ],
            materials:{
                "l":{id: ItemID.cellPhotovailtaic, data: 0},
                "r":{id: ItemID.nuggetMistery, data: 0},
                "c":{id: ItemID.solarCoreUltimate, data: 0},
                "p":{id: BlockID.solarPanelAdvanced, data: 0},
                "n":{id: ItemID.nuggetMionite, data: 0}
            },
            result:{id: BlockID.solarPanelUltimate, data: 0},
        }], 
        elements: StringHelper.navigator("solar_main")
    }, {
		preLink: "advanced"
	});
});
