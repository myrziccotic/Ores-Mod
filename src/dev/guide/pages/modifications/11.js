ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp11", {
        ctrl: "basic",
        elements:[
            Guide.title("Compressed Cargo Space"),
            Guide.text("Provides a storage of items that is always nearby."),
            Guide.text("Increasing the level increases the cargo space capacity"),
            Guide.text("It is installed in the bib", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp10",
        nextLink: "imp12"
    });
});