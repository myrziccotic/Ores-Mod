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
var windowContainer = new UI.Container();
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
    elements: {},
    instance: null,
    level: null,
    key: null,
    onDisplay:function(instance, level){
        //try{
        if(!this.button){
            const armorSlot = Player.getArmorSlot(1);
			const extra = armorExtraData.get(armorSlot.data);
            this.instance = extra.cargoInstance || {};
            this.level = extra.compressedCargoSpace;
            this.key = armorSlot.data;
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
        let elements = windowContainer.getGuiContent().elements;
        for(var i in elements){
            if(i != "closeButton"){
                let slot = windowContainer.getSlot(i);
                instance[i] = slot;
            }
        }
        armorExtraData.data[this.key].cargoInstance = instance;
        this.instance = instance;
        //Debug.m(this.instance);
        windowContainer.close();
        //Debug.m(this.instance);
        /*}catch(e){
            Debug.message(e);
        }*/
    },
    displayWindow:function(){
        try{
        this.windowContainer.openAs(new UI.StandartWindow(this.window));
        elements = windowContainer.getGuiContent().elements;
        //Game.message(" ");
        for(var i in elements){
            if(i != "closeButton"){
                let slotInstance = this.instance[i] || {id: 0, count: 0, data: 0};
                //Debug.message("§b"+i);
                //Debug.m(this.instance[i]);
                //Debug.m(slotInstance); 
                this.windowContainer.setSlot(i, slotInstance.id, slotInstance.count, slotInstance.data);
            }
        }
        }catch(e){
            Debug.error(e);
            windowContainer.close();
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
