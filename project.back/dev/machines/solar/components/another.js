OresAPI.registerItem("shardLapis", "Lapis Shard", {name: "lapisShard"}, {ru: "Лазуритовый осколок"}, {}, defaultItemNameOverride(1, "item"));
//OresAPI.registerItem("nuggetIron", "Iron Nugget", {name: "nugget", data: 4}, {ru: "Железный Самородок"}, {}, defaultItemNameOverride("f", "item"));
OresAPI.registerItem("cellPhotovailtaic", "Photovailtaic Cell", {name: "cell"}, {ru: "Фотоэллектрический Провод"}, {}, defaultItemNameOverride(1, "item"));

Callback.addCallback("PostLoaded", function(){
  OresAPI.addShapedRecipe([ItemID.shardLapis, 9, 0], ["ooo", "olo", "ooo"], ["l", 351, 4]);
  OresAPI.addShapedRecipe([351, 1, 4], ["nnn", "nnn", "nnn"], ["n", ItemID.shardLapis, -1]);
  //OresAPI.addShapedRecipe([ItemID.nuggetIron, 9, 0], ["ooo", "oio", "ooo"], ["i", 265, 0]);
  OresAPI.addShapedRecipe([265, 1, 0], ["nnn", "nnn", "nnn"], ["n", 452, -1]);
  OresAPI.addShapedRecipe([ItemID.cellPhotovailtaic, 1, 0], ["ggg", "lll", "iii"], ["g", 102, 0, "l", ItemID.shardLapis, -1, "n", 452,  -1]);
  
  OresAPI.addShapedRecipe([265, 1, 0], ["aaa", "aaa", "aaa"], ["a", 452, -1]);
});
