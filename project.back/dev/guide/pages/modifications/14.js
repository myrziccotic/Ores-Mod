ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp14", {
        ctrl: "basic",
        elements:[
            Guide.title("Anti-gravity field generator"),
            Guide.text("Fly - so fly!"),
            Guide.text("Installed in shoes", null, null, true)
        ]
    }, {
        ctrl: "basic",
        elements: StringHelper.navigator("desc_main")
    }, {
        preLink: "imp13"
    });
});