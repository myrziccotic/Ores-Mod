LIBRARY({
    name: "OresAPI",
    version: "11",
    shared: false,
    api: "CoreEngine"
});

IMPORT("ToolLib");
Translation.addTranslation("Durability", {ru: "Прочность"});
function registerItem(id, name, texture, translation, special, override){
    IDRegistry.genItemID(id);
    if(special&&special.itemType){
        switch(special.itemType){
            case "armor":
                Item.createArmorItem(id, name, texture, special);
            break;
            case "throwable":
                Item.createThrowableItem(id, name, texture, special);
            break;
            case "food":
                Item.createFoodItem(id, name, texture, special);
            break;
            default:
                Item.createItem(id, name, texture, special);
            break;
        }
    }else{
        Item.createItem(id, name, texture, special);
    }
    if(special&&special.glint){
        Item.setGlint(ItemID[id], true)
        delete special.glint;
    }
    if(!special) special = {};
    if(translation){
        Translation.addTranslation(name, translation, translation);
    }
    if(override){
        nameOverrider.override(ItemID[id], override, true);
    }
}

function registerBlock(id, withRotation, variations, special, translations, override, material, tl){
    IDRegistry.genBlockID(id);
    if(special&&!special == "opaque"){
        special = Block.createSpecialType(special);
    }else if(!special){
        special = null;
    }
	if(translations){
        const keys = Object.keys(translations);
        for(var i in variations){
            let variationName = variations[i].name;
            Translation.addTranslation(variationName, translations[keys[i]]);
        }
    }
    if(withRotation){
        Block.createBlockWithRotation(id, variations, special);
    }else{
        Block.createBlock(id, variations, special, false);
    }
    if(override){
        nameOverrider.override(BlockID[id], override);
    }
    if(material){
        ToolAPI.registerBlockMaterial(BlockID[id], "stone", tl, true);
    }
}

function registerOre(obj){
    var obj1 = obj.source;
    const material = obj1.material;
    const sourceType = obj1.sourceType || "ingot";
    const sourceId = Standardizer.getStandartSourceID(sourceType, material);
    const sourceName = buildName(sourceType+" "+material);
    const sourceTexture = Standardizer.getStandartSourceTexture(sourceType, material);
    const sourceSpecial = obj1.specialOptions || null;
    var obj2 = obj.translations;
    const sourceTranslations = obj2.source;
    const oreTranslations = obj2.ore;
    const oreBlockTranslations = obj2.oreBlock;
    if(!obj.overrideNames.source) obj.overrideNames.source = {standart: true};
    if(!obj.overrideNames.source.newName) obj.overrideNames.source.newName = sourceName;
    var obj3 = obj.overrideNames;
    const itemColor = obj3.itemColor || null;
    const sourceNameOverride = obj3.source&&obj3.source.standart ? nameOverrider.overrideItemName(itemColor||obj3.source.itemColor, obj3.source.itemType||sourceType, {other: obj3.source.other || null, dontDisplayDurability: true}) : nameOverrider.overrideItemName("f", "item", {dontDisplayDurability: true});
    const oreNameOverride = obj3.ore&&obj3.ore.standart ? nameOverrider.overrideBlockName(itemColor||obj3.ore.itemColor, obj3.ore.itemType||"ore") : nameOverrider.overrideBlockName("f", "block", {displayDurability:false});
    const oreBlockNameOverride = obj3.oreBlock&&obj3.oreBlock.standart ? nameOverrider.overrideBlockName(itemColor||obj3.oreBlock.itemColor, obj3.oreBlock.itemType||"block") : nameOverrider.overrideBlockName("f", "block");
    var obj4 = obj.ore;
    const oreId = Standardizer.getStandartOreID(material);
    const oreName = buildName(material+" Ore");
    const oreTexture = Standardizer.getStandartOreTexture(material);
    const oreBlockId = Standardizer.getStandartOreBlockID(material);
    const oreBlockName = buildName(material+" block");
    const oreBlockTexture = Standardizer.getStandartOreBlockTexture(material);
    const requiredToolLvl = obj4.requiredToolLvl || 1;
    const oreDrop = obj.oreDrop || null;
    const dimension = obj4.dimension&&["GenerateEndChunk", "GenerateChunk", "GenerateNetherChunk"].indexOf(obj4.dimension) > -1 ? obj4.dimension : "GenerateChunk"; 
    const minVeinSize = obj4.veinSize.min || 1;
    const maxVeinSize = obj4.veinSize.max || 1;
    const veinsInChunk = obj4.veinsInChunk || 2;
    const minDepthGeneration = obj4.depthGeneration && obj4.depthGeneration.min ? obj4.depthGeneration.min : 64;
    const maxDepthGeneration = obj4.depthGeneration && obj4.depthGeneration.max ? obj4.depthGeneration.max : 10;
    
    registerItem(sourceId, sourceName, sourceTexture, sourceTranslations, sourceSpecial, sourceNameOverride);
    registerBlock(oreId, false, [{name: oreName, texture: oreTexture, inCreative: true}], "opaque", oreTranslations, oreNameOverride, "stone", requiredToolLvl);
    registerBlock(oreBlockId, false, [{name: oreBlockName, texture: oreBlockTexture, inCreative: true}], "opaque", oreBlockTranslations, oreBlockNameOverride, "stone", requiredToolLvl);
    
    Translation.addTranslation(oreName, oreTranslations);
    Translation.addTranslation(oreBlockName, oreBlockTranslations);
    
    Block.registerDropFunction(oreId, function(c, id, data, digging, tool){
        if(digging >= requiredToolLvl){
            return oreDrop || [[id, 1, data]];
        }
    });
    Block.registerDropFunction(oreBlockId, function(c, id, data, digging, tool){
        if(digging >= requiredToolLvl){
            return [[id, 1, data]];
        }
    });
	
    Callback.addCallback(dimension, function(x, z){
        for(var i = 0; i < veinsInChunk; i++){
            let c = GenerationUtils.randomCoords(x, z, minDepthGeneration, maxDepthGeneration);
            GenerationUtils.generateOre(c.x, c.y, c.z, BlockID[oreId], 0, Math.floor(Math.random() * (maxVeinSize - minVeinSize + 1)) + minVeinSize);
        }
		Logger.Log(obj1.material);
    });
    Callback.addCallback("PostLoaded", function(){
        if(!obj4.nonCreateGroup){
            Recipes.addShaped({id: ItemID[sourceId], count: 9, data: 0}, ["ooo", "oao", "ooo"], ["a", BlockID[oreBlockId], -1]);
            if(!obj4.notMelt)Recipes.addFurnace(BlockID[oreId], ItemID[sourceId], 0);
            Recipes.addShaped({id: BlockID[oreBlockId], count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID[sourceId], -1]);
        }
    }); 
}

