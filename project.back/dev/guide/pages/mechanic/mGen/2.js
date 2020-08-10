ModAPI.addAPICallback("GuideAPI", function(){
    /*pages["mgg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: StringHelper.t("Using a molecular generator"), size: 21, color: UIColor.CYAN, bold: true},
                {text: StringHelper.t("Working with this mechanism is the easiest"), size: 14, color: Ncolor},
                {text: StringHelper.t("In the interface of the mechanism there are many slots, in these slots are placed any items that the mechanism will turn into energy."), size: 14, color: Ncolor},
                {text: StringHelper.t("The mechanism does not consume Eu-energy."), underline: true, size: 14, color: Ncolor},
                {text: StringHelper.t("The removal of energy is carried out by attaching a special conductor to the upper side of the mechanism."), color: Ncolor}
            ]
        },
        preLink: "mgm",
        nextLink: "mechanic_main"
    }*/
	Guide.addPage("mgg", {
		ctrl: "basic",
		elements:[
			Guide.title("Using a molecular generator"),
			Guide.text("Working with this mechanism is the easiest."),
			Guide.text("In the interface of the mechanism there are many slots, in these slots are placed any items that the mechanism will turn into energy."),
			Guide.text("The mechanism does not consume Eu-energy.", null, null, null, true),
			Guide.text("The removal of energy is carried out by attaching a special conductor to the upper side of the mechanism.")
		]
	}, {}, {
		preLink: "mgm",
        nextLink: "mech_main"
	});
});
