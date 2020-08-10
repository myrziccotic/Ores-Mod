OresAPI.registerBlock("naniteCollector", true, [
    {
        name: "Nanite Collector",
        texture:[["MBot", 0], ["MBot", 0], ["collectorBack", 0], ["collectorFront", 0], ["collectorLeft", 0], ["collectorRight", 0]],
        inCreative: true
    }
], "opaque", [{ru: "Сборщик Нанитов"}], energyNameOverride(4, "machine", 4));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.naniteCollector, 1, 0], ["bdb", "scs", "brb"], ["r", 331, 0, "c", ItemID.splitterChip, -1, "s", ItemID.crystalSapphire, -1, "d", ItemID.densityControllerChip, -1, "b", ItemID.ingotLead, -1]);
});
