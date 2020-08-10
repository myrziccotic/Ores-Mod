ModAPI.addAPICallback("GuideAPI", function(){ 
    Guide.addPage("wim", {
        ctrl: "itemPage",
        items:[BlockID.woodIncubator, 0],
        elements:[
            Guide.text("This mechanism will grow the tree anywhere.")
        ]
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Wood Incubator"),
        recipes:[{
            result:{id: BlockID.woodIncubator, data: 0},
            grid:[
                ["t", "d", "t"],["r", "g", "r"],["t", "t", "t"]
            ],
            materials:{
                "t":{id: ItemID.ingotLead},
                "d":{id: 3, data: 0},
                "g":{id: 266, data: 0},
                "r":{id: 331, data: 0}
            }
        }],
    }, {
         preLink: "mech_main",
         nextLink: "wig"
    });
});
