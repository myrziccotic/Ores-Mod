OresAPI.registerBlock("armorCharger", true, [
    {name: "Mechanic Armor Charger", texture:[["MBot", 0], ["bgTop", 0], ["MBot", 0], ["bgFront", 0], ["MBot", 0], ["bgSide", 0]], inCreative: true}
], "opaque", [{ru: "Зарядник механической брони"}], energyNameOverride(5, "machine", 4));

Callback.addCallback("PostLoaded", function(){
	OresAPI.addShapedRecipe([BlockID.armorCharger, 1, 0], ["rrr", "sbs", "ttt"], ["r", 331, 0, "b", 152, 0, "t", ItemID.ingotLead, -1, "s", ItemID.crystalSapphire, -1]);
});

var RECOVERY_NEEDED = 0;
