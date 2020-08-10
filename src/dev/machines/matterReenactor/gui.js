GUI.createObject(Translation.translate("Matter Reenactor"));

GUI.addDrawableObject.bitmap("arrow_bg", {x: 533, y: 153}, 3.2);
GUI.addDrawableObject.bitmap("background", {x: 523, y: 220}, 3.2);

GUI.addElement.scale("processScale", {x: 533, y: 153}, 0, "arrow_scale", 3.2);
GUI.addElement.slot("matterySlot", {x: 450, y: 151}, 50);
GUI.addElement.slot("itemSlot", {x: 534, y: 80}, 50);
GUI.addElement.slot("outSlot", {x: 632, y: 151}, 50);
GUI.addElement.scale("energyScale", {x: 523+3.2*4, y: 220}, 0, "scale", 3.2);

if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 303}, "classic_frame_input", 630, 120, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 320}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text("Состояние:", {x: 350, y: 343}, {size: 14, color: UIColor.WHITE});
    GUI.addElement.text("mode", {x: ((630+336)/2)+70, y: 331}, 1, 1, StringHelper.t("Idles"), {color: UIColor.YELLOW, size: 14});
    GUI.addElement.text("topSlot", {x: 350, y: 370}, 1, 1, StringHelper.t("The slot must have an item on top"), {color: UIColor.RED, size: 14});
    GUI.addElement.text("leftSlot", {x: 350, y: 395}, 1, 1, StringHelper.t("The slot on the left should contain matter"), {color: UIColor.RED, size: 14});
}
gui.reenactor = GUI.importScreen();