function registerTools(obj){
    const obj1 = obj.toolMaterial;
    const material = obj1.material;
    const durability = obj1.durability || 100;
    const efficiency = obj1.efficiency || 4;
    const enchamentability = obj1.enchamentability || 1;
    const level = obj1.level || 2;
    const damage = obj1.damage || 3;
    const isTech = obj1.isTech;
    delete obj1.isTech;
    delete obj1.material;
    const swordId = Standardizer.getStandartToolID(material, "sword");
    const axeId = Standardizer.getStandartToolID(material, "axe");
    const pickaxeId = Standardizer.getStandartToolID(material, "pickaxe");
    const shovelId = Standardizer.getStandartToolID(material, "shovel");
    const hoeId = Standardizer.getStandartToolID(material, "hoe");
    const swordTexture = Standardizer.getStandartToolTexture(material, "sword");
    const axeTexture = Standardizer.getStandartToolTexture(material, "axe");
    const pickaxeTexture = Standardizer.getStandartToolTexture(material, "pickaxe");
    const shovelTexture = Standardizer.getStandartToolTexture(material, "shovel");
    const hoeTexture = Standardizer.getStandartToolTexture(material, "hoe");
    const swordName = buildName(material+" sword");
    const pickaxeName = buildName(material+" pickaxe");
    const shovelName = buildName(material+" shovel");
    const axeName = buildName(material+" axe");
    const hoeName = buildName(material+" hoe");
    const obj2 = obj.translations;
    const swordTranslations = obj2.sword;
    const pickaxeTranslations = obj2.pickaxe;
    const axeTranslations = obj2.axe;
    const shovelTranslations = obj2.shovel;
    const hoeTranalstions = obj2.hoe;
    const toolsSpecialParams = {stack: 1, isTech: isTech};
    const obj3 = obj.overrideNames; 
    const toolsNameOverride = obj3 ? obj3.standart ? nameOverrider.overrideItemName(obj3.itemsColor, "tool") : nameOverrider.overrideItemName("§f", "item") : nameOverrider.overrideItemName("§f", "item");
    const obj4 = obj.recipes;
    
    ToolAPI.addToolMaterial(material, obj1);
    
    registerItem(swordId, swordName, swordTexture, swordTranslations, toolsSpecialParams, toolsNameOverride);
    registerItem(pickaxeId, pickaxeName, pickaxeTexture, pickaxeTranslations, toolsSpecialParams, toolsNameOverride);
    registerItem(shovelId, shovelName, shovelTexture, shovelTranslations, toolsSpecialParams, toolsNameOverride);
    registerItem(axeId, axeName, axeTexture, axeTranslations, toolsSpecialParams, toolsNameOverride);
    registerItem(hoeId, hoeName, hoeTexture, hoeTranalstions, toolsSpecialParams, toolsNameOverride);
    
    ToolAPI.setTool(ItemID[swordId], material, ToolType.sword);
    ToolAPI.setTool(ItemID[pickaxeId], material, ToolType.pickaxe);
    ToolAPI.setTool(ItemID[shovelId], material, ToolType.shovel);
    ToolAPI.setTool(ItemID[axeId], material, ToolType.axe);
    ToolAPI.setTool(ItemID[shovelId], material, ToolType.shovel);
    ToolAPI.setTool(ItemID[hoeId], material, ToolType.hoe);
    
    if(obj4){
        Callback.addCallback("PostLoaded", function(){
            if(!obj4.primary){
                for(var i in obj4){
                    let id = Standardizer.getStandartToolID(material, i);
                    let grid = obj4[i].grid == "standart" ? Standardizer.getStandartToolRecipeGrid(i) : obj4[i].grid;
                    let materials = obj4[i].materials ? obj4[i].materials : Standardizer.getStandartToolRecipeMaterials(obj4[i].primary, obj4[i].secondary || 280);
                    Recipes.addShaped({id: id, count: 1, data: 0}, grid, materials);
                }
            }else{
                const primary = obj4.primary;
                const secondary = obj4.secondary ? obj4.secondary : 280;
                const tools = ["sword", "pickaxe", "axe", "shovel", "hoe"];
                for(var i in tools){
                    let id = eval(tools[i]+"Id");
                    let grid = Standardizer.getStandartToolRecipeGrid(tools[i]);
                    let materials = Standardizer.getStandartToolRecipeMaterials(primary, secondary);
                    Recipes.addShaped({id: ItemID[id], count: 1, data: 0}, grid, materials);
                }
            }
        });
    }
}

