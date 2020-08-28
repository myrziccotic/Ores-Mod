OresAPI.registerArmor({
    material: "mechanicAdamantite",
    properties:{
        preventDamaging: true,
        durability: 10000000,
        helmet: {armor: 0.5},
        chestplate: {armor: 0.5},
        leggings: {armor: 0.5},
        boots: {armor: 0.5}
    },
    translations:{
        helmet: {ru: "Механический Адамантитовый Шлем"},
        chestplate: {ru: "Механичесий Адамантитовый Нагрудник"},
        leggings: {ru: "Механические Адамантитовые Поножи"},
        boots: {ru: "Механические Адамантитовые Ботинки"}
    },
    overrideNames:{
        dontShowData: true,
        prefix:{standart:true, itemType: "item"},
        itemsColor: 4,
        other:function(item){
            const procent = ArmorButtons.currentScreen == "hud_screen" || ArmorButtons.currentScreen == "in_game_play_screen" ?
                "%%%%%%%%" : "%%%%";
            const energy = ChargeItemRegistry.getEnergyStored(item, "Eu");
            const storage = ChargeItemRegistry.getMaxCharge(item.id, "Eu");
            const charge = "§9"+Translation.translate("Charge")+": §e";
            return charge+(energy/storage*100)+procent;
        }
    },
    recipes:{prevent: true}
});

OresAPI.registerArmor({
    material: "mechanicSapphire",
    properties:{
        preventDamaging: true,
        durability: 15000000,
        helmet: {armor: 1.5}, 
        chestplate: {armor: 1.5},
        leggings: {armor: 1},
        boots: {armor: .5}
    },
    translations:{
        helmet: {ru: "Механический Сапфировый Шлем"},
        chestplate: {ru: "Механичесий Сапфировый Нагрудник"},
        leggings: {ru: "Механические Сапфировые Поножи"},
        boots: {ru: "Механические Сапфировые Ботинки"}
    },
    overrideNames:{
        dontShowData: true,
        prefix:{standart:true, itemType: "item"},
        itemsColor: 1,
       other:function(item){
            const procent = ArmorButtons.currentScreen == "hud_screen" || ArmorButtons.currentScreen == "in_game_play_screen" ?
                "%%%%%%%%" : "%%%%";
            const energy = ChargeItemRegistry.getEnergyStored(item, "Eu");
            const storage = ChargeItemRegistry.getMaxCharge(item.id, "Eu");
            const charge = "§9"+Translation.translate("Charge")+": §e";
            return charge+(energy/storage*100)+procent;
        }
    },
    recipes:{prevent: true}
});

ChargeItemRegistry.registerExtraItem(ItemID.mechanicAdamantiteHelmet, "Eu", 10000000, 2048, 4, "armor", true, false);
ChargeItemRegistry.registerExtraItem(ItemID.mechanicAdamantiteChestplate, "Eu", 10000000, 2048, 4, "armor", true, false);
ChargeItemRegistry.registerExtraItem(ItemID.mechanicAdamantiteLeggings, "Eu", 10000000, 2048, 4, "armor", true, false);
ChargeItemRegistry.registerExtraItem(ItemID.mechanicAdamantiteBoots, "Eu", 10000000, 2048, 4, "armor", true, false);
ChargeItemRegistry.registerExtraItem(ItemID.mechanicSapphireHelmet, "Eu", 15000000, 2048, 4, "armor", true, false);
ChargeItemRegistry.registerExtraItem(ItemID.mechanicSapphireChestplate, "Eu", 15000000, 2048, 4, "armor", true, false);
ChargeItemRegistry.registerExtraItem(ItemID.mechanicSapphireLeggings, "Eu", 15000000, 2048, 4, "armor", true, false);
ChargeItemRegistry.registerExtraItem(ItemID.mechanicSapphireBoots, "Eu", 15000000, 2048, 4, "armor", true, false);

function mechanicArmorRecipeFuncs(api, field, result){
	for(var i in field){
		if(isMechanicArmor(field[i].id)){
            result.extra = field[i].extra;
			result.data = field[i].data;
			break;
		}
	}
}

