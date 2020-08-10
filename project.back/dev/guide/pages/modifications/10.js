ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp10", {
        ctrl: "basic",
        elements:[
            Guide.title("Acceleration"),
            Guide.text("Increases the speed of movement when running"),
            Guide.text("Installed in greaves", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp9",
        nextLink: "imp11"
    });
});