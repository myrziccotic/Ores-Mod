ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp7", {
        ctrl: "basic",
        elements:[
            Guide.title("Reinforced hull"),
            Guide.text("Absorbs part of the received damage"),
            Guide.text("It is installed in the bib", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp6",
        nextLink: "imp8"
    });
});