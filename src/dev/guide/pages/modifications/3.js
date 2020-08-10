ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp3", {
        ctrl: "basic",
        elements:[
            Guide.title("Refractoriness"),
            Guide.text("In constant mode, it provides protection from everything that is hot"),
            Guide.text("It is installed in the bib", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp2",
        nextLink: "imp4"
    });
});