Callback.addCallback("PostLoaded", function(){
    Recipes.addShaped({id: ItemID.mechanicAdamantiteHelmet, count: 1, data: 0}, ["aha", "lcl", "omg"], ["a", ItemID.ingotLavarite, -1, "h", ItemID.matrixOfHoloSystems, -1, "l", ItemID.opticalLens, -1, "c", ItemID.centralLogicSystem, -1, "o", ItemID.outerProtectivePlate, -1, "m", ItemID.manipulationCable, -1, "g", ItemID.connectingSystems, -1]);
	Recipes.addShaped({id: ItemID.mechanicAdamantiteChestplate, count: 1, data: 0}, ["oco", "tot", "sol"], ["o", ItemID.outerProtectivePlate, -1, "c", ItemID.connectingSystems, -1, "t", ItemID.thermoadaptationCoating, -1, "s", ItemID.manipulationCable, -1, "l", ItemID.localLogicSystem, -1]);
	Recipes.addShaped({id: ItemID.mechanicAdamantiteLeggings, count: 1, data: 0}, ["mcm", "oto", "lso"], ["m", ItemID.movableElements, -1, "c", ItemID.connectingSystems, -1, "o", ItemID.outerProtectivePlate, -1, "t", ItemID.thermoadaptationCoating, -1, "l", ItemID.localLogicSystem, -1, "s", ItemID.manipulationCable, -1]);
	Recipes.addShaped({id: ItemID.mechanicAdamantiteBoots, count: 1, data: 0}, ["oco", "tlo", "oto"], ["o", ItemID.outerProtectivePlate, -1, "c", ItemID.connectingSystems, -1, "t", ItemID.thermoadaptationCoating, -1, "l", ItemID.localLogicSystem, -1]);
	OresAPI.addShapedRecipeWithFunction([ItemID.mechanicSapphireHelmet, 1, 0], ["ama", "lcl", "ohg"], ["a", ItemID.nuggetMionite, -1, "m", ItemID.advancedMatrixOfHoloSystems, -1, "l", ItemID.advancedOpticalLens, -1, "c", ItemID.centralLogicSystem, -1, "o", ItemID.outerProtectivePlate, -1, "h", ItemID.mechanicAdamantiteHelmet, -1, "g", ItemID.connectingSystems, -1], mechanicArmorRecipeFuncs);
	OresAPI.addShapedRecipeWithFunction([ItemID.mechanicSapphireChestplate, 1, 0], ["ccc", "pap", "ppp"], ["p", ItemID.outerProtectivePlate, -1, "a", ItemID.mechanicAdamantiteChestplate, 0, "c", ItemID.advancedLocalLogicSystem, -1], mechanicArmorRecipeFuncs);
	OresAPI.addShapedRecipeWithFunction([ItemID.mechanicSapphireLeggings, 1, 0], ["ppp", "mam", "pcp"], ["p", ItemID.outerProtectivePlate, -1, "m", ItemID.advancedMovableElements, -1, "a", ItemID.mechanicAdamantiteLeggings, -1, "c", ItemID.advancedLocalLogicSystem, -1], mechanicArmorRecipeFuncs);
	OresAPI.addShapedRecipeWithFunction([ItemID.mechanicSapphireBoots, 1, 0], ["cac", "sss", "ppp"], ["p", ItemID.outerProtectivePlate, -1, "a", ItemID.mechanicAdamantiteBoots, -1, "c", ItemID.advancedLocalLogicSystem, -1, "s", ItemID.crystalSapphire, -1], mechanicArmorRecipeFuncs);
});

const suitTypes = [
    [ItemID.mechanicAdamantiteHelmet,
    ItemID.mechanicAdamantiteChestplate,
    ItemID.mechanicAdamantiteLeggings,
    ItemID.mechanicAdamantiteBoots],
    [ItemID.mechanicSapphireHelmet,
    ItemID.mechanicSapphireChestplate,
    ItemID.mechanicSapphireLeggings,
    ItemID.mechanicSapphireBoots]
];

var currentSuit = 0;
function checkSuit(){
    if(World.getThreadTime()%20 == 0){
        //Game.tipMessage(currentSuit);
        let currentSuitType = (Player.getArmorSlot(0).id == ItemID.mechanicAdamantiteHelmet) ? 
            suitTypes[0] : suitTypes[1];
        for(var i in currentSuitType){
            if(Player.getArmorSlot(i).id != currentSuitType[i]){
                currentSuit = 0;
				Player.setFlyingEnabled(false);
                return false;
            }
        }
    }
    return true;
}

