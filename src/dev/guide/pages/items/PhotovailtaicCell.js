ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("PhotovailtaicCell", {
		ctrl: "itemPage",
		items:[ItemID.cellPhotovailtaic, 0],
		elements:[
			Guide.text("Application:", null, null, null, true),
			Guide.text("Creating mechanisms", null, null, true)
		]
	}, {
		ctrl: "craftPage",
		title: StringHelper.t("Photovailtaic Cell"),
            recipes:[{
                grid:[["g", "g", "g"], ["l", "l", "l"], ["i", "i", "i"]],
                materials:{
                    "g":{id: 102, data: 0},
                    "l":{id: ItemID.shardLapis, data: 0},
                    "i":{id: 452, data: 0}
                },
                result: {id: ItemID.cellPhotovailtaic, data: 0}
            }]
	}, {
		preLink: "items_main"
	});
});
