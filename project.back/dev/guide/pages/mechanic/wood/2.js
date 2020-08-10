ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("wig", {
		ctrl: "basic",
		elements:[
			Guide.title("Use of a wood incubator"),
			Guide.text("List of supported seedlings and catalysts on the right page.", null, null, null, true),
			Guide.text("Before using the mechanism, you need to place a block of earth or dirt next to it."),
			Guide.text("In the window of the mechanism, approximately in the middle, there is a red rectangle."),
			Guide.text("You need to work only with slots from the left of this rectangle.", null, null, null, true),
			Guide.text("A sapling is placed in the top slot; in the right - the catalyst"),
			Guide.text("If you did everything correctly, then a sapling will appear on the dirt block, and the red rectangle will turn green."),
			Guide.text("I remind you that the mechanism consumes energy, nothing will work without it."),
			Guide.text("The red box is the growth progress bar. When progress is completed - you will receive a tree, seedlings and a special drop, if there is one.")
		]
	}, {
		ctrl: "basic",
		elements:[
			Guide.text("Saplings:", 20, null, true),
			Guide.text("Currently supported saplings from Minecraft and Industrial Craft"),
			Guide.text("Catalysts:", 20, null, true),
			Guide.text("Bone flour."),
			Guide.text("The catalyst is used to accelerate the growth of the tree, its use is not necessary", null, UIColor.RED, null, true),
			Guide.link("To back", "wim")
		]
	}, {});
});
