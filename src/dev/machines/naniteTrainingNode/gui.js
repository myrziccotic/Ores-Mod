GUI.createObject(Translation.translate("Nanite Training Node"));

GUI.addDrawableObject.bitmap("sslot", {x: 600, y: 92}, 5);

GUI.addElement.button("b-1", {x: 520, y: 92}, "slot", 5, naniteTrainingNodeButtonsOnClick(-1));
GUI.addElement.button("b+1", {x: 680, y: 92}, "slot", 5, naniteTrainingNodeButtonsOnClick(1));


GUI.addDrawableObject.text("-1", {x: 540, y: 80});
GUI.addDrawableObject.text("свойство", {x: 610, y: 140}, {color: UIColor.WHITE, size: 10});
GUI.addDrawableObject.text("+1", {x: 700, y: 80});


GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 840, y: 110}, 3.2);
GUI.addDrawableObject.bitmap("energy_scale_bg", {x: 870, y: 110}, 3.2);

GUI.addDrawableObject.text("Выбранное свойство: ", {x: 530, y: 200});
GUI.addElement.text("selectedImp", {x: 600, y: 200}, 100, 10, "нет");

GUI.addElement.slot("source", {x: 470, y: 340});
GUI.addElement.scale("processScale", {x: 553, y: 341}, 0, "arrow_scale", 3.2);
GUI.addElement.scale("energyScale", {x: 840, y: 110}, 1, "energy_scale", 3.2);
GUI.addElement.scale("matterScale", {x: 870, y: 110}, 1, "blue_energy_scale", 3.2);
GUI.addElement.slot("result", {x: 652, y: 340});

gui.naniteTrainingNode = GUI.importScreen();

function naniteTrainingNodeButtonsOnClick(value){
    return {
        onClick:function(position, container, tileEntity){
            if(!tileEntity.data.isActive){
                const implantationsList = Object.keys(implantations);
                let count = tileEntity.data.selectID + value
                if(count > implantationsList.length) count = implantationsList.length;
                if(count < 1) count = 1;
                tileEntity.data.selectID = count;
                tileEntity.valid = true;
                tileEntity.showSelectMode(tileEntity.data.selectID);
            }
        }
    }
}