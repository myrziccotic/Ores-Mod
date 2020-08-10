ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c3", {
        ctrl: "itemPage",
        items:[ItemID.centralLogicSystem, 0],
        elements:[
            Guide.text("Central Logic System", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Central Logic System"),
        recipes:[{
            grid: [["a", "s", "a"], ["d", "l", "d"], ["a", "s", "a"]],
            materials:{
                "a":{id: BlockID.blockAdamantite},
                "s":{id: BlockID.blockSapphire},
                "l":{id: ItemID.localLogicSystem},
                "d":{id: 57}
            },
            result: {id: ItemID.centralLogicSystem}, 
        }],
        elements: StringHelper.navigator("comp_main")
        }, {preLink: "c2", nextLink: "c4"});
});
