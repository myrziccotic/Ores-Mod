ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("imp2", {
		ctrl: "basic",
		elements:[
			Guide.title("Power"),
			Guide.text("This modification will cause additional damage to the enemy"),
			Guide.text("It is installed in the bib", null, null, true)
		]
	}, {
		ctrl: "basic",
		elements: StringHelper.navigator("desc_main")
	}, {
		preLink: "imp1",
		nextLink: "imp3"
	});
});
