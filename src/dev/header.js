IMPORT("EnergyNet");
IMPORT("OresAPI");
IMPORT("ChargeItem");
IMPORT("GUILib");
IMPORT("RelativeAPI");
IMPORT("itemAnimator");

function sphere(type, x, y, z, r){
	//pich - вертикаль, yaw - горизонталь
	var pitch = Math.random() * Math.PI - Math.PI / 2;
	var yaw = Math.random() * 2 * Math.PI;
	var px = x + Math.sin(yaw) * Math.cos(pitch) * r;
	var py = y + Math.sin(pitch) + Math.cos(pitch) * r;
	var pz = z + Math.cos(yaw) * Math.cos(pitch) * r;
	//for(var i = 0; i <= 20; i++){
		yaw = Math.random() * 2 * Math.PI;
		Particles.addParticle(type, px, py, pz, 0, 0, 0);
	//}
}

function cilinder(type, coords, r){
	var pitch = Math.random() * Math.PI - Math.PI / 2;
	var yaw = Math.random() * 2 * Math.PI;
	var px = coords.x + Math.sin(yaw) * r;
	var py = coords.y + Math.sin(pitch) * r;
	var pz = coords.z + Math.cos(yaw) * r;
	Particles.addParticle(type, px, py, pz, 0, 0, 0);
}

function line(type, start, end){
	var dx = end.x - start.x;
	var dy = end.y - start.y;
	var dz = end.z - start.z;
	var dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
	for(var i = .5; i < dist; i += .5){
		var sx = start.x + dx * i / dist;
		var sy = start.y + dy * i / dist;
		var sz = start.z + dz * i / dist;
		Particles.addParticle(type, sx, sy, sz, 0, 0, 0);
	}
}


function circle(type, coords, radius){
	//for(var yaw = 0; yaw < Math.PI * 2; yaw += .3){
		var yaw = Math.random() * 2 * Math.PI;
		var px = coords.x + Math.cos(yaw) * radius;
		var py = coords.y;
		var pz = coords.z + Math.sin(yaw) * radius;
		Particles.addParticle(type, px, py, pz, 0, 0, 0);
	//}
}

//тест генерации руд
/*Callback.addCallback("ItemUse", function(c, i, b){
	if(i.id == 280){
		const blocks = [
			BlockID.oreAdamantite,
			BlockID.oreLead,
			BlockID.oreMalachite,
			BlockID.oreSapphire,
			BlockID.oreUranium
		];
		for(var y = 110; y > 1; y--){
			for(var x = -20; x <= 20; x++){
				for(var z = -20; z <= 20; z++){
					var bool = true;
					var block = World.getBlock(c.x + x, y, c.z + z).id;
					if(block == 0) continue;
					if(block == 1 || block == 2 || block == 7){
						World.setBlock(c.x + x, y, c.z + z, 0);
						continue;
					}
					for(var i in blocks){
						if(blocks[i] == block){
							bool = false;
							break;
						}
					}
					if(bool){
						World.setBlock(c.x + x, y, c.z + z, 0);
					}
				}
			}
		}
	}
});*/

OresAPI.createObject = function(objectType, configKey){
	var get = OresAPI.getConfigValue;
	switch(objectType){
		case "ore":
			function veins(key){
				return get(configKey+".veins."+key);
			}
			function depth(key){
				return get(configKey+".depth_ore_generation."+key);
			}
			return {
				requiredToolLvl: get(configKey+".tool_lvl"),
				veinSize:{
					min: veins("size.min"),
					max: veins("size.max")
				},
				veinsInChunk: veins("amount_in_chunk"),
				depthGeneration:{
					min: depth("min"),
					max: depth("max")
				}
			}
		break;
		case "tools":
			function tools(key){
				return get(configKey+".tools."+key);
			}
			return {
				material: configKey,
				durability: tools("durability"),
				efficiency: tools("efficiency"),
				level: tools("level"),
				damage: tools("damage")
			}
		break;
		case "armor":
			function tools(key){
				return get(configKey+".tools."+key);
			}
			function armorPoints(key){
				return get(configKey+".armor_points."+key);
			}
			return {
				durability: tools("durability"),
				helmet: {armor: armorPoints("helmet")},
				chestplate: {armor: armorPoints("chestplate")},
				leggings: {armor: armorPoints("leggings")},
				boots: {armor: armorPoints("boots")}
			}
		break;
	}
}

