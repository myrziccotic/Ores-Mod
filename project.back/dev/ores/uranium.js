OresAPI.registerOre({
    source:{material: "uranium"},
    ore: OresAPI.createObject("ore", "uranium"),
    translations:{
        source: {ru: "Ураниумовый Слиток"},
        ore: [{ru: "Ураниумовая Руда"}],
        oreBlock: [{ru: "Ураниумовый Блок"}]
    },
    overrideNames:{
        itemColor: 2,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial: OresAPI.createObject("tools", "uranium"),
    recipes:{primary: ItemID.ingotUranium},
    translations:{
        sword: {ru: "Ураниумовый Меч"},
        pickaxe: {ru: "Ураниумовая Кирка"},
        axe: {ru: "Ураниумовый Топор"},
        hoe: {ru: "Ураниумовая Мотыга"},
        shovel: {ru: "Ураниумовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 2
    }
}); 

OresAPI.registerArmor({
    material: "uranium",
    properties: OresAPI.createObject("armor", "uranium"),
    translations:{
        helmet: {ru: "Ураниумовый Шлем"},
        chestplate: {ru: "Ураниумовый Нагрудник"},
        leggings: {ru: "Ураниумовые Поножи"},
        boots: {ru: "Ураниумовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 2
    }
});
