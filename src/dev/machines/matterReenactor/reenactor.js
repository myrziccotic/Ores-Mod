OresAPI.registerBlock("matterReenactor", true, [
    {
        name: "Matter Reenactor", 
        texture: [["MBot", 0], ["MBot", 0], ["MBot", 0], ["reenactorFront", 0], ["MBot", 0], ["MBot", 0]], 
        inCreative: true
    }
], "opaque", [{ru: "Реконструктор Материи"}], energyNameOverride("a", "machine", 4));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.matterReenactor, 1, 0], ["tdt", "rcr", "tst"], ["t", ItemID.ingotLead, -1, "d", ItemID.quantomDetectorChip, 0, "r", 331, 0, "c", ItemID.splitterChip, 0, "s", ItemID.crystalSapphire, -1]);
});
