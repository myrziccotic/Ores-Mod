ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("ores_main", {
		ctrl: "basic",
		elements:[
			Guide.link("Adamantite", "adamantite"),
			Guide.link("Lead", "lead"),
			Guide.link("Malachite", "malachite"),
			Guide.link("Sapphire", "sapphire"),
            Guide.link("Uranium", "uranium"),
            Guide.link("Lavarite", "lavarite"),
            Guide.link("Leotite", "leotite"),
            Guide.link("Mionite", "mionite")
		]
	}, {}, {preLink: "default"});
});
