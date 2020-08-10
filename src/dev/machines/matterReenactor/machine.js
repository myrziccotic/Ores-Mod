MachineRegistry.registerElectricMachine(BlockID.matterReenactor, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("matter_reenactor.work_time"),
        consumption: OresAPI.getConfigValue("matter_reenactor.energy_consumption")
    },
    getGuiScreen:function(){
        return gui.reenactor;
    },
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("matter_reenactor.energy_storage")
    },
    getTier:function(){
        return OresAPI.getConfigValue("matter_reenactor.tier")
    },
    canReceiveEnergy:function(side){
        return side != RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0);
    },
    tick:function(){
        var matter = this.container.getSlot("matterySlot");
        var item = this.container.getSlot("itemSlot");
        var result = this.container.getSlot("outSlot");
        if(TIPS){
            var container = this.container.getGuiContent();
            if(container){
                if(matter.id > 0){
                    if(matter.id != ItemID.Oresmatter){
                        container.elements["leftSlot"].text = StringHelper.toString("But it is not matter._.");
                        container.elements["leftSlot"].font.color = UIColor.YELLOW;
                    }else{
                        container.elements["leftSlot"].text = "";
                    }
                }else{
                    container.elements["leftSlot"].text = StringHelper.t("The slot on the left should contain matter");
                    container.elements["leftSlot"].font.color = UIColor.RED;
                }
                if(item.id > 0){
                    if(item.id == ItemID.Oresmatter||item.id == ItemID.rebuiltMatter){
                        container.elements["topSlot"].text = StringHelper.t("No matter!!!");
                        container.elements["topSlot"].font.color = UIColor.YELLOW;
                    }else{
                        container.elements["topSlot"].text = "";
                    }
                }else{
                    container.elements["topSlot"].text = StringHelper.t("The slot must have an item on top");
                    container.elements["topSlot"].font.color = UIColor.RED;
                }
                if(matter.id == ItemID.Oresmatter&&(item.id > 0&&(item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter))&&this.data.energy >= this.data.consumption){
                    container.elements["mode"].text = StringHelper.t("Works")+" "+this.getProgress()+"%";
                    container.elements["mode"].font.color = UIColor.GREEN
                }else if(matter.id == ItemID.Oresmatter&&(item.id > 0&&(item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter))&&this.data.energy < this.data.consumption){
                    container.elements["mode"].text = StringHelper.t("No power");
                    container.elements["mode"].font.color = UIColor.RED;
                }else{
                    container.elements["mode"].text = StringHelper.t("Idles");
                    container.elements["mode"].font.color = UIColor.YELLOW;
                }
            }
        }
        this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
        this.container.setScale("processScale", this.data.progress);
        if(matter.id == ItemID.Oresmatter&&item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter&&item.id > 0){
            if(this.data.energy >= this.data.consumption){
                this.data.energy -= this.data.consumption;
                this.data.progress += 1/this.data.work_time;
            }
            if(this.data.progress >= 1){
                result.id = ItemID.rebuiltMatter;
                result.count++;
                result.data = 0;
                result.extra = new ItemExtraData();
                result.extra.putInt("id", item.id);
                result.extra.putInt("data", item.data);
                item.count--;
                matter.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }else{
            this.data.progress = 0;
        }
    }
});
ICRender.getGroup("ic-wire").add(BlockID.matterReenactor, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.matterReenactor, EU);
