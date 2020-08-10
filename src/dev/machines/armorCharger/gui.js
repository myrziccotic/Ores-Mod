GUI.createObject(Translation.translate("Mechanic Armor Charger"));

GUI.addDrawableObject.bitmap("background", {x: 743, y: 141}, 3.6);
GUI.addElement.text("energyText", {x: 743, y: 202}, 1, 1, "0/30000 Eu", {color: UIColor.parseColor("#40E0D0")});
GUI.addElement.scale("energyScale", {x: 743+3.6*4, y: 141}, 0, "scale", 3.6);
GUI.addElement.slot("slot", {x: 484, y: 162}, 120, false, function(id, count, data){
    return data > 0&&typeof getMechanicArmorParams(id) == "object";

});
GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 512, y: 62}, 6.3);
GUI.addElement.scale("modeShower", {x: 512, y: 62}, 1, "energy_scale", 6.3);
GUI.addDrawableObject.bitmap("red_scale", {x: 494, y: 278}, 3.2);
GUI.addElement.scale("energyItemScale", {x: 494, y: 278}, 0, "green_scale", 3.2);

gui.armorCharger = GUI.importScreen();