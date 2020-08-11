var button_scale = /*OresAPI.getConfigValue("overlay_buttons_scale")*/45;
var ArmorButtons = {
    currentScreen: null,
    isEnabled: false,
    container: new UI.Container(),
    Window: new UI.Window({//взял у инда, да
        location: {
            x: 1000 - button_scale,
            y: UI.getScreenHeight()/2 - button_scale*2,
            width: button_scale,
            height: button_scale*4
        },
        drawing: [{type: "background", color: 0}],
        elements: {}
    }),
    updatesManager:{},
    map:{},
    buttons:{},
    onClick:{},
    registerButton:function(name, button, onClick){
        this.map[name] = false;
        this.buttons[name] = button;
		this.updatesManager[name] = false;
        if(onClick){
            this.onClick[name] = onClick;
        }
    },
    enable:function(name){
        if(this.map[name] === false){//так надо
            this.map[name] = true;
            if(!this.updatesManager[name]){
                this.validate();
                this.updatesManager[name] = true;
            }
        }
    },
    disable:function(name){
        if(this.map[name] === true){//и так тоже
            this.map[name] = false;
            this.updatesManager[name] = false;
            this.validate();
        }
    },
    show:function(){  
        if(!this.isEnabled){
            this.container.openAs(this.Window);
            this.isEnabled = true;
            this.validate();
        }
    },
    hide:function(){
        if(this.isEnabled){
            this.isEnabled = false;
            this.container.close();
            this.drop();
        }
    },
    validate:function(){
        var elements = this.Window.content.elements;
        for(var i in this.map){
            if(!this.map[i]&&elements[i]){
                delete elements[i];
                continue;
            }
            if(this.map[i]&&!elements[i]){
                elements[i] = this.buttons[i];
				//Debug.m(Object.keys(this.onClick));
                if(this.onClick[i]){
                    this.onClick[i]();
				}
            }
        }
    },
    drop:function(){
        for(var i in this.map){
            this.map[i] = false;
        }
    },
    checkSuit:function(){
        const helmet = Player.getArmorSlot(0);
        const chestplate = Player.getArmorSlot(1);
        const leggings = Player.getArmorSlot(2);
        const boots = Player.getArmorSlot(3);
        return (helmet.id == ItemID.mechanicAdamantiteHelmet&&
            chestplate.id == ItemID.mechanicAdamantiteChestplate&&
            leggings.id == ItemID.mechanicAdamantiteLeggings&&
            boots.id == ItemID.mechanicAdamantiteBoots) ||
            (helmet.id == ItemID.mechanicSapphireHelmet&&
            chestplate.id == ItemID.mechanicSapphireChestplate&&
            leggings.id == ItemID.mechanicSapphireLeggings&&
            boots.id == ItemID.mechanicSapphireBoots);
    }
}

ArmorButtons.Window.setAsGameOverlay(true);

Callback.addCallback("NativeGuiChanged", function(screenName){
    ArmorButtons.currentScreen = screenName;
    //alert(screenName);
    if(screenName == "hud_screen" || screenName == "in_game_play_screen"){
		LAST_CHESTPLATE_VALIDATION_RESULT = null;
        if(ArmorButtons.checkSuit()){
            ArmorButtons.show();
        }else{
            ArmorButtons.hide();
        }
    }else{
        ArmorButtons.hide();
    }
});