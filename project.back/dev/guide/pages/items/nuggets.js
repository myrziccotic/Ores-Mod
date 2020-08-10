ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("nuggets", {
		ctrl: "itemPage",
		items:[
			ItemID.shardLapis, 0,
			ItemID.nuggetLead, 0,
			ItemID.nuggetElectrum, 0,
			ItemID.nuggetMistery, 0
		],
		elements:[
			Guide.text("Most of the nuggets are obtained from the same name full-fledged ingots (in the case of a lapis lazuli fragment - this is a whole lapis lazuli), except for unidentified and electroumovogo nuggets", null, null, null, true)
		]
	}, {
		ctrl: "craftPage",
		title: "",
            recipes: [{
                grid:[["o", "g", "o"], ["r", "s", "r"], ["o", "g", "o"]],
                materials:{
                    "s":{id: ItemID.nuggetLead, data: 0},
                    "r":{id: 331, data: 0},
                    "g":{id: 371, data: 0},
                    "o":{id: 0}
                },
                result:{id: ItemID.nuggetElectrum, data: 0}
            }, {
                grid:[["o", "e", "o"], ["d", "s", "d"], ["o", "e", "o"]],
                materials:{
                    "o":{id: 49, data: 0},
                    "d":{id: 264, data: 0},
                    "s":{id: ItemID.crystalSapphire, data: 0},
                    "e":{id: ItemID.nuggetElectrum, data: 0},
                    "o":{id: 0}
                },
                result:{id: ItemID.nuggetMistery, data: 0}
            }]
	}, {
		preLink: "items_main"
	});
});
