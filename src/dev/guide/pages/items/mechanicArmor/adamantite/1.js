ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("maa", {
        ctrl: "itemPage",
        items:[
            ItemID.mechanicAdamantiteHelmet, 0,
            ItemID.mechanicAdamantiteChestplate, 0,
            ItemID.mechanicAdamantiteLeggings, 0,
            ItemID.mechanicAdamantiteBoots, 0
        ],
    }, {
        ctrl: "craftPage",
        title: StringHelper.t("Adamantite mechanical armor"),
        recipes:[
            {
                grid:[["a", "h", "a"], ["l", "c", "l"], ["o", "m", "g"]],
                materials:{
                    "a":{id: ItemID.ingotAdamantite},
                    "h":{id: ItemID.matrixOfHoloSystems},
                    "l":{id: ItemID.opticalLens},
                    "c":{id: ItemID.centralLogicSystem},
                    "o":{id: ItemID.outerProtectivePlate},
                    "m":{id: ItemID.manipulationCable},
                    "g":{id: ItemID.connectingSystems},
                },
                result:{id: ItemID.mechanicAdamantiteHelmet, count: 1, data: 0}
            },
            {
                grid:[["o", "c", "o"], ["t", "o", "t"], ["s", "o", "l"]],
                materials:{
                    "o":{id: ItemID.outerProtectivePlate},
                    "c":{id: ItemID.connectingSystems},
                    "t":{id: ItemID.thermoadaptationCoating},
                    "s":{id: ItemID.manipulationCable},
                    "l":{id: ItemID.localLogicSystem}
                },
                result:{id: ItemID.mechanicAdamantiteChestplate, count: 1, data: 0}
            }
        ]
    }, {
        preLink: "mamain",
        nextLink: "maa2"
    });
});