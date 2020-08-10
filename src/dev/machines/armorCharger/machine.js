MachineRegistry.registerElectricMachine(BlockID.armorCharger, { 
    defaultValues:{
        lastItem: 0,  
    },
    getGuiScreen:function(){
        return gui.armorCharger;
    },
    canReceiveEnergy:function(side){
        return true;
    },
    getTier:function(){
        return OresAPI.getConfigValue("armor_charger.tier");
    },
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("armor_charger.energy_storage");
    }, 
    tick:function(){
        var slot = this.container.getSlot("slot");
        this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
        this.container.setText("energyText", this.data.energy+"/"+NameOverrider.transformNumber(this.getEnergyStorage())+" Eu");
        let container = this.container.getGuiContent();
        if(slot.id > 0){
            if(container){
                //Debug.m(this.slot);
            }
            if(!this.data.data || slot.id != this.data.lastItem || container){
                this.data.data = armorExtraData.getEnergy(slot.data);
                this.data.lastItem = this.data.lastItem;
            }
            let energy = this.data.data["energy"];
            let maxEnergy = this.data.data["energyStorage"];
            this.container.setScale("energyItemScale", energy/maxEnergy);
            if(energy < maxEnergy){
                let energyAdd = Math.min(OresAPI.getConfigValue("armor_charger.energy_output"), this.data.energy);
                if(this.data.energy >= energyAdd&&energy + energyAdd > maxEnergy){
                    energyAdd = energyAdd - ((energy + energyAdd) - maxEnergy);
                }//else this.container.setScale("modeShower", 0);
                this.container.setScale("modeShower", 1);
                armorExtraData.energyData[slot.data]["energy"] += energyAdd;
                //Debug.m(armorExtraData.data[this.slot.data]);
                this.data.energy -= energyAdd;
            }else this.container.setScale("modeShower", 0);
        }else{
			this.container.setScale("modeShower", 0);
			this.container.setScale("energyItemScale", 0);
			}
    }
});
ICRender.getGroup("ic-wire").add(BlockID.armorCharger, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.armorCharger, EU);