function getExtra(index, slot){
    //Debug.message(index);
    if(currentSuit == index){
        currentSuit++;
    }
    if(!slot.extra){
        //alert("a");
        slot.extra = new ItemExtraData();
        slot.extra.putInt("key", armorExtraData.register(getMechanicArmorParams(slot.id)));
        Player.setArmorSlot(index, slot.id, slot.count, slot.data, slot.extra);
    }
    if(currentSuit == 4&&checkSuit()){
        return armorExtraData.get(slot.extra.getInt("key"));
    }
    return {};
}

function resetArmor(index, slot, amount){
	slot.extra.putInt("energy", ChargeItemRegistry.getEnergyStored(slot, "Eu") - amount);
    Player.setArmorSlot(index, slot.id, slot.count, slot.data, slot.extra);
}

function getModificationEnergyConsumption(str){
    return OresAPI.getConfigValue("mechanic_armor.energy_use_by_modfiers."+str);
}

const IMP_DIVER_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Submariner");
const IMP_PROTECTION_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Reinforced_hull");
const IMP_NIGHTVISION_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Night_vision");
const IMP_FIRE_RESIST_ENERGY_CONSUMTPION = getModificationEnergyConsumption("Refractoriness");
const IMP_DAMAGE_PROTECTION_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Protection_from_damage");
const IMP_SHIELD_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Power_panel");
const IMP_INTEGRATED_JETPACK_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Integrated_jetpack");
const IMP_ACCELERATION_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Acceleration");
const IMP_COMPRESSED_SPACE_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Compressed_Cargo_Space");
const IMP_GENERATOR_ENERGY_CONSUMPTION = getModificationEnergyConsumption("gravity_field_generator");
const IMP_PROTECTER_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Defense_module");
const IMP_POWER_ENERGY_CONSUMPTION = getModificationEnergyConsumption("Power");
const IMP_DESTROY_BLOCK_ENERGY_CONSUMPTION = getModificationEnergyConsumption("The_speed_of_digging");

