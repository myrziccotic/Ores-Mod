ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp4", {
        ctrl: "basic",
        elements:[
            Guide.title("Protection from damage"),
            Guide.text("    At the first level it protects against blindness and food poisoning"),
            Guide.text("    At the second level, it neutralizes slowing down, nausea and weakness"),
            Guide.text("    At the last level it protects against poisoning and desiccation"),
            Guide.text("It is installed in the bib", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp3",
        nextLink: "imp5"
    });
});