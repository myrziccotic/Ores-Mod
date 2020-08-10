ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("cores", {
		ctrl: "itemPage",
		items:[
			ItemID.solarCoreLeadstone, 0,
			ItemID.solarCoreHardent, 0,
			ItemID.solarCoreRedstone, 0,
			ItemID.solarCoreResonant, 0,
			ItemID.solarCoreAdvanced, 0,
			ItemID.solarCoreUltimate, 0
		],
		elements:[Guide.text("Used in the creation of solar panels", null, null, true)]
	}, {
		ctrl: "craftPage",
		title: "",
            recipes:[{
                grid:[["o", "n", "o"], ["n", "i", "n"], ["o", "n", "o"]],
                materials:{
                    "i":{id: 265, data: 0},
                    "n":{id: ItemID.nuggetLead, data: 0}
                },
                result:{id: ItemID.solarCoreLeadstone, data: 0}
            }],
			elements:[
				Guide.text("To find out the recipe for higher level kernels, put the core one level less in inventory and open the inventory.", null, null, null, true),
				Guide.text("For example, to find out the recipe for the core of a hardened solar panel - take the lead core and open the workbench.")
			]
	}, {
		preLink: "items_main"
	});
});