Saver.addSavesScope("armorExtraData",
	function read(scope){
		if(scope&&scope.amount){
			armorExtraData.data = scope.amount;
			//armorExtraData.energyData = scope.data;
		}
	},
	
	function save(){
		return {amount: armorExtraData.data/*, data: armorExtraData.energyData*/}
	}
);

var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var QE = EnergyTypeRegistry.assureEnergyType("QE", 1);

var opacityBlocks = [0, 20, 52, 65, 68, 69, 75, 76, 77, 106, 131, 160, 101, 85, 113];

var IndustrialCraftIsExist = false;

ModAPI.addAPICallback("ICore", function(api){
    opacityBlocks.push(BlockID.reinforsedGlass, BlockID.cableOptic);
    
    IDRegistry.genItemID("crushedAdamantite");
    IDRegistry.genItemID("crushedMalachite");
    
    Translation.addTranslation("Crushed Adamantite", {ru: "Дроблённый Адамантит"});
    Translation.addTranslation("Crushed Malachite", {ru: "Дроблённый Малахит"});
    
    Item.createItem("crushedAdamantite", "Crushed Adamantite", {name: "crushedAdamantite"});
	Item.createItem("crushedMalachite", "Crushed Malachite", {name: "crushedMalachite"});
	
    Callback.addCallback("PostLoaded", function(){
        Recipes.addFurnace(ItemID.crushedUranium, ItemID.ingotUranium, 0);
        Recipes.addFurnace(ItemID.crushedAdamantite, ItemID.ingotAdamantite, 0);
		Recipes.addFurnace(ItemID.crushedMalachite, ItemID.ingotMalachite, 0);        
		
		api.Recipe.addRecipeFor("macerator", BlockID.oreAdamantite, {id: ItemID.crushedAdamantite, count: 2, data: 0});
        api.Recipe.addRecipeFor("macerator", BlockID.oreMalachite, {id: ItemID.crushedMalachite, count: 2, data: 0});
		
		var path = __packdir__ + "/innercore/mods/IndustrialCraft2/config.json";
		var myPatch = __packdir__ + "innercore/mods/OresMod/config.json";
		var parsedICConfig = FileTools.ReadJSON(path);
		var parsedOresConfig = FileTools.ReadJSON(myPatch);
		if(parsedICConfig.uranium_ore.maxHeight == 64)//default value
			parsedICConfig.uranium_ore.maxHeight = parsedOresConfig.uranium.depth_ore_generation.max;
		FileTools.WriteJSON(path, parsedICConfig, true);
	});

    IndustrialCraftIsExist = true;
});

var OreGenerationHelper = {
    findAllAndPlace:function(x, y, z, id, targetBlock, key){
        let blocks = [];
        let coords = this.findAll(x, y, z, targetBlock)
        for(var i in coords){
            let crds = i.split(":").map(function(e){
                return parseInt(e)
            });
            blocks.push(crds);
        }
        
        let count = random(
            OresAPI.getConfigValue(key+".veins.size.min"),
            OresAPI.getConfigValue(key+".veins.size.max")
        );
        if(count > blocks.length) count = blocks.length;
        for(let i = 0; i < count; i++){
            let index = Math.floor(Math.random() * blocks.length);
            let crds = blocks[index];
			if(World.getBlockID(crds[0], crds[1], crds[2]) == targetBlock){
				World.setBlock(crds[0], crds[1], crds[2], id);
				//alert(targetBlock);
			}
            coords.splice(index, 1);
        }
    },
    findAll:function(x, y, z, targetBlock, map){
        if(!map) map = [];
        let key = x+":"+y+":"+z;
        if(map[key] || World.getBlockID(x, y, z) !== targetBlock) return map;
        map[key] = true;
        
        this.findAll(x + 1, y, z, targetBlock, map);
        this.findAll(x - 1, y, z, targetBlock, map);
        this.findAll(x, y + 1, z, targetBlock, map);
        this.findAll(x, y - 1 , z, targetBlock, map);
        this.findAll(x, y, z + 1, targetBlock, map);
        this.findAll(x, y, z - 1, targetBlock, map);

        return map;
    }
}

