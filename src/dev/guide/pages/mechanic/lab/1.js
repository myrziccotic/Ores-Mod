ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("lbm", {
		ctrl: "itemPage",
		items: [BlockID.labBlock, 0],
		elements: [
			Guide.text("The only source of chips")
		]
	}, {
		ctrl: "craftPage",
		 title: Translation.translate("Laboratory Block"),
            recipes:[{
                grid:[["s", "g", "s"], ["i", "r", "i"], ["r", "d", "r"]],
                materials:{
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "d":{id: 54, data: 0},
                    "i":{id: 42, data: 0},
                    "r":{id: 152, data: 0},
                    "g":{id: 20, data: 0}
                },
                result: {id: BlockID.labBlock, data: 0}
            }]
	}, {
		preLink: "mech_main",
		nextLink: "lbg"
	});
});
