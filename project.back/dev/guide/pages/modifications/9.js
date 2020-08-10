ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp9", {
        ctrl: "basic",
        elements:[
            Guide.title("The speed of digging"),
            Guide.text("Automatically activated when blocks are broken"),
            Guide.text("It is installed in the bib", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp8",
        nextLink: "imp10"
    });
});