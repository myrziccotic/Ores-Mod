ModAPI.addAPICallback("GuideAPI", function(){
    /*pages["mcg"] = {
        left:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: StringHelper.t("Using molecular converter"), size: 20, color: UIColor.CYAN},
                {text: StringHelper.t("The information panel in the mechanism window displays the current state of the mechanism and helps to understand how the mechanism works."), size: 14, color: Ncolor},
                {text: StringHelper.t("As a result, you will receive an item that was as a result of the reconstruction of matter."), size: 14, color: Ncolor}
            ]
        },
        right:{
            controller: Ctrl.BASIC_PAGE,
            elements:[
                {text: StringHelper.t("At the exit you will receive the item that was recorded in the reconstructed matter."), size: 15, color: Ncolor}
            ]
        },
        preLink: "mcm",
        nextLink: "mechanic_main"
    }*/
	Guide.addPage("mcg", {
		ctrl: "basic",
		elements:[
			Guide.text("Using molecular converter", 20, UIColor.CYAN),
			Guide.text("The information panel in the mechanism window displays the current state of the mechanism and helps to understand how the mechanism works."),
			Guide.text("As a result, you will receive an item that was as a result of the reconstruction of matter.")
		]
		
	}, {
		ctrl: "basic",
		elements:[
			Guide.text("At the exit you will receive the item that was recorded in the reconstructed matter.")
		]
	}, {preLink: "mcm", nextLink: "mech_main"});
});