function mechanicArmorFuncs(j, i1, accelerationLevel){
    return {
        hurt:function(params, slot, index, maxDamage){
            const type = params.type;
			const damage = params.damage;
            var extra = getExtra(index, slot);
            var charge = ChargeItemRegistry.getEnergyStored(slot, "Eu");
            if(index == 0){
                if(type == 9&&charge >= IMP_DIVER_ENERGY_CONSUMPTION&&extra.diver){
                    Game.prevent();
                    Entity.addEffect(Player.get(), PotionEffect.waterBreathing, 0, 3*20, true, true);
                    cilinder(Native.ParticleType.happyVillager, Player.getPosition(), 1);
                    charge -= IMP_DIVER_ENERGY_CONSUMPTION;
                    //return false;
                }
            }
			if(index == 1){
				if(type == 2){
                    if(charge >= IMP_PROTECTION_ENERGY_CONSUMPTION&&extra.protection){
                        const damageConsume = extra.protection*10;
                        Entity.healEntity(Player.get(), damage);
						Entity.damageEntity(Player.get(), Math.floor(damage - (damage/100 * damageConsume)));
                        cilinder(Native.ParticleType.magicCrit, Player.getPosition(), 1);
                        charge -= IMP_PROTECTION_ENERGY_CONSUMPTION;
					}
                    //return true;
                }
            }
            if(charge - ChargeItemRegistry.getMaxCharge(slot.id, "Eu") != 0){
                ChargeItemRegistry.setEnergyStored(slot, charge);
                return true;
            }
            return false;
        },
        tick:function(slot, index){
            let currentTime = World.getThreadTime();
            let time = currentTime%10 == index;
            let c = Player.getPosition();
            let extra = getExtra(index, slot);
            let charge = ChargeItemRegistry.getEnergyStored(slot, "Eu");
            switch(index){
                case 0:
                    if(extra.nightVision){
                        if(charge >= IMP_NIGHTVISION_ENERGY_CONSUMPTION&&World.getLightLevel(c.x, c.y, c.z) < j){
                            Entity.addEffect(Player.get(), PotionEffect.nightVision, 0, 250, true, false);
                            charge -= IMP_NIGHTVISION_ENERGY_CONSUMPTION;
                        }else Entity.clearEffect(Player.get(), PotionEffect.nightVision);
                    }
                	break;
                case 1:
					if(charge >= IMP_FIRE_RESIST_ENERGY_CONSUMTPION&&extra.fireResist){
                        Entity.addEffect(Player.get(), PotionEffect.fireResistance, 0, 30, true, true);
                        if(currentTime%600 == 0) charge -= IMP_FIRE_RESIST_ENERGY_CONSUMTPION;//раз в 5 минут
                    }
                    if(charge >= IMP_DAMAGE_PROTECTION_ENERGY_CONSUMPTION&&extra.damageProtection){
                        let lvl = extra.damageProtection;
                        Entity.clearEffect(Player.get(), PotionEffect.blindness);
                        Entity.clearEffect(Player.get(), PotionEffect.hunger);
                        charge -= IMP_DAMAGE_PROTECTION_ENERGY_CONSUMPTION;
                        
                        if(lvl > 1&&charge >= IMP_DAMAGE_PROTECTION_ENERGY_CONSUMPTION*2){
                            Entity.clearEffect(Player.get(), PotionEffect.weakness);
                            Entity.clearEffect(Player.get(), PotionEffect.confusion);
                            Entity.clearEffect(Player.get(), PotionEffect.movementSlowdown);
                            charge -= IMP_DAMAGE_PROTECTION_ENERGY_CONSUMPTION*2;

                            if(lvl > 2&&charge >= IMP_DAMAGE_PROTECTION_ENERGY_CONSUMPTION*3){
                                Entity.clearEffect(Player.get(), PotionEffect.poison);
                                Entity.clearEffect(Player.get(), PotionEffect.wither);
                                charge -= IMP_DAMAGE_PROTECTION_ENERGY_CONSUMPTION*3;

                                if(Entity.getHealth(Player.get()) < Entity.getMaxHealth(Player.get())){
									if(Math.random() < .15){
										//Entity.addEffect(Player.get(), PotionEffect.regeneration, 4, 10, true, true);
										Entity.healEntity(Player.get(), .5);
									}
                                } 
                            }
                        }
                    }
                    if(charge >= IMP_SHIELD_ENERGY_CONSUMPTION&&extra.shield){
                        Entity.addEffect(Player.get(), PotionEffect.healthBoost, extra.shield, 30, true, true);
                        charge -= IMP_SHIELD_ENERGY_CONSUMPTION;
                    }
                    if(extra.compressedCargoSpace){
                        if(charge >= IMP_COMPRESSED_SPACE_ENERGY_CONSUMPTION){
                            ArmorButtons.enable("compressedCargoSpace");
                            if(CompressedCargoSpace.isOpened) charge -= IMP_COMPRESSED_SPACE_ENERGY_CONSUMPTION;
                        }else{
                            ArmorButtons.disable("compressedCargoSpace");
                        }
                    }     
                    if(extra.integratedJetpack){
                        if(charge >= IMP_INTEGRATED_JETPACK_ENERGY_CONSUMPTION){
                            ArmorButtons.enable("jetpack");
                        }else{
                            ArmorButtons.disable("jetpack");
                        }
                    }
                    break;
                case 2:
					if(charge >= IMP_ACCELERATION_ENERGY_CONSUMPTION&&extra.acceleration){
                        //Debug.message(CURRENT_ACCELERATION_TIMER);
                        var velocity = Player.getVelocity();
                        var horizontalVel = Math.sqrt(velocity.x*velocity.x + velocity.z*velocity.z); 
                        if(horizontalVel > .13){ 
                            if(CURRENT_ACCELERATION_TIMER <= 0){
                                Entity.addEffect(Player.get(), PotionEffect.movementSpeed, accelerationLevel, 30, true, true);
                            }else  CURRENT_ACCELERATION_TIMER--;
                            if(i1){
                                extra = leggingsExtra.protection;
                                if((extra&&World.getThreadTime()%80)/20 == 2){
                                    Entity.addEffect(Player.get(), PotionEffect.damageResistance, extra.protection-1, 50, true, true);
                                    charge -= IMP_ACCELERATION_ENERGY_CONSUMPTION;
                                }
                            }
                        }else CURRENT_ACCELERATION_TIMER = ACCELERATION_TIMEOUT;
                    }
                    break;
                case 3:
                    if(extra.antigravitation){
                        if(charge >= IMP_GENERATOR_ENERGY_CONSUMPTION){
                            Player.setFlyingEnabled(true);
                            if(Player.getFlying()){
                                cilinder(Native.ParticleType.portal, c, .5);
                                charge -= IMP_GENERATOR_ENERGY_CONSUMPTION;
                            }
                        }else{
                            Player.setFlyingEnabled(false);
                        }
                    }
                    break;
            }
            if(time&&charge - ChargeItemRegistry.getMaxCharge(slot.id, "Eu") != 0){
                ChargeItemRegistry.setEnergyStored(slot, charge);
                return true;
            }
            return false;
        }
    }
}

