ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c13", {
        ctrl: "itemPage",
        items:[ItemID.advancedMovableElements, 0],
        elements:[
            Guide.text("Advanced Movable Elements", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Advanced Movable Elements"),
        recipes:[{
            grid: [["s", "d", "s"], ["d", "c", "d"], ["s", "d", "s"]],
            materials:{
                "o":{id: 49},
                "d":{id: 264},
                "c":{id: ItemID.movableElements},
                "s":{id: ItemID.crystalSapphire},
            },
            result: {id: ItemID.advancedMovableElements}
        }],  
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c12", nextLink: "c14"});
});
