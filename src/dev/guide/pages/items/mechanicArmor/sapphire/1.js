ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("mas", {
        ctrl: "itemPage",
        items:[
            ItemID.mechanicSapphireHelmet, 0,
            ItemID.mechanicSapphireChestplate, 0,
            ItemID.mechanicSapphireLeggings, 0,
            ItemID.mechanicSapphireBoots, 0
        ],
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Sapphire mechanical armor"),
        recipes:[
            {
                grid:[["a", "m", "a"], ["l", "c", "l"], ["o", "h", "g"]],
                materials:{
                    "a":{id: ItemID.nuggetMionite},
                    "h":{id: ItemID.mechanicAdamantiteHelmet},
                    "l":{id: ItemID.advancedOpticalLens},
                    "c":{id: ItemID.centralLogicSystem},
                    "o":{id: ItemID.outerProtectivePlate},
                    "m":{id: ItemID.advancedMatrixOfHoloSystems},
                    "g":{id: ItemID.connectingSystems},
                },
                result:{id: ItemID.mechanicSapphireHelmet, count: 1, data: 0}
            },
            {
                grid:[["c", "c", "c"], ["p", "a", "p"], ["p", "p", "p"]],
                materials:{
                    "c":{id: ItemID.advancedLocalLogicSystem},
                    "p":{id: ItemID.outerProtectivePlate},
                    "a":{id: ItemID.mechanicAdamantiteChestplate}
                },
                result:{id: ItemID.mechanicSapphireChestplate, count: 1, data: 0}
            }
        ]
    }, {
        preLink: "mamain",
        nextLink: "mas2"
    });
});