function registerArmor(obj){
    const material = obj.material;
    const materialID = obj.materialID || Standardizer.getStandartSourceID("ingot", material);
    const helmetId = Standardizer.getStandartArmorID(material, "helmet");
    const chestplateId = Standardizer.getStandartArmorID(material, "chestplate");
    const leggingsId = Standardizer.getStandartArmorID(material, "leggings");
    const bootsId = Standardizer.getStandartArmorID(material, "boots");
    const helmetName = buildName(material+" helmet");
    const chestplateName = buildName(material+" chestplate");
    const leggingsName = buildName(material+" leggings");
    const bootsName = buildName(material+" boots");
    const helmetIconTexture = Standardizer.getStandartArmorIconTexture(material, "helmet");
    const chestplateIconTexture = Standardizer.getStandartArmorIconTexture(material, "chestplate");
    const leggingsIconTexture = Standardizer.getStandartArmorIconTexture(material, "leggings");
    const bootsIconTexture = Standardizer.getStandartArmorIconTexture(material, "boots");
    const obj2 = obj.properties;
    var helmetProperties = obj2.helmet || {};
    var chestplateProperties = obj2.chestplate || {};
    var leggingsProperties = obj2.leggings || {};
    var bootsProperties = obj2.boots || {};
    helmetProperties.durability = obj2.durability ? obj2.durability : helmetProperties.durability || 100;
    chestplateProperties.durability = obj2.durability ? obj2.durability : chestplateProperties.durability || 100;
    leggingsProperties.durability = obj2.durability ? obj2.durability : leggingsProperties.durability || 100;
    bootsProperties.durability = obj2.durability ? obj2.durability : bootsProperties.durability || 100;
    helmetProperties.armor = obj2.armor ? obj2.armor : helmetProperties.armor || .5;
    chestplateProperties.armor = obj2.armor ? obj2.armor : chestplateProperties.armor || .5;
    leggingsProperties.armor = obj2.armor ? obj2.armor : leggingsProperties.armor || .5;
    bootsProperties.armor = obj2.armor ? obj2.armor : bootsProperties.armor || .5;
    helmetProperties.type = "helmet";
    chestplateProperties.type = "chestplate";
    leggingsProperties.type = "leggings";
    bootsProperties.type = "boots";
    helmetProperties.itemType = "armor";
    chestplateProperties.itemType = "armor";
    leggingsProperties.itemType = "armor";
    bootsProperties.itemType = "armor";
    helmetProperties.texture = Standardizer.getStandartArmorLayerTexture(material, 0);
    chestplateProperties.texture = Standardizer.getStandartArmorLayerTexture(material, 1);
    leggingsProperties.texture = Standardizer.getStandartArmorLayerTexture(material, 2);
    bootsProperties.texture = Standardizer.getStandartArmorLayerTexture(material, 3);
    const obj3 = obj.translations;
    const helmetTranslations = obj3.helmet;
    const chestplateTranslations = obj3.chestplate;
    const leggingsTranslations = obj3.leggings;
    const bootsTranslations = obj3.boots;
    const obj4 = obj.overrideNames;
    const armorNameOverride = obj4 ? nameOverrider.overrideItemName(obj4.itemsColor, obj4.itemType, {other: obj4.other || null, dontDisplayDurability: obj4.dontDisplayDurability}) : null;
    const obj5 = obj.recipes;
    var recipesAllowed = obj5&&obj5.prevent ? false : true;

    registerItem(helmetId, helmetName, helmetIconTexture, helmetTranslations, helmetProperties, armorNameOverride);
    registerItem(chestplateId, chestplateName, chestplateIconTexture, chestplateTranslations, chestplateProperties, armorNameOverride);
    registerItem(leggingsId, leggingsName, leggingsIconTexture, leggingsTranslations, leggingsProperties, armorNameOverride);
    registerItem(bootsId, bootsName, bootsIconTexture, bootsTranslations, bootsProperties, armorNameOverride);
    
    //Logger.Log(obj4.dontDisplayDurability, helmetId);
    
    if(obj2.preventDamaging&&helmetProperties.preventDamaging) Armor.preventDamaging(ItemID[helmetId], true);
    if(obj2.preventDamaging&&chestplateProperties.preventDamaging) Armor.preventDamaging(ItemID[chestplateId], true);
    if(obj2.preventDamaging&&leggingsProperties.preventDamaging) Armor.preventDamaging(ItemID[leggingsId], true);
    if(obj2.preventDamaging&&bootsProperties.preventDamaging) Armor.preventDamaging(ItemID[bootsId], true);
    
    Callback.addCallback("PostLoaded", function(){
        const ids = [helmetId, chestplateId, leggingsId, bootsId];
        const armorTypes = ["helmet", "chestplate", "leggings", "boots"];
        if(recipesAllowed){
            for(var i = 0; i < 4; i++){
                Recipes.addShaped({id: ItemID[ids[i]], count: 1, data: 0}, Standardizer.getStandartArmorGreed(armorTypes[i]), Standardizer.getStandartArmorRecipeMaterials(ItemID[materialID]));
            }
        }
    });
}

