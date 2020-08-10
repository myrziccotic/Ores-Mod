const window = {
    standart: {
        header: null,
        
        inventory: {
            standart: true
        },
        
        background: {
            standart: true
        }
    },
    
    elements: {
        "closeButton":{type: "button", x: 900, y: 10, bitmap: "btn", scale: 4, clicker:{onClick:function(){
            CompressedCargoSpace.saveData();
        }}}
    }
};

var UPDATE_DATA_NEEDED = false;
ArmorButtons.registerButton("compressedCargoSpace", {
    type: "button",
    y: 4000,
    scale: button_scale,
    bitmap: "knopka",
    clicker:{
        onClick:function(){
            CompressedCargoSpace.displayWindow();
			CCStick.enabled = true;
			CCStick.key = Player.getArmorSlot(1).data;
        }
    }
}, function(){
	CompressedCargoSpace.onDisplay();
});

var CompressedCargoSpace = {
    button: false,
    window: null,
    windowContainer: new UI.Container(),
    elements: {},
    instance: null,
    level: null,
    key: null,
    onDisplay:function(){
        //try{
        if(!this.button){
            const armorSlot = Player.getArmorSlot(1);
            this.key = armorSlot.extra.getInt("key");
			const extra = armorExtraData.get(this.key);
            this.instance = extra.cargoInstance || {};
            this.level = extra.compressedCargoSpace;
            this.button = true;
            
            let indexInstance = 0; 
            this.window = window;
            let elements = window.elements;
            for(var h = 1; h <= this.level; h++){
                for(var i = 1; i < 11; i++){
                    elements["slot"+indexInstance] = {
                        type: "slot",
                        x: 345+(55*i),
                        y: 45+(55*h),
                        size: 50
                    }
                    indexInstance++;
                }
            }
            this.window.elements = elements;
            this.elements = elements;
        }
        /*}catch(e){
            Debug.error(e);
        }*/
    },
    saveData:function(){
        //try{
        let instance = {};
        let elements = this.windowContainer.getGuiContent().elements;
        for(var i in elements){
            if(i != "closeButton"){
                let slot = this.windowContainer.getSlot(i);
                instance[i] = slot;
            }
        }
        armorExtraData.data[this.key].cargoInstance = instance;
        this.instance = instance;
        //Debug.m(this.instance);
        this.windowContainer.close();
        //Debug.m(this.instance);
        /*}catch(e){
            Debug.message(e);
        }*/
    },
    displayWindow:function(){
        try{
            CompressedCargoSpace.windowContainer.openAs(new UI.StandartWindow(CompressedCargoSpace.window));
            for(var i in CompressedCargoSpace.windowContainer.getGuiContent().elements){
                if(i != "closeButton"){
                    let slotInstance = CompressedCargoSpace.instance[i] || {id: 0, count: 0, data: 0};
                    //Debug.message("§b"+i);
                    //Debug.m(this.instance[i]);
                    //Debug.m(slotInstance); 
                    CompressedCargoSpace.windowContainer.setSlot(i, slotInstance.id, slotInstance.count, slotInstance.data);
                }
            }
        }catch(e){
            Debug.error(e);
            CompressedCargoSpace.windowContainer.close();
        }
    }
}

/*Callback.addCallback("tick", function(){
	if(CCStick.enabled){
		energy = armorExtraData.getEnergy(CCStick.key).energy;
		if(energy >= 200){
			armorExtraData.setEnergy(CCStick.key, energy-200);
		}else{
			CompressedCargoSpace.saveData();
		}
	}
});*/
