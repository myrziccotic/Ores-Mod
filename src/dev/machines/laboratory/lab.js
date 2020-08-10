OresAPI.registerBlock("labBlock", true, [
    {
        name: "Laboratory Block",
        texture:[["MBot", 0], ["labTop", 0], ["MBot", 0], ["labFront", 0], ["MBot", 0], ["MBot", 0]],
        inCreative: true
    }
], "opaque", [{ru: "Лабораторный Блок"}], energyNameOverride(4, "machine", 3));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.labBlock, 1, 0], ["sgs", "iri", "rdr"], ["s", ItemID.crystalSapphire, -1, "d", 54, 0, "i", 42, 0, "r", 152, 0, "g", 20, 0]);
});

var labItems = [ItemID.splitterChip, ItemID.quantomDetectorChip, ItemID.densityControllerChip, ItemID.matteryDrive];

function tryResearch(){
    if(Math.random() < 0.06){
        return labItems[random(0, labItems.length-1)];
    }
    return ItemID.burntChip;
}