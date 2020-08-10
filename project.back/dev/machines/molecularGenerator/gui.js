let slotCount = 1;

GUI.createObject(Translation.translate("Molecular Generator"));
GUI.addDrawableObject.bitmap("moleuclar_background", {x: 543, y: 240}, 3.2);
GUI.addElement.scale("molecularScale", {x: 543+3.2*4, y: 240}, 0, "molecularScale", 3.2);
GUI.addElement.text("molecularText", {x: 543, y: 291}, 1, 1, "0/10000 QE", {color: UIColor.parseColor("#00FFFF"), shadow: 0.6});
for(var w = 0; w < 3; w++){
    for(var i = 1; i < 11; i++){
        GUI.addElement.slot("slot"+slotCount, {x: 300+(60*i), y: 1+(60*(w+1))}, 55);
        slotCount++;
    }
}
if(TIPS){
    GUI.addDrawableObject.frame({x: 336, y: 323}, "classic_frame_input", 630, 100, 3.6);
    GUI.addDrawableObject.text("__DEBUG console__", {x: ((630+336)/2)+70, y: 340}, {size: 14, color: UIColor.WHITE});
    GUI.addDrawableObject.text(StringHelper.t("Condition")+":", {x: 340, y: 373}, {size: 14, color: UIColor.WHITE});
    GUI.addElement.text("input", {x: ((630+336)/2)+70, y: 361}, 0, 0, StringHelper.t("Generation")+": 0QE", {color: UIColor.YELLOW, size: 14});
}
gui.MG = GUI.importScreen();
