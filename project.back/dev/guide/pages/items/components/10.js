ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c10", {
        ctrl: "itemPage",
        items:[ItemID.advancedOpticalLens, 0],
        elements:[
            Guide.text("Advanced Optical Lens", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Advanced Optical Lens"),
        recipes:[{
            grid: [["r", "s", "r"], ["s", "g", "s"], ["r", "s", "r"]],
            materials:{
                "r":{id: 331},
                "s":{id: ItemID.crystalSapphire},
                "g":{id: ItemID.opticalLens},
            },
            result: {id: ItemID.advancedOpticalLens}
        }],  
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c9", nextLink: "c11"});
});
