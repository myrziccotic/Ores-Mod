ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp13", {
        ctrl: "basic",
        elements:[
            Guide.title("Integrated jetpack"),
            Guide.text("Well, sometimes you can take content from Industrial Craft"),
            Guide.text("It is installed in the bib", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp11",
        nextLink: "imp14"
    });
});