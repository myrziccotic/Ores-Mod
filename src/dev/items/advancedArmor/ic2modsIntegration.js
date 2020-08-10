ModAPI.addAPICallback("ICore", function(api){
    var buttonContent = api.requireGlobal("buttonContent");
    ArmorButtons.registerButton("jetpack", buttonContent.button_fly, function(){
		jetpackArmorKey = Player.getArmorSlot(1).data;
	});
    
	var jetpackArmorKey = null;
    var jetpackLoop = api.requireGlobal("jetpackLoop");
    const soundEnabled = api.requireGlobal("Config.soundEnabled");
    
    Callback.addCallback("tick", function(){
        if(ArmorButtons.map.jetpack && (ArmorButtons.currentScreen == "hud_screen" || ArmorButtons.currentScreen == "in_game_play_screen")){
            var playSound = false;
			var energy = armorExtraData.getEnergy(jetpackArmorKey).energy;
            if(energy >= 400&&ArmorButtons.container.isElementTouched("jetpack")){
                playSound = true;
                var y = Player.getPosition().y;
                var vel = Player.getVelocity();
                var vy = Math.min(32, 264-y) / 160;
                if(vel.y < 0.67){
                    Player.addVelocity(0, Math.min(vy, 0.67-vel.y), 0);
                }
				armorExtraData.setEnergy(jetpackArmorKey, energy-400);
            }  
        }
        if(soundEnabled && playSound && !jetpackLoop.isPlaying()){
            jetpackLoop.start();
        }
        if(!playSound && jetpackLoop.isPlaying()){
            jetpackLoop.stop();
        }
    });
});
