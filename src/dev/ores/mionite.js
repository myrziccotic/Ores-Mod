OresAPI.registerOre({
    source:{material: "mionite", sourceType: "nugget"},
    ore: {
        requiredToolLvl: OresAPI.getConfigValue("mionite.tool_lvl"),
        veinSize:{
            min: OresAPI.getConfigValue("mionite.veins.size.min"),
            max: OresAPI.getConfigValue("mionite.veins.size.max")
        },
        oreDrop:[[ItemID.nuggetMionite, 1, 0]],
        veinsInChunk: 1,
        depthGeneration:{
            min: 1,
            max: 1
        },
        oreSpecialParams: {lightlevel: 11},
        blockSpecialParams: {
            lightlevel: 12
        },
        dimension: "GenerateEndChunk",
        customOreGen:function(){}
    },
	oreDrop:[[ItemID.nuggetMionite, "1-2", 0]],
    translations:{
        source: {ru: "Самородок мионита"},
        ore: [{ru: "Мионитовая руда"}],
        oreBlock: [{ru: "Мионитовый блок"}]
    },
    overrideNames:{
        itemColor: 5,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    },
    dimension: "GenerateEndChunk",
    customOreGen:function(cx, cz){
        for(var i = 0; i < OresAPI.getConfigValue("mionite.veins.amount_in_chunk"); i++){
            var coords = GenerationUtils.randomCoords(cx, cz, 18, 70);
            var count = random(
                OresAPI.getConfigValue("mionite.veins.size.min"),
                OresAPI.getConfigValue("mionite.veins.size.max")
            );
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, BlockID.oreMionite, 0, count, true, [121]);
            alert("сетнул");
        }
    }
});

Callback.addCallback("GenerateEndChunk", function(cx, cz){
    for(var i = 0; i < OresAPI.getConfigValue("mionite.veins.amount_in_chunk"); i++){
        var coords = GenerationUtils.randomCoords(cx, cz, 18, 70);
        var count = random(
            OresAPI.getConfigValue("mionite.veins.size.min"),
            OresAPI.getConfigValue("mionite.veins.size.max")
        );
        GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, BlockID.oreMionite, 0, count, true, [121]);
    }
});

ItemAnimator.registerItemAnimation(
    {id: ItemID.nuggetMionite}, 
    [{name: "mionite_nugget", data: 8},
        {name: "mionite_nugget", data: 8},
        {name: "mionite_nugget", data: 7},
        {name: "mionite_nugget", data: 6},
        {name: "mionite_nugget", data: 0},
        {name: "mionite_nugget", data: 1},
        {name: "mionite_nugget", data: 2},
        {name: "mionite_nugget", data: 3},
        {name: "mionite_nugget", data: 4},
        {name: "mionite_nugget", data: 5}],
    3
);