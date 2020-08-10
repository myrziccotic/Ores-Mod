ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("comp_main", {
        ctrl: "basic",
        elements:[
            Guide.link("Connecting Systems", "c1"),
            Guide.link("Optical Lens", "c2"),
            Guide.link("Central Logic System", "c3"),
            Guide.link("Local Logic System", "c4"),
            Guide.link("Matrix Of Holographics Systems", "c5"),
            Guide.link("Manipulation Cable", "c6"),
            Guide.link("Thermoadaptation Coating", "c7"),
            Guide.link("Outer Protective Plate", "c8")
        ]
    }, {
        ctrl: "basic",
        elements: [
            Guide.link("Advanced Connecting Systems", "c9"),
            Guide.link("Advanced Optical Lens", "c10"),
            Guide.link("Advanced Matrix Of Holo Systems", "c11"),
            Guide.link("Advanced Movable Elements", "c12")
        ]
    }, {
        preLink: "items_main"
    });
});
