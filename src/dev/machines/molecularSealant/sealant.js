OresAPI.registerBlock("molecularSealant", true, [
    {
        name: "Molecular Sealer",
        texture: [["MBot", 0], ["sealantTop", 0], ["MBot", 0], ["sealantFront", 0], ["MBot", 0], ["MBot", 0]],
        inCreative: true
    }
], "opaque", [{ru: "Молекулярный Уплотнитель"}], energyNameOverride("b", "machine", 3));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.molecularSealant, 1, 0], ["tst", "rdr", "tst"], ["t", ItemID.ingotLead, -1, "s", ItemID.crystalSapphire, -1, "r", 331, 0, "d", ItemID.quantomDetectorChip, 0])
});
