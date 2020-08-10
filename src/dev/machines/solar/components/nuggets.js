Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([ItemID.nuggetLead, 9, 0], ["ooo", "oao", "ooo"], ["a", ItemID.ingotLead, -1]);
    OresAPI.addShapedRecipe([ItemID.nuggetElectrum, 1, 0], ["ogo", "rsr", "ogo"], ["s", ItemID.nuggetLead, -1, "r", 331, 0, "g", 371, 0]);
    OresAPI.addShapedRecipe([ItemID.nuggetUranium, 9, 0], ["ogo", "gug", "ogo"], ["g", 348, 0, "u", ItemID.ingotUranium, -1]);
    OresAPI.addShapedRecipe([ItemID.nuggetMistery, 1, 0], ["oeo", "dsd", "oeo"], ["o", 49, 0, "d", 264, 0, "s", ItemID.crystalSapphire, -1, "e", ItemID.nuggetElectrum, -1]); 
    OresAPI.addShapedRecipe([ItemID.ingotLead, 1, 0], ["aaa", "aaa", "aaa"], ["a", ItemID.nuggetLead, -1]);
    OresAPI.addShapedRecipe([ItemID.ingotUranium, 1, 0], ["aaa", "aaa", "aaa"], ["a", ItemID.nuggetUranium, -1]);
});
OresAPI.registerItem("nuggetLead", "Lead Nugget", {name: "nugget", data: 0}, {ru: "Свинцовый Самородок"}, {}, defaultItemNameOverride(8, "item"));
OresAPI.registerItem("nuggetElectrum", "Electrum Nugget", {name: "nugget", data: 1}, {ru: "Электроумовый Самородок"}, {}, "e", "item");
OresAPI.registerItem("nuggetUranium", "Uranium Nugget", {name: "nugget", data: 2}, {ru: "Ураниумовый Самородок"}, {}, defaultItemNameOverride("a", "item"));
OresAPI.registerItem("nuggetMistery", "Mistery Nugget", {name: "nugget", data: 3}, {ru:  "Загадочный Самородок"}, {}, defaultItemNameOverride(5, "item"));
