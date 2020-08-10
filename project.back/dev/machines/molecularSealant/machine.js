MachineRegistry.registerElectricMachine(BlockID.molecularSealant, {
    defaultValues: {
        work_time: OresAPI.getConfigValue("molecular_sealer.work_time"),
        progress: 0,
        energyEated: 0,
        signal: true
    },
    
    redstone:function(params){
        this.data.signal = !params.power;
    },

    tick: function(){
            if(TIPS){
                var container = this.container.getGuiContent();
                if(container){
                    if(this.data.energy > 0&&this.data.signal){
                        container.elements.mode.text = StringHelper.t("Works")+" "+this.getProgress()+"% ("+Math.floor(100*this.data.energyEated/OresAPI.getConfigValue("molecular_sealer.magic_value"))+"%)";
                        container.elements.mode.font.color = UIColor.GREEN;
                    }else{
                        if(this.data.progress > 0){
                            container.elements.mode.text = StringHelper.t("Idles")+" "+this.getProgress()+"% ("+Math.floor(100*this.data.energyEated/OresAPI.getConfigValue("molecular_sealer.magic_value"))+"%)";
                        }else container.elements.mode.text = StringHelper.t("Idles")+" ";
                        container.elements.mode.font.color = UIColor.YELLOW;
                    }
                }
            }
        
            if(this.data.signal){
                if(this.data.energyEated < OresAPI.getConfigValue("molecular_sealer.magic_value")){
                    if(this.data.energy > 0){
                        this.data.energy--;
                        this.data.energyEated++;
                    }
               }else{
                   this.data.energyEated = 0;
                   this.data.progress += 1/this.data.work_time;
               }
            }
            
            if(this.data.progress >= 1){
                    var resultSlot = this.container.getSlot("matterySlot");
                    resultSlot.id = ItemID.Oresmatter;
                    resultSlot.count++;
                    this.data.progress = 0; 
            }
        
            var energyStorage = this.getEnergyStorage();
            var tier = this.getTier();
            this.data.energy = Math.min(this.data.energy, energyStorage);
            this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("batterySlot"), "Qe", energyStorage - this.data.energy, transferByTier[tier], tier);
            
            this.container.setScale("processScale", this.data.progress);
            this.container.setScale("molecularScale", this.data.energy / OresAPI.getConfigValue("molecular_sealer.energy_storage"));
            this.container.setText("molecularText", parseInt(this.data.energy)+"/"+this.getEnergyStorage()+" QE");
    },
        
    getTier:function(){
        return OresAPI.getConfigValue("molecular_sealer.tier");
    }, 
    
    canReceiveEnergy:function(side){
        return side == 1;
    },
    
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("molecular_sealer.energy_storage");
    },
    
    getGuiScreen:function(){return gui.molecularSealant},
    
    click:function(){
        if(Player.getCarriedItem().id == ItemID.QEconduct&&World.getBlockID(this.x, this.y+1, this.z) == 0){
            World.setBlock(this.x, this.y+1, this.z, BlockID.QEconduct);
            Player.decreaseCarriedItem(1);
            return true;
        }
    }
});
ICRender.getGroup("QE-wire").add(BlockID.molecularSealant, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.molecularSealant, QE);
