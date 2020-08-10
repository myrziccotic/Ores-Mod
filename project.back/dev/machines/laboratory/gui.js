GUI.createObject(Translation.translate("Laboratory Block"));

GUI.addDrawableObject.bitmap("research", {x: 533, y: 153}, 3.6);
GUI.addDrawableObject.bitmap("arrow_bg_bottom", {x: 573, y: 107}, 2);
GUI.addDrawableObject.bitmap("arrow_bg", {x: 693, y: 191}, 3.6);
GUI.addDrawableObject.bitmap("background", {x: 662, y: 143/2}, 3.6);

GUI.addElement.slot("chipSlot", {x: 564, y: 56});

var slots = [
	"burntChipSlot", "splitterChipSlot", 
	"quantomDetectorChipSlot", "densityControllerChipSlot",
	"matterDriveChipSlot"
];
for(var i = 1; i < 6; i++){
	GUI.addElement.slot(slots[i-1], {x: 810, y: 50 * i + 21});
}

GUI.addElement.scale("researchScale", {x: 533, y: 153}, 3, "research_full", 3.6);
GUI.addElement.scale("energyScale", {x: 662+3.6*4, y: 143/2}, 0,"scale", 3.6);

if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 343}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 360}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text("Состояние:", {x: 340, y: 383}, {size: 14, color: UIColor.WHITE});
    GUI.addElement.text("chipListener", {x: 350, y: 410}, 300, 20, StringHelper.t("There should be a research chip in the slot on top"), {color: UIColor.RED, size: 15});
    GUI.addElement.text("mode", {x: ((630+336)/2)+70, y: 371}, 0, 0, StringHelper.t("Idles"), {color: UIColor.YELLOW, size: 14});
}
gui.laboratory = GUI.importScreen();
