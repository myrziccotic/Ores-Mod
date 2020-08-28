OresAPI.registerOre({
    source:{material: "lavarite"},
    ore: {
        requiredToolLvl: OresAPI.getConfigValue("lavarite.tool_lvl"),
        veinSize:{
            min: OresAPI.getConfigValue("lavarite.veins.size.min"),
            max: OresAPI.getConfigValue("lavarite.veins.size.max")
        },
        veinsInChunk: OresAPI.getConfigValue("lavarite.veins.amount_in_chunk"),
        depthGeneration:{
            min: OresAPI.getConfigValue("lavarite.depth_ore_generation.min"),
            max: OresAPI.getConfigValue("lavarite.depth_ore_generation.max")
        },
        dimension: "GenerateNetherChunk",
        oreSpecialParams:{
            lightlevel: 11
        },
        blockSpecialParams:{
            lightlevel: 13
        },
        customOreGen:function(){}
    },
    translations:{
        source: {ru: "Лаваритовый Слиток"},
        ore: [{ru: "Лаваритовая Руда"}],
        oreBlock: [{ru: "Лаваритовый Блок"}]
    },
    overrideNames:{
        itemColor: "c",
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

//генерация лаварита и леотита
Callback.addCallback("GenerateNetherChunk", function(cx, cz){
    let maxIterationsCount = 200
    for(var i = 0; i < maxIterationsCount; i++){

        let coords = GenerationUtils.randomCoords(cx, cz, 72, 128);
        OreGenerationHelper.findAllAndPlace(coords.x, coords.y, coords.z, BlockID.oreLeotite, 89, "leotite");

        coords = GenerationUtils.randomCoords(cx, cz, 35, 20);
        OreGenerationHelper.findAllAndPlace(coords.x, coords.y, coords.z, BlockID.oreLavarite, 213, "lavarite");
    }
});