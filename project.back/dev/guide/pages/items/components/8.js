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
            grid: [["x", "i", "x"], ["i", "r", "i"], ["x", "i", "x"]],
            materials:{
                "i":{id: 265},
                "r":{id: 331},
            },
            result: {id: ItemID.outerProtectivePlate}
        }],  
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c7", nextLink: "c9"});
});
