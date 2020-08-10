GUI.createObject("Модификатор Брони");

GUI.addElement.slot("armorSlot", {x: 500, y: 240});

GUI.addElement.slot("slot1", {x: 1100, y: 1100}, 50);
GUI.addElement.slot("slot2", {x: 1100, y: 1100}, 50);
GUI.addElement.slot("slot3", {x: 1100, y: 1100}, 50);
GUI.addElement.slot("slot4", {x: 1100, y: 1100}, 50);
GUI.addElement.slot("slot5", {x: 1100, y: 1100}, 50);
GUI.addElement.slot("flaskSlot", {x: 430, y: 80}, 50);

GUI.addDrawableObject.frame({x: 732, y: 53}, "classic_frame_input", 240, 400, 3.6);
GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 640, y: 80}, 3.6);

GUI.addElement.scale("EuScale", {x: 640, y: 80}, 1, "energy_scale", 3.6);
    
GUI.addElement.text("logo", {x: 802, y: 63}, 0, 0, "__console__", {size: 15, color: UIColor.YELLOW});
GUI.addElement.text("isLocked", {x: 742, y: 83}, 1, 1, "", {size: 15, color: UIColor.parseColor("#8B0000"), shadow: 0.2});
GUI.addElement.text("imp", {x: 742, y: 103}, 1, 1, "", {size: 15, color: UIColor.parseColor("#8B0000"), shadow: 0.2});
GUI.addElement.text("impLvl", {x: 742, y: 123}, 1, 1, "", {size: 15, color: UIColor.parseColor("#8B0000"), shadow: 0.2});
GUI.addElement.text("modeShower", {x: 742, y: 223}, 1, 0, "Простаивает", {size: 15, color: UIColor.parseColor("#8B0000")});
GUI.addElement.text("processModeShower", {x: 742, y: 243}, 1, 0, "Простаивает", {size: 15, color: UIColor.parseColor("#8B0000")});

GUI.addClicker("slot1", updateStrings("slot1"));
GUI.addClicker("slot2", updateStrings("slot2"));
GUI.addClicker("slot3", updateStrings("slot3"));
GUI.addClicker("slot4", updateStrings("slot4"));
GUI.addClicker("slot5", updateStrings("slot5"));

gui.armorImplantationTable = GUI.importScreen();

function updateStrings(slot){return {onClick:function(position, container, tileEntity){UPDATE_NEEDED = slot;}}}