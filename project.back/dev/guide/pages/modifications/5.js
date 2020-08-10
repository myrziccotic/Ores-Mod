ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp5", {
        ctrl: "basic",
        elements:[
            Guide.title("Power panel"),
            Guide.text("In constant mode provides additional health"),
            Guide.text("It is installed in the bib", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp4",
        nextLink: "imp6"
    });
});