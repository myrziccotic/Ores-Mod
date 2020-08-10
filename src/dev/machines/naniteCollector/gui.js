GUI.createObject(Translation.translate("Nanite Collector"));

GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 563, y: 82}, 3.6);
GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 602, y: 82}, 3.6);
GUI.addElement.slot("mainSource", {x: 531, y: 152}, 50, false, function(id, count, data){return id == 265});
GUI.addElement.slot("box", {x: 586, y: 152});
GUI.addElement.slot("redstone", {x: 586+55, y: 152}, 50, false, function(id, count, data){return id == 331});
GUI.addElement.text("progressText", {x: 586, y: 202}, 1, 1, "0%", {size: 50, color: UIColor.RED});
GUI.addElement.slot("result", {x: 586, y: 271}, 50, false, function(){return false});
GUI.addElement.scale("energyScale", {x: 563, y: 82}, 1, "energy_scale", 3.6);
GUI.addElement.scale("matterScale", {x: 602, y: 82}, 1, "blue_energy_scale", 3.6);

gui.naniteCollector = GUI.importScreen();