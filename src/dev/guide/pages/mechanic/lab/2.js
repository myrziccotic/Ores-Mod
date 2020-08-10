ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("lbg", {
        ctrl: "basic",
        elements:[
            Guide.title("Using a laboratory block"),
            Guide.text("For the mechanism to work, you need to: keep the mechanism charged with energy and place the research chips in the upper slot.")
        ]
    }, {}, {
        preLink: "lbm",
        nextLink: "mech_main"
    });
});
