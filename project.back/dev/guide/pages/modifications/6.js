ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp6", {
        ctrl: "basic",
        elements:[
            Guide.title("Night vision"),
            Guide.text("Automatically provides perfect visibility in the dark"),
            Guide.text("Installed in the helmet", null, null, true)
        ]
    }, {
        ctrl: "basic", 
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp5",
        nextLink: "imp7"
    });
});