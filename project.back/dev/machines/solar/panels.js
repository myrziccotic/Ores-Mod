OresAPI.registerBlock("solarPanelLeadstone", false, [
    {name: "Leadstone Solar Panel", texture:[["leadstone", 0], ["Ltop", 0], ["leadstone", 0], ["leadstone", 0], ["leadstone", 0], ["leadstone", 0]], inCreative: true}
], false, [{ru: "Свинцовая Солнечная Панель"}], energyNameOverride(8, "machine",OresAPI.getConfigValue("leadstone_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelHardent", false, [
    {name: "Hardent Solar Panel", texture:[["hardent", 0], ["Htop", 0], ["hardent", 0], ["hardent", 0], ["hardent", 0], ["hardent", 0]], inCreative: true}
], false, [{ru: "Закалённая Солнечная Панель"}], energyNameOverride(7, "machine", OresAPI.getConfigValue("hardent_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelRedstone", false, [
    {name: "Redstone Solar Panel", texture:[["redstone", 0], ["RDtop", 0], ["redstone", 0], ["redstone", 0], ["redstone", 0], ["redstone", 0]], inCreative: true}
], false, [{ru: "Краснокаменная Солнечная Панель"}], energyNameOverride("e", "machine", OresAPI.getConfigValue("redstone_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelResonant", false, [
    {name: "Resonant Solar Panel", texture: [["resonant", 0], ["RStop", 0], ["resonant", 0], ["resonant", 0], ["resonant", 0], ["resonant", 0]], inCreative: true}
], false, [{ru: "Резонирующая Солнечная Панель"}], energyNameOverride(2, "machine", OresAPI.getConfigValue("resonant_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelAdvanced", false, [
    {name: "Advanced Solar Panel", texture:[["advanced", 0], ["Atop", 0], ["advanced", 0], ["advanced", 0], ["advanced", 0], ["advanced", 0]], inCreative: true}
], false, [{ru: "Продвинутая Солнечная Панель"}], energyNameOverride(1, "machine", OresAPI.getConfigValue("advanced_solar_panel.output"), 1), "stone", 1);
OresAPI.registerBlock("solarPanelUltimate", false, [
    {name: "Ultimate Solar Panel", texture:[["ultimate", 0], ["Utop", 0], ["ultimate", 0], ["ultimate", 0], ["ultimate", 0], ["ultimate", 0]], inCreative: true}
], false, [{ru: "Совершенная Солнечная Панель"}], energyNameOverride(5, "machine", OresAPI.getConfigValue("ultimate_solar_panel.output"), 1), "stone", 1);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.solarPanelLeadstone, count: 1, data: 0}, ["lll", "rcr", "nnn"], ["l", ItemID.cellPhotovailtaic, -1, "r", ItemID.ingotLead, -1, "c", ItemID.solarCoreLeadstone, -1, "n", 452, 0]);
  Recipes.addShaped({id: BlockID.solarPanelHardent, count: 1, data: 0}, ["rlr", "cpc", "nrn"], ["p", BlockID.solarPanelLeadstone, -1, "c", ItemID.solarCoreHardent, -1, "r", ItemID.ingotLead, -1, "l", ItemID.cellPhotovailtaic, -1, "n", ItemID.nuggetLead, -1]);
  Recipes.addShaped({id: BlockID.solarPanelRedstone, count: 1, data: 0}, ["rlr", "cpc", "nnn"], ["p", BlockID.solarPanelHardent, -1, "c", ItemID.solarCoreRedstone, -1, "l", ItemID.cellPhotovailtaic, -1, "r", 266, 0, "n", ItemID.nuggetElectrum, -1]);
  Recipes.addShaped({id: BlockID.solarPanelResonant, count: 1, data: 0}, ["rlr", "cpc", "rrr"], ["p", BlockID.solarPanelRedstone, -1, "c", ItemID.solarCoreResonant, -1, "r", 351, 4, "l", ItemID.cellPhotovailtaic, -1]);
  Recipes.addShaped({id: BlockID.solarPanelAdvanced, count: 1, data: 0}, ["rlr", "cpc", "sss"], ["p", BlockID.solarPanelResonant, -1, "c", ItemID.solarCoreAdvanced, -1, "r", 266, 0, "l", ItemID.cellPhotovailtaic, -1, "s", ItemID.crystalSapphire, -1]);
  Recipes.addShaped({id: BlockID.solarPanelUltimate, count: 1, data: 0}, ["rlr", "cpc", "rcr"], ["p", BlockID.solarPanelAdvanced, -1, "c", ItemID.solarCoreUltimate, -1, "r", ItemID.nuggetMistery, -1, "l", ItemID.cellPhotovailtaic, -1]);
});
