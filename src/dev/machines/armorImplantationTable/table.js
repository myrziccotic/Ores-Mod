OresAPI.registerBlock("armorImplantationTable", true, [
    {name: "Armor Implantation Table", texture:[["MBot", 0], ["tableTop", 0], ["tableBack", 0], ["tableFront", 0], ["tableLeft", 0], ["tableRight", 0]], inCreative: true}
], "opaque", [{ru: "Стол Модифицирования Брони"}], energyNameOverride("b", "machine", 4));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.armorImplantationTable, 1, 0], ["sts", "drd", "sts"], ["s", ItemID.crystalSapphire, -1, "t", ItemID.ingotLead, -1, "d", 264, 0, "r", 331, 0]);
});

var UPDATE_NEEDED = -1;