var currentUIscreen = null;
Callback.addCallback("NativeGuiChanged", function(gui){
	currentUIscreen = gui;
});

function getConfigValue(value){
    return parseInt(__config__.access(value));
}

function addShaped(result, ingredients, values){
    Recipes.addShaped({id: result[0], count: result[1], data: result[2]}, ingredients, values);
}

function addShapedWithFunction(result, ingridients, values, func){
	Recipes.addShaped({id: result[0], count: result[1], data: result[2]}, ingridients, values, func);
}

function buildName(str){
    var a = str.split(" ");
    for(var i in a){
        a[i] = toUpperCase(a[i]);
    }
    return a.join(" ");
}

function toUpperCase(str){
    var a = str.split("");
    a[0] = a[0].toUpperCase();
    return a.join("");
}

var Standardizer = {
    getStandartSourceID:function(type, source){
        return type+""+toUpperCase(source);
    },
    getStandartSourceTexture:function(type, source){
        return {name: source+"_"+type};
    },
    getStandartOreID:function(source){
        return "ore"+toUpperCase(source);
    },
    getStandartOreTexture:function(source){
        return [[source+"_ore", 0]];
    },
    getStandartOreBlockTexture:function(source){
        return [[source+"_block", 0]];
    },
    getStandartOreBlockID:function(source){
        return "block"+toUpperCase(source);
    },
    getStandartToolID:function(source, type){
        return source+toUpperCase(type);
    },
    getStandartToolTexture:function(source, type){
        return {name: source+"_"+type};
    },
    getStandartToolRecipeGrid:function(type){
        switch(type){
            case "sword":
                return ["oao", "oao", "oso"];
            case "pickaxe":
                return ["aaa", "oso", "oso"];
            case "axe":
                return ["aao", "aso", "oso"];
            case "shovel":
                return ["oao", "oso", "oso"];
            case "hoe":
                return ["aao", "oso", "oso"];
        }
    },
    getStandartArmorGreed:function(type){
        switch(type){
            case "helmet":
                return ["aaa", "aoa", "ooo"];
            case "chestplate":
                return ["aoa", "aaa", "aaa"];
            case "leggings":
                return ["aaa", "aoa", "aoa"];
            case "boots":
                return ["ooo", "aoa", "aoa"];    
        }
    },
    getStandartArmorRecipeMaterials:function(primary, data){
        return ["a", primary, data || -1];
    },
    getStandartToolRecipeMaterials:function(primary, secondary, data1, data2){
        return ["a", primary, data1 || -1, "s", secondary, data2 || 0];
    },
    getStandartArmorID:function(source, type){
        return this.getStandartToolID(source, type);
    },
    getStandartArmorIconTexture:function(source, type){
        return {name: source+"_"+type};
    },
    getStandartArmorLayerTexture:function(source, index){
        if(index != 2) index = 1;
        return "armor/"+source+"_"+index+".png";
    }
}

