//legacy
OresAPI.registerBlock("processStation", true, [
    {name: "Production Station", texture:[["MBot", 0], ["bgTop", 0], ["MBot", 0], ["bgFront", 0], ["MBot", 0], ["bgSide", 0]], inCreative: false}
], "opaque", [{ru: "Производственная Станция"}], energyNameOverride("a", "machine", 4));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.processStation, 1, 0], ["ece", "str", "ene"], ["e", ItemID.nuggetElectrum, 0, "n", ItemID.nuggetMistery, 0, "c", BlockID.molecularConverter, 0, "t", BlockID.blockTin, 0, "s", ItemID.crystalSapphire, 0, "r", 331, 0]);
});

var inputCounts = {
    data:{},
    addValue:function(id, data, count){
        if(!count){
            count = data;
            data = 0;
        }
        if(!inputCounts.data[id+data]){
            inputCounts.data[id+data] = count;
        }
    }
}

Callback.addCallback("PreLoaded", function(){
    inputCounts.addValue(ItemID.crystalSapphire, 13);
    inputCounts.addValue(263, 16); 
    inputCounts.addValue(264, 8); 
    inputCounts.addValue(265, 16); 
    inputCounts.addValue(266, 16); 
    inputCounts.addValue(466, 2);
    inputCounts.addValue(322, 2);
    inputCounts.addValue(368, 4);
});

