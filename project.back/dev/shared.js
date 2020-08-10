ModAPI.registerAPI("OresAPI", {
    OresAPI:OresAPI,
    solarPanelAPI:SolarPanel,
    woodIncubator:WoodIncubatorRecipes,
    requireGlobal:function(c){
        return eval(c)
    }
});