OresAPI.registerItem("Oresmatter", "Matter", {name: "mattery"}, {ru: "Материя"}, {}, defaultItemNameOverride("e", "item"));
OresAPI.registerItem("rebuiltMatter", "Matter", {name: "mattery", data: 1}, {}, {stack: 1, isTech: true, glint: true}, {
    colorName: "5",
	dontShowData: true,
    prefix:{
        standart: true,
        itemType: "item"
    },
    other:function(item, name){
        if(item.extra){
            return "§7item: "+ Translation.translate(Item.getName(item.extra.getInt("id")))/*+ " data: "+ item.extra.getInt("data")*/;
        }
    }
});