ModAPI.addAPICallback("ICore", function(){
    Callback.addCallback("PostLoaded", function(){
        inputCounts.addValue(BlockID.machineBlockBasic, 40);
        inputCounts.addValue(BlockID.machineBlockAdvanced, 8);  
        inputCounts.addValue(BlockID.reinforcedStone, 10);  
        inputCounts.addValue(BlockID.reinforcedGlass, 30);
        inputCounts.addValue(ItemID.circuitBasic, 30);
        inputCounts.addValue(ItemID.circuitAdvanced, 6);
        inputCounts.addValue(ItemID.electricMotor, 17);
        inputCounts.addValue(ItemID.electricMotor, 17);
        inputCounts.addValue(ItemID.coolantCell, 13);
        inputCounts.addValue(ItemID.coolantCell3, 6);
        inputCounts.addValue(ItemID.coolantCell6, 3);
        inputCounts.addValue(ItemID.casingCopper, 2);
        inputCounts.addValue(ItemID.casingTin, 2);
        inputCounts.addValue(ItemID.casingBronze, 2);
        inputCounts.addValue(ItemID.casingIron, 2);
        inputCounts.addValue(ItemID.casingSteel, 2);
        inputCounts.addValue(ItemID.casingGold, 2);
        inputCounts.addValue(ItemID.casingLead, 2);
        inputCounts.addValue(ItemID.cellEmpty, 16);
        inputCounts.addValue(ItemID.cellWater, 4);
        inputCounts.addValue(ItemID.cellLava, 4);
        inputCounts.addValue(ItemID.cellAir, 4);
        inputCounts.addValue(ItemID.crushedCopper, 2);
        inputCounts.addValue(ItemID.crushedTin, 2);
        inputCounts.addValue(ItemID.crushedIron, 2);
        inputCounts.addValue(ItemID.crushedLead, 2);
        inputCounts.addValue(ItemID.crushedGold, 2);
        inputCounts.addValue(ItemID.crushedSilver, 2);
        inputCounts.addValue(ItemID.crushedUranium, 2);
        inputCounts.addValue(ItemID.crushedPurifiedCopper, 3);
        inputCounts.addValue(ItemID.crushedPurifiedTin, 3);
        inputCounts.addValue(ItemID.crushedPurifiedIron, 3);
        inputCounts.addValue(ItemID.crushedPurifiedLead, 3);
        inputCounts.addValue(ItemID.crushedPurifiedGold, 3);
        inputCounts.addValue(ItemID.crushedPurifiedSilver, 3);
        inputCounts.addValue(ItemID.crushedPurifiedUranium, 3);
        inputCounts.addValue(ItemID.dustCopper, 16);
        inputCounts.addValue(ItemID.dustTin, 16);
        inputCounts.addValue(ItemID.dustBronze, 16);
        inputCounts.addValue(ItemID.dustIron, 16);
        inputCounts.addValue(ItemID.dustSteel, 16);
        inputCounts.addValue(ItemID.dustLead, 16);
        inputCounts.addValue(ItemID.dustGolds, 16);
        inputCounts.addValue(ItemID.dustSilver, 16);
        inputCounts.addValue(ItemID.dustStone, 16);
        inputCounts.addValue(ItemID.dustCoal, 16);
        inputCounts.addValue(ItemID.dustSulfur, 16);
        inputCounts.addValue(ItemID.dustLapis, 16);
        inputCounts.addValue(ItemID.dustDiamond, 17);
        inputCounts.addValue(ItemID.dustEnergium, 16);
        inputCounts.addValue(ItemID.dustSmallCopper, 3);
        inputCounts.addValue(ItemID.dustSmallTin, 3);
        inputCounts.addValue(ItemID.dustSmallIron, 3);
        inputCounts.addValue(ItemID.dustSmallLead, 3);
        inputCounts.addValue(ItemID.dustSmallGold, 3);
        inputCounts.addValue(ItemID.dustSmallSilver, 3);
        inputCounts.addValue(ItemID.dustSmallSulfur, 3);
        inputCounts.addValue(ItemID.ingotCopper, 32);
        inputCounts.addValue(ItemID.ingotTin, 32);
        inputCounts.addValue(ItemID.ingotTin, 32);
        inputCounts.addValue(ItemID.ingotBronze, 21);
        inputCounts.addValue(ItemID.ingotSteel, 18);
        inputCounts.addValue(ItemID.ingotLead, 32);
        inputCounts.addValue(ItemID.ingotSilver, 32);
        inputCounts.addValue(ItemID.matter, 14);
        inputCounts.addValue(ItemID.uranium, 14);
        inputCounts.addValue(ItemID.uranium235, 7);
        inputCounts.addValue(ItemID.smallUranium235, 8);
        inputCounts.addValue(ItemID.uranium238, 6);
        inputCounts.addValue(ItemID.smallUranium238, 7);
        inputCounts.addValue(ItemID.plutonium, 2);
        inputCounts.addValue(ItemID.smallPlutonium, 3);
        inputCounts.addValue(ItemID.plateCopper, 23);
        inputCounts.addValue(ItemID.plateTin, 23);
        inputCounts.addValue(ItemID.plateBronze, 23);
        inputCounts.addValue(ItemID.plateIron, 23);
        inputCounts.addValue(ItemID.plateSteel, 23);
        inputCounts.addValue(ItemID.plateGold, 23);
        inputCounts.addValue(ItemID.plateLead, 23);
        inputCounts.addValue(ItemID.plateLapis, 23);
        inputCounts.addValue(ItemID.iridiumChunk, 4);
        inputCounts.addValue(ItemID.plateReinforcedIridium, 2);
        inputCounts.addValue(ItemID.ingotAlloy, 15);
        inputCounts.addValue(ItemID.plateAlloy, 13);
        inputCounts.addValue(ItemID.carbonFibre, 4);
        inputCounts.addValue(ItemID.carbonMesh, 3);
        inputCounts.addValue(ItemID.carbonPlate, 2);
        inputCounts.addValue(ItemID.coalBall, 6);
        inputCounts.addValue(ItemID.coalBlock, 3);
        inputCounts.addValue(ItemID.coalChunk, 3);
        inputCounts.addValue(ItemID.latex, 9);
        inputCounts.addValue(ItemID.rubber, 4);
        inputCounts.addValue(ItemID.scrap, 16);
        inputCounts.addValue(ItemID.scrapBox, 4);
        inputCounts.addValue(ItemID.tinCanEmpty, 4);
    });
    /*Callback.addCallback("LevelLoaded", function(){
        Debug.m(inputCounts.data);
    }); */    
});