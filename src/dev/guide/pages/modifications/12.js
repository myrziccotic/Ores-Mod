ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp12", {
        ctrl: "basic",
        elements:[
            Guide.title("Submariner"),
            Guide.text("You can't drown yourself"),
            Guide.text("Installed in the helmet", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp11",
        nextLink: "imp13"
    });
});