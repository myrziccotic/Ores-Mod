ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c9", {
        ctrl: "itemPage",
        items:[ItemID.advancedConnectingSystems, 0],
        elements:[
            Guide.text("Advanced Connecting Systems", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Advanced Connecting Systems"),
        recipes:[{
            grid: [["s", "s", "s"], ["d", "c", "d"], ["s", "s", "s"]],
            materials:{
                "d":{id: 264},
                "s":{id: ItemID.crystalSapphire},
                "c":{id: ItemID.connectingSystems},
            },
            result: {id: ItemID.advancedConnectingSystems}
        }],  
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c8", nextLink: "c10"});
});
