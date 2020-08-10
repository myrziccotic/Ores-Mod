OresAPI.registerItem("researchChip", "Research Chip", {name: "researchChip"}, {ru: "Исследовательская Микросхема"}, {}, defaultItemNameOverride("a", "item"));
OresAPI.registerItem("burntChip", "Burnt Chip", {name: "burntChip"}, {ru: "Прожжённая Микросхема"}, {isTech: true}, defaultItemNameOverride("c", "item"));
OresAPI.registerItem("splitterChip", 'Chip "Quantum Splitter"', {name: "splitter"}, {ru: "Микросхема \"Квантовый Расщипитель\""}, {}, defaultItemNameOverride(5, "item"));
OresAPI.registerItem("quantomDetectorChip", 'Chip "Quantom Detector"', {name: "detector"}, {ru: 'Микросхема "Квантовый Детектор"'}, {}, defaultItemNameOverride(4, "item"));
OresAPI.registerItem("densityControllerChip", 'Chip "Density Controller"', {name: "densityTransformer"}, {ru: "Микросхема \"Контроллер Плотности\""}, {}, defaultItemNameOverride(3, "item"));
OresAPI.registerItem("matteryDrive", "Drive Quantum Energy", {name: "drive"}, {ru: "Накопитель Квантовой Энергии"}, {}, defaultItemNameOverride(1, "item"));

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([ItemID.researchChip, 4, 0], ["trt", "rsr", "trt"], ["t", ItemID.ingotLead, -1, "r", 331, 0, "s", 265, 0]);
});
