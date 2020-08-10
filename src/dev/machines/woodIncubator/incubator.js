var WoodIncubatorRecipes = {
    data:{},
    sapling:{},
    registerSpecialDrop:function(id, count, data, result){
        WoodIncubatorRecipes.data[id+":"+data] = {id: result.id, data: result.data, count:{standart: count.standart, withEngine: count.withEngine}};
    },
    getSpecialDrop:function(id, data){
        if(WoodIncubatorRecipes.data[id+":"+data]){
            return WoodIncubatorRecipes.data[id+":"+data];
        }
        return false
    }, 
    getDropCount:function(id, data, bool){
        const p = WoodIncubatorRecipes.data[id+":"+data].count;
        if(bool){
            return random(p.withEngine[0], p.withEngine[1]);
        }else{
            return random(p.standart[0], p.standart[1]);
        }
    },
    registerSapling:function(a, b){
        WoodIncubatorRecipes.sapling[a.id+":"+a.data] = b;
    },
    getSapling:function(id, data){
        return WoodIncubatorRecipes.sapling[id+":"+data] || {id: 6, data: 0};
    }
}

OresAPI.registerBlock("woodIncubator", true, [
    {name: "Wood Incubator", texture: [["woodBot", 0], ["woodTop", 0], ["MBot", 0], ["woodFront", 0], ["MBot", 0], ["woodSide", 0]], inCreative: true}
], "opaque", [{ru: "Древесный Инкубатор"}], energyNameOverride(6, "machine", 2));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([BlockID.woodIncubator, 1, 0], ["tdt", "rgr", "ttt"], ["t", ItemID.ingotLead, -1, "d", 3, 0, "g", 266, 0, "r", 331, 0]);
});

Callback.addCallback("PostLoaded", function(){
    MachineRecipeRegistry.registerRecipesFor("woodIncubator", {
        "6:0":{id: 17, count: 20, data: 0},
        "6:1":{id: 17, count: 20, data: 1},
        "6:2":{id: 17, count: 20, data: 2},
        "6:3":{id: 17, count: 20, data: 3},
        "6:4":{id: 17, count: 20, data: 4},
        "6:5":{id: 17, count: 20, data: 5}
    });
    for(var i = 0; i <= 5; i++){
        WoodIncubatorRecipes.registerSapling({id: 6, data: i}, {id: 6, data: i});
    }
    WoodIncubatorRecipes.registerSpecialDrop(6, {standart: [1, 2], withEngine:[3, 6]}, 0, {id: 260, data: 0});
});
ModAPI.addAPICallback("ICore", function(api){
	IDRegistry.genBlockID("rubberTreeSaplingPrototype");
	Block.createBlock("rubberTreeSaplingPrototype", [
		{name: "", texture: [["rubber_tree_sapling", 0]], inCreative: false}
	], {rendertype: 1});
	var setEmptyCollisionShape = api.requireGlobal("TileRenderer.setEmptyCollisionShape");
	Block.setDestroyTime(BlockID.rubberTreeSaplingPrototype, 0);
	ToolAPI.registerBlockMaterial(BlockID.rubberTreeSaplingPrototype, "plant");
	Block.setShape(BlockID.rubberTreeSaplingPrototype, 1/8, 0, 1/8, 7/8, 1, 7/8);
	setEmptyCollisionShape(BlockID.rubberTreeSaplingPrototype);
	Block.registerDropFunction("rubberTreeSaplingPrototype", function(){
		return [[ItemID.rubberSapling, 1, 0]];
	});
	
    Callback.addCallback("PostLoaded", function(){
        MachineRecipeRegistry.addRecipeFor("woodIncubator", ItemID.rubberSapling, {id: BlockID.rubberTreeLog, count: 20, data: 0});
		WoodIncubatorRecipes.registerSapling({id: ItemID.rubberSapling, data: 0}, {id: BlockID.rubberTreeSaplingPrototype, data: 0});
        WoodIncubatorRecipes.registerSpecialDrop(ItemID.rubberSapling, {standart: [2, 5], withEngine: [10, 15]}, 0, {id: ItemID.latex, data: 0});
    });
});
