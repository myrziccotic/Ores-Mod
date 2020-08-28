ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c1", {
        ctrl: "itemPage",
        items:[ItemID.connectingSystems, 0],
        elements:[
            Guide.text("Connecting Systems", 20, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Connecting Systems"),
        recipes:[{
            grid: [["i", "a", "i"], ["i", "r", "i"], ["i", "a", "i"]],
            materials: {
                "a": {id: ItemID.ingotLavarite},
                "i": {id: ItemID.ingotLead},
                "r": {id: 331}
            },
            result: {id: ItemID.connectingSystems},
        }],
        elements: StringHelper.navigator("comp_main")
    }, {
        preLink: "comp_main",
        nextLink: "c2"
    });
});
