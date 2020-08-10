ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("mac", {
		ctrl: "itemPage",
		items:[BlockID.armorCharger, 0],
		elements:[
			Guide.text("Only he is able to charge a mechanical armor")
		]
	}, {
		ctrl: "craftPage",
		title: StringHelper.t("Mechanic Armor Charger"),
		grid: [["r", "r", "r"], ["s", "b", "s"], ["t", "t", "t"]],
		 materials:{
			 "r":{id: 331},
			 "b":{id: 152},
			 "t":{id: ItemID.ingotLead},
			 "s":{id: ItemID.crystalSapphire}
		 }
	}, {
		preLink: "mech_main",
		nextLink: "macg"
	});
});
