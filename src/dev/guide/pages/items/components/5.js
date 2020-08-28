ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c5", {
        ctrl: "itemPage",
        items:[ItemID.matrixOfHoloSystems, 0],
        elements:[
            Guide.text("Matrix Of Holographics Systems", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Matrix Of Holographics Systems"),
        recipes:[{
            grid: [["s", "a", "s"], ["r", "g", "r"], ["s", "a", "s"]],
            materials:{
                "g":{id: 102},
                "a":{id: ItemID.ingotLavarite},
                "s":{id: ItemID.formationsLeotite},
                "d":{id: 264},
                "r":{id: 331}
            },
            result:{id: ItemID.matrixOfHoloSystems}
        }],
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c4", nextLink: "c6"});
});
