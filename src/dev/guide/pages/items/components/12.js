ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("c12", {
        ctrl: "itemPage",
        items:[ItemID.advancedMatrixOfHoloSystems, 0],
        elements:[
            Guide.text("Advanced Local Logic System", 20, null, null, true)
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Advanced Local Logic System"),
        recipes:[{
            grid: [["o", "s", "o"], ["o", "c", "o"], ["o", "s", "o"]],
            materials:{
                "o":{id: 49},
                "c":{id: ItemID.matrixOfHoloSystems},
                "s":{id: ItemID.nuggetMionite},
            },
            result: {id: ItemID.advancedMatrixOfHoloSystems}
        }],  
        elements: StringHelper.navigator("comp_main")
    }, {preLink: "c11", nextLink: "c13"});
});
