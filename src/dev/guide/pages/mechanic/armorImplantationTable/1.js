ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("aitm", {
        ctrl: "itemPage",
        items:[BlockID.armorImplantationTable, 0],
        elements:[
            Guide.text("The same mechanism that will modify your mechanical armor")
        ]
    }, {
         ctrl: "craftPage",
         title: StringHelper.t("Armor Implantation Table"),
            recipes:[{
                grid:[["s", "t", "s"], ["d", "r", "d"], ["s", "t", "s"]],
                materials:{
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "d":{id: 264, data: 0},
                    "t":{id: ItemID.ingotLead, data: 0},
                    "r":{id: 331, data: 0}
                },
                result: {id: BlockID.armorImplantationTable, data: 0}
            }]
    }, {
        preLink: "mech_main",
        nextLink: "aitg"
    });
});