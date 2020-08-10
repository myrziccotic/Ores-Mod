ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c2", {
        ctrl: "itemPage",
        items:[ItemID.opticalLens, 0],
        elements:[
            Guide.text("Optical Lens", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Optical Lens"),
        recipes:[{
            grid: [["r", "a", "r"], ["a", "g", "a"], ["r", "a", "r"]],
            materials:{
                "a":{id: ItemID.ingotAdamantite},
                "r":{id: 331},
                "g":{id: 102}
            },
            result: {id: ItemID.opticalLens},   
        }],
        elements: StringHelper.navigator("comp_main")
        }, {preLink: "c1", nextLink: "c3"});
});
