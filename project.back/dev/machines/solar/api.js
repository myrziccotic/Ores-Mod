var SolarPanel = {
    machine:function(id, type){  
        const conf = type+"_solar_panel.";
        MachineRegistry.registerGenerator(BlockID["solarPanel"+id], {
            created: function(){
                let x = this.x, y = this.y+1, z = this.z;
                while(opacityBlocks.indexOf(World.getBlockID(x, y, z)) > -1 && y < 256){
                    y++;
                }
                if(y > 255){
                    this.data.isActive = true;
                }
                this.data.lastY = y;
            },
            checkSky: function(){
                let y = this.data.lastY;
                if(opacityBlocks.indexOf(World.getBlockID(this.x, y, this.z)) == -1){
                    this.data.isActive = false;
                }else{
                    if(y >= 255){
                        this.data.isActive = true;
                        this.data.lastY = this.y;
                    }
                    this.data.lastY++;
                }
                return this.data.isActive;
            },
            getValue: OresAPI.getConfigValue,
            getGuiScreen:function(){return gui[type]},
            getEnergyStorage:function(){return this.getValue(conf+"storage")},
            tick:function(){
                //try {
                this.container.setText("energyText", parseInt(this.data.energy)+"");
                this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
                
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot2"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot3"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot4"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot5"), "Eu", this.data.energy, this.getValue(conf+"output"), this.getValue(conf+"tier"));
                
                if(this.getEnergyStorage() > this.data.energy&&this.checkSky()){
                     let time = World.getWorldTime()%24000;
                     if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
                        this.data.energy = Math.min(this.getEnergyStorage(), this.data.energy+this.getValue(conf+"gen_day"));
                     }else if(this.getValue(conf+"gen_night") > 0){
                        this.data.energy = Math.min(this.getEnergyStorage(), this.data.energy+this.getValue(conf+"gen_night"));
                     }
                }
                /*}catch(e){
                    Debug.error(e);
                    Logger.Log(e);
                }*/
            },
            canExtractEnergy:function(side){
                return side == 0
            },
            energyTick:function(type, src){
                //try{
                var output = Math.min(this.getValue(conf+"output"), this.data.energy);
                this.data.energy += src.add(output) - output;
                /*}catch(e){
                    Debug.error(e);
                    Logger.Log("energyTick: "+e)
                }*/
            }
        });
        ICRender.getGroup("ic-wire").add(BlockID["solarPanel"+id], -1);
        EnergyTileRegistry.addEnergyTypeForId(BlockID["solarPanel"+id], EU);
    },
    window:function(p){
        GUI.createObject(p[0]);
        GUI.editStyles({
            slot: p[1][0],
            invSlot: p[1][0],
            selection: p[1][1],
            background: p[1][2]
        });
        GUI.addDrawableObject.bitmap(p[2], {x: 560, y: 200}, 3.6);
        GUI.addElement.scale("energyScale", {x: 560+3.6*4, y: 200}, 0, p[3], 3.6);
        for(var i = 1; i <= 5; i++){
            GUI.addElement.slot("slot"+i, {x: 463+(50*i), y: 273});
        }
        GUI.addElement.text("energyText", {x: 570, y: 168}, 1, 1, "0", {color: p[4]});
        return GUI.importScreen();
    },
    shape:function(id, q, w, e){
        var render = new ICRender.Model();
        BlockRenderer.setStaticICRender(id, -1, render);
        var model = BlockRenderer.createModel();
        model.addBox(1, 0, 1, 0, 0.1, 0, q, 0);
        model.addBox(0.4, 0.1, 0.4, 0.6, 0.55, 0.6, q, 0);
        model.addBox(0.6, 0.1, 0.3, 0.7, 0.55, 0.4, w, 0);
        model.addBox(0.6, 0.1, 0.6, 0.7, 0.55, 0.7, w, 0);
        model.addBox(0.3, 0.1, 0.3, 0.4, 0.55, 0.4, w, 0);
        model.addBox(0.3, 0.1, 0.6, 0.4, 0.55, 0.7, w, 0);
        model.addBox(1, 0.55, 1, 0, 0.7, 0, [[q, 0], [e, 0], [q, 0], [q, 0], [q, 0], [q, 0], [q, 0]]);
        render.addEntry(model);
    }
}