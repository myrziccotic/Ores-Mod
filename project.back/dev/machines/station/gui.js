//legacy
GUI.createObject(Translation.translate("Production Station"));

GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 370, y: 132}, 3.6);
GUI.addDrawableObject.bitmap("arrow_bg", {x: 500, y: 132}, 3.6);
GUI.addDrawableObject.bitmap("liquid_scale_bg", {x: 580, y: 90}, 3.6);
GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 420, y: 132}, 3.6);
GUI.addDrawableObject.bitmap("arrow_bg_bottom", {x: 585, y: 300}, 3.6);

GUI.addElement.scale("energyScale", {x: 370, y: 132}, 1, "energy_scale", 3.6);
GUI.addElement.scale("quantomScale", {x: 420, y: 132}, 1, "blue_energy_scale", 3.6);
GUI.addElement.scale("suntheticScale", {x: 500, y: 132}, 0, "arrow_scale", 3.6);
GUI.addElement.scale("progressScale", {x: 585, y: 300}, 3, "arrow_scale_bottom", 3.6);
GUI.addElement.scale("liquidScale", {x: 594, y: 101}, 1, "liquid_scale", 3.7);
GUI.addElement.slot("source", {x: 590, y: 40});
GUI.addElement.slot("result", {x: 592, y: 380});

gui.processStation = GUI.importScreen();