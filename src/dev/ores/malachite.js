OresAPI.registerOre({
    source:{material: "malachite"},
    ore: OresAPI.createObject("ore", "malachite"),
    translations:{
        source: {ru: "Малахитовый Слиток"},
        ore: [{ru: "Малахитовая Руда"}],
        oreBlock: [{ru: "Малахитовый Блок"}]
    },
    overrideNames:{
        itemColor: "a",
        source: {standart: true},
        ore: {standart: true},
        oreBlock: {standart: true}
    }
});

OresAPI.registerTools({
    toolMaterial: OresAPI.createObject("tools", "malachite"),
    recipes: {primary: ItemID.ingotMalachite},
    translations:{
        sword: {ru: "Малахитовый Меч"},
        pickaxe: {ru: "Малахитовая Кирка"},
        shovel: {ru: "Малахитовая Лопата"},
        axe: {ru: "Махалитовый Топор"},
        hoe: {ru: "Малахитовая Мотыга"}
    },
    overrideNames:{
        standart: true,
        itemsColor: "a"
    }
});

OresAPI.registerArmor({
    material: "malachite",
    properties:{
       durability: OresAPI.getConfigValue("malachite.tools.durability"),
        helmet: {armor: OresAPI.getConfigValue("malachite.armor_points.helmet")},
        chestplate: {armor: OresAPI.getConfigValue("malachite.armor_points.chestplate")},
        leggings: {armor: OresAPI.getConfigValue("malachite.armor_points.leggings")},
        boots: {armor: OresAPI.getConfigValue("malachite.armor_points.boots")}
    },
    translations:{
        helmet: {ru: "Малахитовый Шлем"},
        chestplate: {ru: "Малахитовый Нагрудник"},
        leggings: {ru: "Малахитовые Поножи"},
        boots: {ru: "Малахитовые Ботинки"}
    },
    overrideNames:{
        standart: true,
        itemsColor: "a"
    }
});
