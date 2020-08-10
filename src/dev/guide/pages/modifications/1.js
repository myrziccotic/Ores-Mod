ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp1", {
		ctrl: "basic",
		elements:[
			Guide.title("Builder"),
			Guide.text("This modification is designed to unlock modification slots.")
		]
	}, {
		ctrl: "basic",
		elements: StringHelper.navigator("desc_main")
	}, {
		preLink: "desc_main",
		nextLink: "imp2"
	});
});
