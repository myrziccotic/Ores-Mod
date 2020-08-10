ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("mas2", {
        ctrl: "craftPage",
        title: StringHelper.t("Sapphire mechanical armor"),
        recipes:[
            {
                grid:[["p", "p", "p"], ["m", "a", "m"], ["p", "c", "p"]],
                materials:{
                    "m":{id: ItemID.advancedMovableElements},
                    "c":{id: ItemID.advancedLocalLogicSystem},
                    "p":{id: ItemID.outerProtectivePlate},
                    "a":{id: ItemID.mechanicAdamantiteLeggings}
                },
                result:{id: ItemID.mechanicSapphireLeggings, count: 1, data: 0}
            },
            {
                grid:[["c", "a", "c"], ["s", "s", "s"], ["p", "p", "p"]],
                materials:{
                    "p":{id: ItemID.outerProtectivePlate},
                    "c":{id: ItemID.advancedLocalLogicSystem},
                    "a":{id: ItemID.mechanicAdamantiteBoots},
                    "s":{id: ItemID.crystalSapphire}
                },
                result:{id: ItemID.mechanicSapphireBoots, count: 1, data: 0}
            }
        ]
    }, {
        ctrl: "basic",
        elements:[
            Guide.text("Improved version of mechanical armor."),
            Guide.text("When creating a sapphire armor, it will pass all the modifiers that are in the Adamantite armor", null, null, true, true)
        ]
    }, {
        preLink: "mas",
        nextLink: "mamain"
    });
});