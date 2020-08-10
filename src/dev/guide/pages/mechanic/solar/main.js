ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("solar_main", {
        ctrl: "basic",
        elements:[
            Guide.link("Leadstone", "leadstone"),
            Guide.link("Hardent", "hardent"),
            Guide.link("Redstone", "redstone"),
            Guide.link("Resonant", "resonant"),
            Guide.link("Advanced", "advanced"),
            Guide.link("Ultimate", "ultimate")
        ]
    }, {}, {
        preLink: "mech_main"
    });
});
