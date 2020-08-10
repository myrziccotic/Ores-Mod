OresAPI.registerBlock("molecularGenerator", true, [
    {
        name: "Molecular Generator", 
        texture: [["MBot", 0], ["sealantTop", 0], ["MBot", 0], ["MGfront", 0], ["MBot", 0], ["MBot", 0]], 
        inCreative: true
    }
], "opaque", [{ru: "Молекулярный Генератор"}], energyNameOverride(null, "machine§f", 2));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.molecularGenerator, 1, 0], ["tdt", "rcr", "tst"], ["t", ItemID.ingotLead, -1, "d", ItemID.matteryDrive, 0, "r", 331, 0, "c", ItemID.splitterChip, 0, "s", ItemID.crystalSapphire, -1]);
});

var itemsPrice = {
    commonGroup:{items:[1, 2, 3, 4, 5, 6, 12, 18, 21, 33, 37, 38, 39, 40, 44, 45, 47, 50, 61, 65, 66, 67, 69, 70, 72, 77, 79, 80, 96, 261, 262, 263, 268, 269, 270, 271, 287, 288, ItemID.ingotMalachite], price:[30, 70]},
    uncommonGroup:{items:[14, 15, 16, 17, 20, 22, 23, 24, 27, 28, 29, 35, 48, 54, 73, 76, 81, 82, 85, 86, 87, 93, 98, 99, 100, 101, 102, 123, 256, 257, 258, 259, 260, 267, ItemID.ingotLead, BlockID.blockMalachite], price:[50, 70]},
    rateGroup:{items:[19, 25, 41, 42, 46, 52, 56, 88, 89, 91, 121, 265, 266, 283, 284, 285, 286, 298, 299, 300, 301, BlockID.blockLead], price:[80, 100]},
    insaneGroup:{items:[49, 57, 120, 129, 130, 133, 264, 276, 277, 278, 279, 289, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, ItemID.burntChip, ItemID.ingotAdamantite, ItemID.ingotUranium, ItemID.crystalSapphire], price:[135, 245]},
    ultimateGroup:{items:[122, 116, 138, BlockID.blockAdamantite, BlockID.blockUranium, BlockID.blockSapphire], price:[500, 800]}
}

ModAPI.addAPICallback("ICore", function(){
    itemsPrice.commonGroup.items.push(ItemID.coil);
    itemsPrice.uncommonGroup.items.push(BlockID.machineBlockBasic, ItemID.circuitBasic, ItemID.electricMotor, ItemID.powerUnit, ItemID.powerUnitSmall);
    itemsPrice.insaneGroup.items.push(BlockID.machineBlockAdvanced, ItemID.upgradeOverclocker, ItemID.upgradeTransformer, ItemID.upgradeEnergyStorage, ItemID.upgradeRedstone, ItemID.upgradeEjector, ItemID.upgradePulling, ItemID.upgradeFluidEjector, ItemID.upgradeFluidPulling);
    itemsPrice.rateGroup.items.push(BlockID.reinforcedStone, BlockID.reinforcedGlass, ItemID.circuitAdvanced, ItemID.storageBattery, ItemID.storageAdvBattery, ItemID.storageCrystal, ItemID.storageLapotronCrystal);
    itemsPrice.ultimateGroup.items.push(ItemID.iridiumChunk, ItemID.plateReinforcedIridium);
});
