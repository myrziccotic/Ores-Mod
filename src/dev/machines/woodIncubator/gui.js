GUI.createObject(StringHelper.t("Wood Incubator"));

GUI.addDrawableObject.bitmap("red_scale", {x: 564, y: 154}, 4.2);
GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 563, y: 112}, 3.2);
GUI.addElement.scale("processScale", {x: 564, y: 154}, 0, "green_scale",4.2);
GUI.addElement.scale("energyScale", {x: 563, y: 112}, 1, "energy_scale", 3.2);
GUI.addElement.slot("materialSlot", {x: 500, y: 137}, 50);
GUI.addElement.slot("engineSlot", {x: 500, y: 187}, 50);
GUI.addElement.slot("inputSlot", {x: 723, y: 164}, 50);
GUI.addElement.slot("saplingSlot", {x: 723, y: 114}, 50);
GUI.addElement.slot("specialSlot", {x: 723, y: 214}, 50);

gui.woodIncubator = GUI.importScreen();


