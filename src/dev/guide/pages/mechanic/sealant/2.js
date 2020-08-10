ModAPI.addAPICallback("GuideAPI", function(){
	Guide.addPage("msg", {
		ctrl: "basic",
		elements:[
			Guide.title("The use of molecular sealer."),
			Guide.text("The operation of this mechanism is fully automatic, you just need to maintain working conditions."),
			Guide.text("In order for the mechanism to accept QE-energy, you need to connect a wire to it to the upper side."),
			Guide.text("The mechanism itself begins to work when the energy inside it is greater than 0.")
		]
	}, {
		ctrl: "basic",
		elements:[
			Guide.text("The redstone signal stops the operation of the mechanism, but at the same time it will still be able to absorb energy.")
		]
	}, {
		preLink: "msm",
        nextLink: "mech_main"
	});
});
