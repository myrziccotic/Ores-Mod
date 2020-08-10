OresAPI.registerBlock("molecularConverter", true, [
    {
        name: "Molecular Converter", 
        texture: [["MBot", 0], ["MBot", 0], ["MBot", 0], ["converterFront", 0], ["MBot", 0], ["MBot", 0]], 
        inCreative: true
    }
], "opaque", [{ru: "Молекулярный Преобразователь"}], energyNameOverride("b", "machine", 4));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.molecularConverter, 1, 0], ["tst", "rcr", "tdt"], ["t", ItemID.ingotLead, -1, "s", ItemID.crystalSapphire, -1, "r", 331, 0, "c", ItemID.densityControllerChip, -1, "d", 264, 0]);
});
