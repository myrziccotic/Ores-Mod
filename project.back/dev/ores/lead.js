OresAPI.registerOre({
    source:{material: "lead"},
    ore: OresAPI.createObject("ore", "lead"),
    translations:{
        source: {ru: "Свинцовый Слиток"},
        ore: [{ru: "Свинцовая Руда"}],
        oreBlock: [{ru: "Свинцовый Блок"}]
    },
    overrideNames:{
        itemColor: 9,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial: OresAPI.createObject("tools", "lead"),
    recipes:{primary: ItemID.ingotLead},
    translations:{
        sword: {ru: "Свинцовый Меч"},
        pickaxe: {ru: "Свинцовая Кирка"},
        axe: {ru: "Свинцовый Топор"},
        hoe: {ru: "Свинцовая Мотыга"},
        shovel: {ru: "Свинцовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 9
    }
}); 

OresAPI.registerArmor({
    material: "lead",
    properties: OresAPI.createObject("armor", "lead"),
    translations:{
        helmet: {ru: "Свинцовый Шлем"},
        chestplate: {ru: "Свинцовый Нагрудник"},
        leggings: {ru: "Свинцовые Поножи"},
        boots: {ru: "Свинцовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 9
    }
});
