ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c7", {
        ctrl: "itemPage",
        items:[ItemID.thermoadaptationCoating, 0],
        elements:[
            Guide.text("Thermoadaptation Coating", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Thermoadaptation Coating"),
        recipes:[{
            grid: [["a", "d", "a"], ["s", "d", "s"], ["a", "d", "a"]],
            materials:{
                "a":{id: ItemID.ingotAdamantite},
                "s":{id: ItemID.crystalSapphire},
                "d":{id: ItemID.ingotLavarite},
            },
            result: {id: ItemID.thermoadaptationCoating}
        }],
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c6", nextLink: "c8"});
});
