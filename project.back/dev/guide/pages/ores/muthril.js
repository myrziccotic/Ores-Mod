ModAPI.addAPICallback("GuideAPI", function(){
    pages["muthril"] = {
        preLink: "ores_main",
        left:{
            controller:Ctrl.ITEM_PAGE,
            items:[
                {id: ItemID.ingotMuthril, data: 0},
                {id: BlockID.oreMuthril, data: 0},
                {id: BlockID.blockMuthril, data: 0}
            ],
            elements:[
                {text: StringHelper.toMain, side: 20, color: Lcolor, underline: true, link: "default"} 
            ]
        },
        right:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: StringHelper.usedInCrafts, size: 15, color: Ncolor},
                {text: StringHelper.adv("not rare, relatively durable and efficient"), size: 14, color: UIColor.rgb(25, 25, 112)},
                {text: StringHelper.disAdv("lower speed than malachite"), size: 14, color: UIColor.RED}
            ]
        }
    }
});