const ACCELERATION_TIMEOUT = 2;
var CURRENT_ACCELERATION_TIMER = 2;

Armor.registerFuncs("mechanicAdamantiteHelmet", mechanicArmorFuncs(13, false, 1));
Armor.registerFuncs("mechanicAdamantiteChestplate", mechanicArmorFuncs(13, false, 1));
Armor.registerFuncs("mechanicAdamantiteLeggings", mechanicArmorFuncs(13, false, 1));
Armor.registerFuncs("mechanicAdamantiteBoots", mechanicArmorFuncs(13, false, 1));
Armor.registerFuncs("mechanicSapphireHelmet", mechanicArmorFuncs(12, true, 2));
Armor.registerFuncs("mechanicSapphireChestplate", mechanicArmorFuncs(12, true, 2));
Armor.registerFuncs("mechanicSapphireLeggings", mechanicArmorFuncs(12, true, 2));
Armor.registerFuncs("mechanicSapphireBoots", mechanicArmorFuncs(12, true, 2));

Callback.addCallback("EntityHurt", function(attacker, victim, damage){
    if(victim == Player.get()){
        let slot = Player.getArmorSlot(0);
        if(slot.id == ItemID.mechanicAdamantiteHelmet || slot.id == ItemID.mechanicSapphireHelmet){
            let extra = getExtra(1, slot);
            if(ChargeItemRegistry.getEnergyStored(slot, "Eu") >= IMP_PROTECTION_ENERGY_CONSUMPTION&&
                    extra.programPROTECTER){
                line(Native.ParticleType.flame, Player.getPosition(), Entity.getPosition(attacker));
                Entity.damageEntity(attacker, 1.5*extra.programPROTECTER);
                resetArmor(1, slot, IMP_PROTECTER_ENERGY_CONSUMPTION);
            } 
        }
    }else{
        if(attacker == Player.get()){
            let slot = Player.getArmorSlot(1);
            if(slot.id == ItemID.mechanicAdamantiteChestplate || slot.id == ItemID.mechanicSapphireChestplate){
                let extra = getExtra(1, slot);
                if(ChargeItemRegistry.getEnergyStored(slot, "Eu") >= IMP_POWER_ENERGY_CONSUMPTION
                        &&extra.power){
                    Entity.damageEntity(victim, Math.floor(damage*(extra.power+1)/2));
                    resetArmor(1, slot, IMP_POWER_ENERGY_CONSUMPTION);
                }
            }
        }
    }
});

var CHECK_DESTROY_BLOCK_START_TIMEOUT = 0;
var LAST_CHESTPLATE_VALIDATION_RESULT = null;

function recheckChestplate(){
	if(LAST_CHESTPLATE_VALIDATION_RESULT == null || Math.random() < 0.08){
		let slot = Player.getArmorSlot(1);
		LAST_CHESTPLATE_VALIDATION_RESULT = 
			slot.id > 0&&
			(slot.id == ItemID.mechanicAdamantiteChestplate || 
			slot.id == ItemID.mechanicSapphireChestplate);
	}
	return LAST_CHESTPLATE_VALIDATION_RESULT;
}

function checkDestroyBlockStartOrContinue(){
	if(recheckChestplate()){
		if(!CHECK_DESTROY_BLOCK_START_TIMEOUT){
			let slot = Player.getArmorSlot(1);
			let extra = getExtra(1, slot);
			if(extra.diggingSpeed&&ChargeItemRegistry.getEnergyStored(slot, "Eu") >= IMP_DESTROY_BLOCK_ENERGY_CONSUMPTION){ 
            	Entity.addEffect(Player.get(), PotionEffect.digSpeed, extra.diggingSpeed-1, 40, true, true);
            	resetArmor(1, slot, IMP_DESTROY_BLOCK_ENERGY_CONSUMPTION);
				LAST_CHESTPLATE_VALIDATION_RESULT = 39;
        	}
		}
	}
}

Callback.addCallback("DestroyBlockStart", function(){
	checkDestroyBlockStartOrContinue();
});

Callback.addCallback("DestroyBlockContinue", function(){
	checkDestroyBlockStartOrContinue();
});

Callback.addCallback("tick", function(){
	if(CHECK_DESTROY_BLOCK_START_TIMEOUT > 0){
		CHECK_DESTROY_BLOCK_START_TIMEOUT--;
	}
});
