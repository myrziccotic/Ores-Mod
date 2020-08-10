GUI.createObject(Translation.translate("Molecular Sealer"));
GUI.addDrawableObject.bitmap("moleuclar_background", {x: 523, y: 240}, 3.2);
GUI.addDrawableObject.bitmap("arrow_bg", {x: 543, y: 153}, 3.2);
GUI.addElement.scale("molecularScale", {x: 523+3.2*4, y: 240}, 0, "molecularScale", 3.2);
GUI.addElement.text("molecularText", {x: 523, y: 291}, 1, 1, "0/50000 Qe", {color: UIColor.parseColor("#00FFFF"), shadow: 0.6});
GUI.addElement.slot("matterySlot", {x: 643, y: 149});
GUI.addElement.slot("batterySlot", {x: 450, y: 149});
GUI.addElement.scale("processScale", {x: 543, y: 153}, 0, "arrow_scale", 3.2);
if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 363}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 380}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text(StringHelper.t("Condition")+":", {x: 340, y: 403}, {size: 14, color: UIColor.WHITE});
    GUI.addElement.text("mode", {x: ((630+336)/2)+70, y: 391}, 0, 0, StringHelper.t("Idles"), {color: UIColor.YELLOW, size: 14});
}
gui.molecularSealant = GUI.importScreen();
