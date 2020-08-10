ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c11", {
        ctrl: "itemPage",
        items:[ItemID.advancedLocalLogicSystem, 0],
        elements:[
            Guide.text("Advanced Local Logic System", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Advanced Local Logic System"),
        recipes:[{
            grid: [["s", "r", "s"], ["d", "c", "d"], ["s", "r", "s"]],
            materials:{
                "r":{id: 152},
                "d":{id: 57},
                "s":{id: BlockID.blockSapphire},
                "g":{id: ItemID.opticalLens},
                "d":{id: ItemID.localLogicSystem},
            },
            result: {id: ItemID.advancedLocalLogicSystem}
        }],  
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c10", nextLink: "c12"});
});
