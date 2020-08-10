OresAPI.registerOre({
    source:{material: "sapphire", sourceType: "crystal"},
    ore: OresAPI.createObject("ore", "sapphire"),
	oreDrop: [[ItemID.crystalSapphire, 2, 0]],
    translations:{
        source: {ru: "Сапфировый Кристалл"},
        ore: [{ru: "Сапфировая Руда"}],
        oreBlock: [{ru: "Сапфировый Блок"}]
    },
    overrideNames:{
        itemColor: 1,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial: OresAPI.createObject("tools", "sapphire"),
    recipes:{primary: ItemID.crystalSapphire},
    translations:{
        sword: {ru: "Сапфировый Меч"},
        pickaxe: {ru: "Сапфировая Кирка"},
        axe: {ru: "Сапфировый Топор"},
        hoe: {ru: "Сапфировая Мотыга"},
        shovel: {ru: "Сапфировая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 1
    }
}); 

OresAPI.registerArmor({
    material: "sapphire",
    materialID: "crystalSapphire",
    properties: OresAPI.createObject("armor", "sapphire"),
    translations:{
        helmet: {ru: "Сапфировый Шлем"},
        chestplate: {ru: "Сапфировый Нагрудник"},
        leggings: {ru: "Сапфировые Поножи"},
        boots: {ru: "Сапфировые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 1
    }
});
