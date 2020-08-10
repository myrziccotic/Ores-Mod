ModAPI.addAPICallback("GuideAPI", function(){
    Guide.addPage("aitg", {
        ctrl: "basic",
        elements:[
            Guide.title("The use of Desk trainer armor"),
            Guide.text("When you open the mechanism window, you will see two slots."),
            Guide.text("Only a flask with trained nanites is installed in the upper slot"),
            Guide.text("only mechanical armor is installed in the center slot."),
            Guide.text("after installing the mechanical armor in the slot, a certain number of new slots will appear, these are conditional cells of modifications."),
            Guide.text("clicking on the conditional modification slots will show you their status in the form of text information, if the slot is blocked - it needs to be unlocked by the nanites of the \"Builder\" specialization before the modification can be implemented in it.")  
        ]
    }, {
        ctrl: "basic",
        elements:[
            Guide.text("all implemented modifications cannot be extracted or replaced, only improved by re-introducing nanites of the same specialization.")
        ]
    }, {
        preLink: "aitm",
        nextLink: "mech_main"
    });
});