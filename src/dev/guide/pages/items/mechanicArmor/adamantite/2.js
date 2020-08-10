ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("maa2", {
        ctrl: "craftPage",
        title: StringHelper.t("Adamantite mechanical armor"),
        recipes:[
            {
                grid:[["m", "c", "m"], ["o", "t", "o"], ["l", "s", "o"]],
                materials:{
                    "m":{id: ItemID.movableElements},
                    "c":{id: ItemID.connectingSystems},
                    "o":{id: ItemID.outerProtectivePlate},
                    "t":{id: ItemID.thermoadaptationCoating},
                    "l":{id: ItemID.localLogicSystem},
                    "s":{id: ItemID.manipulationCable}
                },
                result:{id: ItemID.mechanicAdamantiteLeggings, count: 1, data: 0}
            },
            {
                grid:[["o", "c", "o"], ["t", "l", "o"], ["o", "t", "o"]],
                materials:{
                    "o":{id: ItemID.outerProtectivePlate},
                    "c":{id: ItemID.connectingSystems},
                    "t":{id: ItemID.thermoadaptationCoating},
                    "l":{id: ItemID.localLogicSystem}
                },
                result:{id: ItemID.mechanicAdamantiteBoots, count: 1, data: 0}
            }
        ]
    }, {
        ctrl: "basic",
        elements:[
            Guide.text("By itself, this armor has nothing special."),
            Guide.text("This armor can be embedded with nanites on the armor implantation table."),
            Guide.text("Embedding nanites will give you the property that the selected type of nanites is designed for when training in the nanite learning node"),
            Guide.link("Armor Implantation Table", "aitm"),
            Guide.link("Nanite Training Node", "ntnm"),
            Guide.link("Nanite Collector", "ncm"),
            Guide.link("Nanites", "nanites"),
            Guide.link("Armor modifications", "desc_main")
        ]
    }, {
        preLink: "maa",
        nextLink: "mamain"
    });
});