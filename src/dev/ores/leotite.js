OresAPI.registerOre({
    source:{material: "leotite", sourceType: "formations"},
    ore: {
        requiredToolLvl: OresAPI.getConfigValue("leotite.tool_lvl"),
        veinSize:{
            min: OresAPI.getConfigValue("leotite.veins.size.min"),
            max: OresAPI.getConfigValue("leotite.veins.size.max")
        },
        oreDrop:[[ItemID.formationsLeotite, "2-4", 0]],
        veinsInChunk: 1,
        depthGeneration:{
            min: 1,
            max: 1
        },
        oreSpecialParams: {lightlevel: 11},
        blockSpecialParams: {
            lightlevel: 12
        },
        dimension: "GenerateNetherChunk",
        customOreGen:function(){}
    },
    translations:{
        source: {ru: "Леотитовый Слиток"},
        ore: [{ru: "Леотовая Руда"}],
        oreBlock: [{ru: "Леотитовый Блок"}]
    },
    overrideNames:{
        itemColor: 3,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});