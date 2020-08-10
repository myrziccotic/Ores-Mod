ModAPI.addAPICallback("GuideAPI", function(){
    /*pages["ores_main"] = {
        left:{
            controller:Ctrl.BASIC_PAGE,
            elements:[
                {text: StringHelper.ore(1), size: 20, color: Lcolor, link: "adamantite", underline: true},
                {text: StringHelper.ore(2), size: 20, color: Lcolor, link: "lead", underline: true},
                {text: StringHelper.ore(3), size: 20, color: Lcolor, link: "malachite", underline: true},
                //{text: StringHelper.ore(4), size: 20, color: Lcolor, link: "muthril", underline: true},
                {text: StringHelper.ore(5), size: 20, color: Lcolor, link: "sapphire", underline: true},
                {text: StringHelper.ore(6), size: 20, color: Lcolor, link: "uranium", underline: true}
            ]
        },
        preLink: "default"
    }*/
	Guide.addPage("ores_main", {
		ctrl: "basic",
		elements:[
			Guide.link("Adamantite", "adamantite"),
			Guide.link("Lead", "lead"),
			Guide.link("Malachite", "malachite"),
			Guide.link("Sapphire", "sapphire"),
			Guide.link("Uranium", "uranium")
		]
	}, {}, {preLink: "default"});
});
