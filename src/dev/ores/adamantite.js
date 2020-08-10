OresAPI.registerOre({
    source:{material: "adamantite"},
    ore: OresAPI.createObject("ore", "adamantite"),
    translations:{
        source: {ru: "Адамантитовый Слиток"},
        ore: [{ru: "Адамантитовая Руда"}],
        oreBlock: [{ru: "Адамантитовый Блок"}]
    },
    overrideNames:{
        itemColor: 4,
        source:{standart: true},
        ore:{standart: true},
        oreBlock:{standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial: OresAPI.createObject("tools", "adamantite"),
    recipes:{primary: ItemID.ingotAdamantite},
    translations:{
        sword: {ru: "Адамантитовый Меч"},
        pickaxe: {ru: "Адамантитовая Кирка"},
        axe: {ru: "Адамантитовый Топор"},
        hoe: {ru: "Адамантитовая Мотыга"},
        shovel: {ru: "Адамантитовая Лопата"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 4
    }
}); 

OresAPI.registerArmor({
    material: "adamantite",
    properties: OresAPI.createObject("armor", "adamantite"),
    translations:{
        helmet: {ru: "Адамантитовый Шлем"},
        chestplate: {ru: "Адамантитовый Нагрудник"},
        leggings: {ru: "Адамантитовые Поножи"},
        boots: {ru: "Адамантитовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: 4
    }
});
