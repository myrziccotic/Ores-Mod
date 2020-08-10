OresAPI.registerItem("emptyFlask", "Empty Flask", {name: "flask", data: 1}, {ru: "Пустая капсула"}, {stack: 8, isTech: true}, defaultItemNameOverride(7, "item"));

OresAPI.registerItem("flaskWithNanites", "Flask With Nanites", {name: "flask", data: 8}, {ru: "Капсула с Нанитами"}, {stack: 1, isTech: true}, defaultItemNameOverride("b", "item"));

Callback.addCallback("PostLoaded", function(){    
    Recipes.addShaped({id: ItemID.emptyFlask, count: 8, data: 0}, ["xxo"], ["x", 20, 0], function(api, f, result){
        result.data = random(1, 7);
    });
});
 

OresAPI.registerItem("flaskWithTrainedNanites", "Flask With Trained Nanites", {name: "flask", data: 1}, {ru: "Капсула С Обученными нанитами"}, {isTech: true, glint: true, stack: 1}, {
    colorName: "5",
	dontShowData: true,
    prefix:{standart: true, itemType: "item"},
    other:function(item, name){
        if(!item.extra) return name;
        let key = item.extra.getString("implantation");
        return "§7специализация: §"+implantations[key].itemColor+implantations[key].name+"\n"
    }
}); 

setRequiresIconOverride(ItemID.flaskWithNanites, true);
setRequiresIconOverride(ItemID.flaskWithTrainedNanites, true);
        
var getRandomFullFlaskTexture = function(data){
    let textures = [];
    switch(data){
        case 1:
            textures = [8, 15, 22, 29, 36, 43];
        break;
        case 2:
            textures = [9, 16, 23, 30, 37, 44];
        break;
        case 3:
            textures = [10, 17, 24, 31, 38, 45];
        break;
        case 4:
            textures = [11, 18, 25, 32, 39, 46];
        break;
        case 5:
            textures = [12, 19, 26, 33, 40, 47];
        break;
        case 6:
            textures = [13, 20, 27, 34, 41, 48];
        break;
        case 7:
            textures = [14, 21, 28, 35, 42, 49];
    }
    return textures[random(0, 5)];
}

Item.registerIconOverrideFunction(ItemID.emptyFlask, function(item){
    if(item.data > 0){
        return {name: "flask", meta: item.data};
    }
});
  
Item.registerIconOverrideFunction(ItemID.flaskWithNanites, function(item) {
    if(item.data > 7){
        return {name: "flask", meta: item.data};
    }
});

Item.registerIconOverrideFunction(ItemID.flaskWithTrainedNanites, function(item) {
    return {name: "flask", meta: item.data};
});
