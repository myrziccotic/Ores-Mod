var newGame = true;
Callback.addCallback("LevelLoaded", function(){
    if(newGame){
        Game.message("                                      (Ores Mod v.2.5.0.1)");
        Game.message("                                    отдельная благодарность");
        Game.message(Translation.translate("§5Maksim Kievsky: §2detected a problem with a block drop. §114.02.2018 §9version 2.0.1"));
        Game.message(Translation.translate("§5miron27khv: §4created 90% of texture mod. §9Was taken to the development team since version 2.2.3"));
        Game.message(Translation.translate("§4ripemc: §6noticed a bug with integration with IC². §214.04.2019 §9version 2.4.5.3"));
        Game.message(Translation.translate("§5BrassyFaNToM: §7reported an error with most of the mechanisms. §C08.06.2019 §9 Versions §b3§f.§70"));
        Game.message(Translation.translate("§1Витя Белей: §7проявил соучастие в совершествовании рецептов компонентов механической брони и созданию новых ресурсов. §c09.08.2020 §b3§f.§70§f.§36"))
        Player.addItemToInventory(ItemID.oresModGuideBook, 1, 0);
    }
});

Saver.addSavesScope("book",
    function read(scope) {
        if(scope.amount){
			newGame = false;
		} 
    },
    
    function save() {
        return {amount: true};
    }
);

/*var timer = 0;
var sphere = null;

Callback.addCallback("ItemUse", function(c, i, b){
	if(i.id == 280&&!timer){      
        sphere = new KotoffeyMatch.particleSphere(c, 3);
        sphere.setParticleType(Native.ParticleType.HappyVillager);
        sphere.setParticlesDensity(7);
        timer = 10*20;
	}
});

Callback.addCallback("tick", function(){
    if(timer){
        sphere.emit();
    }
});*/