MachineRegistry.registerElectricMachine(BlockID.labBlock, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("laboratory.work_time"),
        consumption: OresAPI.getConfigValue("laboratory.energy_consumption")
    },
    getTier:function(){
        return OresAPI.getConfigValue("laboratory.tier");
    },
    canReceiveEnergy:function(side){
		var getSide = RelativeAPI.getRelativeSide;
		var data = World.getBlock(this.x, this.y, this.z).data;
		var sides = [getSide(data, 1), getSide(data, 2), getSide(data, 3), 0];
		for(var i in sides){
			if(sides[i] == side){
				return true;
			}
		}
		return false;
    },
    updateValues:function(){
        this.source = this.container.getSlot("chipSlot");
        this.splitter = this.container.getSlot("splitterChipSlot");
        this.quantomDetector = this.container.getSlot("quantomDetectorChipSlot");
        this.densityController = this.container.getSlot("densityControllerChipSlot");
        this.matterDrive = this.container.getSlot("matterDriveChipSlot");
        this.burnt = this.container.getSlot("burntChipSlot");
        
        this.container.setScale("energyScale", this.data.energy/3000);
        this.container.setScale("researchScale", this.data.progress);
        
        if(TIPS){
            var container = this.container.getGuiContent();
            if(container){
                if(this.source.id == 0){
                    container.elements["chipListener"].text = StringHelper.t("There should be a research chip in the slot on top");
                    container.elements["chipListener"].font = {color: UIColor.RED, size: 15};
                    container.elements["mode"].text = StringHelper.t("Idles");
                    container.elements["mode"].font.color = UIColor.YELLOW;
                }else if(this.source.id == ItemID.researchChip&&this.data.energy >= this.data.consumption){
                    container.elements["chipListener"].text = "";
                    container.elements["mode"].text = StringHelper.t("Works")+" "+this.getProgress()+"%";
                    container.elements["mode"].font.color = UIColor.GREEN;
                }else if(this.source.id == ItemID.researchChip&&this.data.energy < this.data.consumption){
                    container.elements["chipListener"].text = "";
                    container.elements["mode"].text = StringHelper.t("No power");
                    container.elements["mode"].font.color = UIColor.RED;
                }else{
                    container.elements["chipListener"].text = StringHelper.t("The slot on top is not a research chip");
                    container.elements["chipListener"].font = {color: UIColor.YELLOW, size: 15};
                    container.elements["mode"].text = StringHelper.t("Idles");
                    container.elements["mode"].font.color = UIColor.YELLOW;
                }
            }
        }
    },
    
    condition:function(){
        return (this.source.id == ItemID.researchChip&&this.data.energy >= this.data.consumption)
    },
    
    tick:function(){
        this.updateValues();
        if(this.condition()){
            this.data.energy -= this.data.consumption;
            this.data.progress += 1/this.data.work_time;
            if(this.data.progress >= 1){
                this.data.progress = 0;
                this.source.count--;
                let result = tryResearch(), slot = this.selectSlot(result);
                this[slot].id = result;
                this[slot].count++;
                this.container.validateSlot("chipSlot");
            }
        }else{
            this.data.progress = 0;
        }
    },
    
     selectSlot:function(id){
        switch(id){   
            case ItemID.splitterChip:
                return "splitter";
            break;
            case ItemID.quantomDetectorChip:
                return "quantomDetector";
            break;
            case ItemID.densityControllerChip:
                return "densityController";
            break;
            case ItemID.matteryDrive:
                return "matterDrive";
            break;
            case ItemID.burntChip:
                return "burnt";
            break;
        }
    },
    
    getGuiScreen:function(){
        return gui.laboratory;
    },
    
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("laboratory.energy_storage");
    }
});
ICRender.getGroup("ic-wire").add(BlockID.labBlock, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.labBlock, EU);