var nameOverrider = {
    override:function(id, obj, bool){
        Item.registerNameOverrideFunction(id, function(item, Oname){
            var name = obj.newName || Oname + " ";
			obj.dontShowData = obj.dontShowData || false;
            const length = name;
            var data = "";
            var prefix = "";   
            if(obj.colorName) name = "§"+obj.colorName+name;
            if(obj.prefix){
                obj.prefix.itemType = obj.prefix.itemType || bool ? "item" : "block";
                if(obj.prefix.standart){
                    prefix = "§7[§3Оres§1Mod§7]§0.§a"+obj.prefix.itemType;
                }else{
                    const c1 = obj.prefix.bracketColor||"§7";
                    const c2 = obj.prefix.firstColor||"§3";
                    const c3 = obj.prefix.secondColor||"§1";
                    const c4 = obj.prefix.itemTypeColor||"§a";
                    const t1 = obj.prefix.firstText||"Ores";
                    const t2 = obj.prefix.secondText||"Mod";
                    prefix = c1+"["+c2+""+t1+""+c3+""+t2+""+c1+"]§0."+c4+""+obj.prefix.itemType;
                }
            }
            if(!obj.dontShowData){
                var maxDamage = Item.getMaxDamage(id);
                var currentData = maxDamage-item.data;
                var displayDurability = Math.floor(currentData/maxDamage*100);
                const procent = currentData/maxDamage;
                var color;
                if(procent <= .05) color = "§4";
                else if(procent <= .15) color = "§c";
                else if(procent <= .35) color = "§6";
                else if(procent <= .50) color = "§e";
                else if(procent <= .74) color = "§a";
                else color = "§2";
				
				let percent = "%%%%";
				if(currentUIscreen == "in_game_play_screen" || 
					currentUIscreen == "world_loading_progress_screen - local_world_load"){
					percent += "%%%%";
				}
				
                data = "§f"+Translation.translate("Durability")+": "+color+""+displayDurability + percent;
            }   
            if(prefix.length > 1) 
				name = name + "\n" + prefix;
            if(data.length > 1){
				name = name + "\n" + data;
            }
    		if(obj.other){
				name = name + "\n" + obj.other(item, name);
            }
            return name;
        });
    },
    overrideBlockName:function(nameColor, itemType, settings){
        settings = settings || {};
        var obj = {
            colorName: nameColor, prefix: settings.prefix || {standart: true, itemType: itemType},
            dontShowData: true,
            other: settings.other || null
        };
        return obj;
    },
    overrideItemName:function(nameColor, itemType, settings){
        settings = settings || {};
        var obj = {
            colorName: nameColor,
            prefix: settings.prefix || {standart: true, itemType: itemType},
            dontShowData: settings.dontDisplayDurability,
            other: settings.other || null
        };
        return obj;
    },
    transformNumber:function(str){
        if(typeof srt != "string") str = str.toString();
        var a = str.split("").reverse();
        var nw = [];
        var o = 0;
        for(var i in a){
            nw.push(a[i]);
            o++;
            if(o == 3){
                o = 0;
                nw.push(".");    
            }
        }
        nw = nw.reverse();
        if(nw[0] == ".") delete nw[0];
        return nw.join("");
    }
}


var API = {
    registerOre: registerOre,
    registerTools: registerTools,
    registerArmor: registerArmor,
    registerItem: registerItem,
    registerBlock: registerBlock,
    getConfigValue: getConfigValue,
    addShapedRecipe: addShaped, 
    addShapedRecipeWithFunction: addShapedWithFunction,
}

EXPORT("OresAPI", API);
EXPORT("NameOverrider", nameOverrider);

