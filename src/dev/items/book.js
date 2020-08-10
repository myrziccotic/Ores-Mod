OresAPI.registerItem("oresModGuideBook", "Guide Book", {name: "guide"}, {ru: "Книга-руководитель"}, {stack: 1}, {
    colorName: "b",
    dontShowData: true,
    prefix:{standart:true, itemType: "item"},
    other:function(){
        return (GuideAPI)?"":"§8Нужен GuideAPI!";
    }
});