var UIColor = android.graphics.Color;

var TIPS = __config__.getBool("enable_tips_in_machines");
 
ModAPI.addAPICallback("ForestryAPI", function(api){ 
    opacityBlocks.push(BlockID.forestryGlass); 
});

function random(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;}

var getLightLevel = ModAPI.requireGlobal("Level.getBrightness");
var setRequiresIconOverride = ModAPI.requireGlobal("Item.setRequiresIconOverride");

const PotionEffect = Native.PotionEffect;
const ParticleType = Native.PaticleType;

function defaultItemNameOverride(color, type){
    return NameOverrider.overrideItemName(color, type, {dontDisplayDurability: true});
}

function defaultBlockNameOverride(color, type){
    return NameOverrider.overrideBlockName(color, type);
}

function energyNameOverride(color, type, tier, mode){ 
    return NameOverrider.overrideBlockName(color || "f", type, {/*prefix:{standart: true, itemType: type},*/ other:
        function(item, name){
            if(!mode){
                return "§7"+ Translation.translate("Power tier")+": "+tier;
            }else{
                return "§7"+ Translation.translate("Output")+": "+tier+"/tick";
            }
        }
    });
} 

const mechanicArmorParams = {
    "ItemID.mechanicAdamantiteHelmet":{slots: 1, lvl: 1, type: 0/*, energy: 5000000*/, slotsCoords:{1:[500, 170]}},
    "ItemID.mechanicAdamantiteChestplate":{slots: 4, lvl: 1, type: 1/*, energy: 5000000*/, slotsCoords:{1:[440, 180], 2:[560, 180], 3:[440, 300], 4:[560, 300]}},
    "ItemID.mechanicAdamantiteLeggings":{slots: 2, lvl: 1, type: 2/*, energy: 5000000*/, slotsCoords:{1:[400, 240], 2:[600, 240]}},
    "ItemID.mechanicAdamantiteBoots":{slots: 2, lvl: 1, type: 3/*, energy: 5000000*/, slotsCoords:{1:[400, 300], 2:[600, 300]}},
    "ItemID.mechanicSapphireHelmet":{slots: 2, lvl: 2, type: 0/*, energy: 10000000*/, slotsCoords:{1:[400, 180], 2:[600, 180]}},
    "ItemID.mechanicSapphireChestplate":{slots: 5, lvl: 2, type: 1/*, energy: 10000000*/, slotsCoords:{1:[440, 180], 2:[560, 180], 3:[440, 300], 4:[560, 300], 5:[500, 180]}},
    "ItemID.mechanicSapphireLeggings":{slots: 3, lvl: 2, type: 2/*, energy: 10000000*/, slotsCoords:{1:[440, 300], 2:[500, 300], 3:[560, 300]}},
    "ItemID.mechanicSapphireBoots":{slots: 3, lvl: 2, type: 3/*, energy: 10000000*/, slotsCoords:{1:[440, 180], 2:[500, 300], 3:[560, 180]}}
}

function getMechanicArmorParams(armor){
    const keys = Object.keys(mechanicArmorParams);
    const index = keys.map(eval).indexOf(armor);
    if(index != -1)
        return mechanicArmorParams[keys[index]]; 
}

function isMechanicArmor(id){
	const keys = Object.keys(mechanicArmorParams);
	return keys.map(eval).indexOf(id) > -1;
}

