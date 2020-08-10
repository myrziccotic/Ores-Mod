ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("chips", {
		ctrl: "itemPage",
		items:[
			ItemID.researchChip, 0,
			ItemID.burntChip, 0,
			ItemID.quantomDetectorChip, 0,
			ItemID.densityControllerChip, 0,
			ItemID.matteryDrive, 0
		],
		elements:[
            {text: StringHelper.t("Chips"), color: Ncolor, size: 20, bold: true},
            {text: StringHelper.t("Receiving:"), color: Ncolor, size: 14, underline: true},
            {text: Translation.translate("Laboratory Block"), color: Ncolor, size: 17, bold: true, link: "lbm"},
            {text: StringHelper.t("Application:"), color: Ncolor, size: 14, underline: true},
            {text: StringHelper.t("Creating mechanisms"), color: Ncolor, size: 17, bold: true}
        ]
	}, {
		ctrl: "craftPage",
		title: Translation.translate("Research Chip"),
            recipes:[{
                grid:[["t", "r", "t"], ["r", "s", "r"], ["t", "r", "t"]],
                materials:{
                    "t":{id: ItemID.ingotLead, data: 0},
                    "r":{id: 331, data: 0},
                    "s":{id: 265, data: 0}
                },
                result:{id: ItemID.researchChip, count: 4, data: 0}
            }]
	}, {preLink: "items_main"});
});
