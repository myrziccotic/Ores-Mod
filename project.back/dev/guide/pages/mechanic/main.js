ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("mech_main", {
        ctrl: "basic",
        elements:[
            Guide.link("Solar Panels", "solar_main"),
            Guide.link("Wood Incubator", "wim"),
		 	Guide.link("Laboratory Block", "lbm"),
            Guide.link("Molecular Generator", "mgm"),
            Guide.link("Molecular Sealer", "msm"),
            Guide.link("Matter Reenactor", "mrm"),
            Guide.link("Molecular Converter", "mcm"),
			Guide.link("Nanite Collector", "ncm"),
			Guide.link("Nanite Training Node", "ntnm"),
            Guide.link("Armor Implantation Table", "aitm"),
            //Guide.link("Mechanic Armor Charger", "mac")
        ]
    }, {}, {preLink: "default"});
}); 
