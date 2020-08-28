ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c4", {
        ctrl: "itemPage",
        items:[ItemID.localLogicSystem, 0],
        elements:[
            Guide.text("Local Logic System", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Local Logic System"),
        recipes:[{
            grid: [["t", "a", "t"], ["s", "r", "s"], ["t", "d", "t"]],
            materials:{
                "t":{id: ItemID.ingotLavarite},
                "a":{id: ItemID.formationsLeotite},
                "s":{id: ItemID.crystalSapphire},
                "d":{id: 264},
                "r":{id: 331}
            },
            result: {id: ItemID.localLogicSystem}
        }],
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c3", nextLink: "c5"});
});
