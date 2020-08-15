Callback.addCallback("PostLoaded", function(){
  OresAPI.addShapedRecipe([ItemID.solarCoreLeadstone, 1, 0], ["ono", "nin", "ono"], ["i", 265, 0, "n", ItemID.nuggetLead, -1]);
  OresAPI.addShapedRecipe([ItemID.solarCoreHardent, 1, 0], ["ono", "ncn", "ono"], ["c", ItemID.solarCoreLeadstone, 0, "n", ItemID.nuggetLead, 0]);
  OresAPI.addShapedRecipe([ItemID.solarCoreRedstone, 1, 0], ["ono", "ncn", "ono"], ["c", ItemID.solarCoreHardent, -1, "n", ItemID.nuggetElectrum, -1]);
  OresAPI.addShapedRecipe([ItemID.solarCoreResonant, 1, 0], ["olo", "lcl", "olo"], ["c", ItemID.solarCoreRedstone, -1, "n", 351, 4, "l", 265, 0]);
  OresAPI.addShapedRecipe([ItemID.solarCoreAdvanced, 1, 0], ["olo", "lcl", "olo"], ["c", ItemID.solarCoreResonant, -1, "n", 351, 4, "l", ItemID.shardLapis, -1]);
  OresAPI.addShapedRecipe([ItemID.solarCoreUltimate, 1, 0], ["ono", "ncn", "ono"], ["c", ItemID.solarCoreAdvanced, -1, "n", ItemID.nuggetMistery, -1, "o", ItemID.nuggetElectrum, -1]);
});

OresAPI.registerItem("solarCoreLeadstone", "Leadstone Solar Core", {name: "core", data: 0}, {ru: "Свинцовое Солнечное Ядро"}, {}, defaultItemNameOverride(8, "item"));
OresAPI.registerItem("solarCoreHardent", "Hardend Solar Core", {name: "core", data: 1}, {ru: "Закалённое Солнечное Ядро"}, {}, defaultItemNameOverride(7, "item"));
OresAPI.registerItem("solarCoreRedstone", "Redstone Solar Core", {name: "core", data: 2}, {ru: "Краснокаменное Солнечное Ядро"}, {}, defaultItemNameOverride("e", "item"));
OresAPI.registerItem("solarCoreResonant", "Resonant Solar Core", {name: "core", data: 3}, {ru: "Резонирующее Солнечное Ядро"}, {}, defaultItemNameOverride(2, "item"));
OresAPI.registerItem("solarCoreAdvanced", "Advanced Solar Core", {name: "core", data: 4}, {ru: "Продвинутое Солнечное Ядро"}, {}, defaultItemNameOverride(1, "item"));
OresAPI.registerItem("solarCoreUltimate", "Ultimate Solar Core", {name: "core", data: 5}, {ru: "Идеальное Солнечное Ядро"}, {}, defaultItemNameOverride(5, "item"));