var armorExtraData = {
    data:[],
	energyData:[],
    register:function(params){
        var obj = {};
		//var obj1 = {};
        
        for(var i in params.slotsCoords){
            obj["slot"+i] = {
                texture: 0,
                key: -1,
                locked: true,
                isEmpty: true,
                slotCoords: params.slotsCoords[i],
                lvl: 0,
            }
        }  
		this.data.push(obj);
        return this.data.length-1;
    },
    get:function(key){
        //Debug.m(armorExtraData.data[key]);
        return this.data[key];
    }
};

function chanse(chanse, max){
    return Math.floor(chanse/max*100);
}

var StringHelper = {
    toMain:Translation.translate("To main"),
    usedInCrafts:Translation.translate("Used in crafts."),
    adv:function(str){
        return Translation.translate("Advantage")+": "+Translation.translate(str);
    },
    t:Translation.translate,
    navigator:function(link){
        return [
            Guide.link("To main", "default"),
            Guide.link("To the list", link)
        ]
    },
    disAdv:function(str){
        return Translation.translate("Disadvantage")+": "+Translation.translate(str);
    },
    solar:function(type){
        return Translation.translate("Generation")+": " +OresAPI.getConfigValue(type+"_solar_panel.gen_day")+" ("+OresAPI.getConfigValue(type+"_solar_panel.gen_night")+" "+Translation.translate("night")+")";
    },
    oreDesc:function(adv, disAdv){
        return [
            Guide.text(this.usedInCrafts),
            Guide.text(this.adv(this.t(adv)), null, UIColor.parseColor("#191970")),
            Guide.text(this.disAdv(this.t(disAdv)), null, UIColor.RED)
        ];
    },
    ore:function(id){
        lang = (Item.getName(280) == "Stick")?false:true;
        let a, b;
        switch(id){
            case 1:
                a = "Адамантит";
                b = "Adamantite";
            break;
            case 2:
               a = "Свинец";
               b = "Tin";
            break; 
            case 3:
                a = "Малахит";
                b = "Malachite";
            break;
            case 4:
                a = "Мифрил";
                b = "Muthril";
            break;
            case 5:
                a = "Сапфир";
                b = "Sapphire";
            break;
            case 6:
                a = "Ураниум";
                b = "Uranium";
            break;
        }
        return (lang)?a:b;
    }
}

function setupWireRender(id, width, group) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
    
    ICRender.getGroup(group).add(id, -1)
  
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

var GUI_BAR_STANDART_SCALE = 4.2;

var gui = {};

/*function setupRender(id, group){
	var boxes = [
		{
			side: [1, 0, 0], 
			boxes:[
				[.55, .2, .4, 1, .4, .6], 
				[.55, .6, .4, 1, .8, .6]
			]
		},
		{
			side: [-1, 0, 0],
			boxes:[
				[0, .2, .4, .4, .4, .6],
				[0, .6, .4, .4, .8, .6]
			]
		},
		{
			side: [0, 0, 1],
			boxes:[
				[.4, .2, .6, .6, .4, 1],
				[.4, .6, .6, .6, .8, 1]
			]
		},
		{
			side: [0, 0, -1],
			boxes:[
				[.4, .2, 0, .6, .4, .4],
				[.4, .6, .0, .6, .8, .4]
			]
		}
	];
	
	var model = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, model);
	
	for(var i in boxes){
		var render = BlockRenderer.createModel();
		var side = boxes[i].side;
		var currentBoxes = boxes[i].boxes;
		ICRender.getGroup(group).add(id, -1);
		render.addBox(.4, 0, .4, .6, 1, .6, id, 0);
		model.addEntry(render);
		render = BlockRenderer.createModel();
		for(var i in currentBoxes){
			var box = currentBoxes[i];
			render.addBox(box[0], box[1], box[2], box[3], box[4], box[5], id, 0);
		}
		model.addEntry(render).asCondition(side[0], side[1], side[2], group, 0);
	}
}


IDRegistry.genBlockID("test");
Block.createBlock("test", [{
	name:"__", texture:[["planks", 0]], inCreative: true
}]);

setupRender(BlockID.test, "tg");*/
