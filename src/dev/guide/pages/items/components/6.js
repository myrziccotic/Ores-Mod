ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c6", {
        ctrl: "itemPage",
        items:[ItemID.manipulationCable, 0],
        elements:[
            Guide.text("Manipulation Cable", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Manipulation Cable"),
        recipes:[{
            grid: [["t", "s", "t"], ["a", "d", "a"], ["a", "e", "a"]],
            materials:{
                "t":{id: ItemID.formationsLeotite},
                "a":{id: ItemID.ingotLavarite},
                "s":{id: ItemID.crystalSapphire},
                "d":{id: 264},
                "e":{id: 388}
            },
            result: {id: ItemID.manipulationCable}
        }],  
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c5", nextLink: "c7"});
});
