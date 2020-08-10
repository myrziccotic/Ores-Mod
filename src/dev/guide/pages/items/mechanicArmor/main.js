ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("mamain", {
        ctrl: "basic",
        elements:[
            Guide.link("Adamantite mechanical armor", "maa"),
            Guide.link("Sapphire mechanical armor", "mas")
        ]
    }, {}, {
        preLink: "items_main"
    });
});