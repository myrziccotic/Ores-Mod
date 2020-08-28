ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c8", {
        ctrl: "itemPage",
        items:[ItemID.outerProtectivePlate, 0],
        elements:[
            Guide.text("Outer Protective Plate", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Outer Protective Plate"),
        recipes:[{
            grid: [["a", "a", "a"], ["d", "i", "d"], ["a", "a", "a"]],
            materials:{
                "a":{id: ItemID.ingotLavarite},
                "d":{id: ItemID.formationsLeotite},
                "i":{id: 42}
            },
            result: {id: ItemID.outerProtectivePlate}
        }],  
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c7", nextLink: "c9"});
});
