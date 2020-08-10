OresAPI.registerBlock("naniteTrainingNode", true, [
    {
        name: "Nanite Training Node",
        texture:[["nodeSide", 0], ["nodeTop", 0], ["nodeSide", 0], ["nodeFront", 0], ["nodeSide", 0], ["nodeSide", 0]],
        inCreative: true
    }
], "opaque", [{ru: "Узел Обучения Нанитов"}], energyNameOverride("e", "machine", 4));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.naniteTrainingNode, 1, 0], ["bsb", "rdr", "bcb"], ["d", ItemID.quantomDetectorChip, -1, "b", ItemID.ingotLead, -1, "r", 331, 0, "c", ItemID.matteryDrive, -1, "s", ItemID.crystalSapphire, -1]);
});
