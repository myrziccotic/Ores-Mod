ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp8", {
        ctrl: "basic",
        elements:[
            Guide.title("Defense module"),
            Guide.text("Deals retaliatory damage to creatures attacking you"),
            Guide.text("Installed in the helmet", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp7",
        nextLink: "imp9"
    });
});