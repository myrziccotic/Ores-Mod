MachineRegistry.registerElectricMachine(BlockID.molecularConverter, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("molecular_converter.work_time"),
    }, 
    updateValues:function(){
      this.matterySlot = this.container.getSlot("matterySlot");
      this.result = this.container.getSlot("outSlot");
      this.itemSlot = this.container.getSlot("rebuiltMatter"); 
     
      this.container.setScale("processScale", this.data.progress);
      this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage()); 
      
      if(TIPS){
        var container = this.container.getGuiContent();
        if(container){
            if(this.itemSlot.id > 0){
                if(this.itemSlot.id == ItemID.rebuiltMatter){
                    container.elements["topSlot"].text = "";
                }else{
                    container.elements["topSlot"].text = "В слоте сверху не реконструированная материя";
                    container.elements["topSlot"].font.color = UIColor.YELLOW;
                }
            }else{
                container.elements["topSlot"].text = "В слоте сверху должна быть реконструированная материя";
                container.elements["topSlot"].font.color = UIColor.RED;
            }
            if(this.matterySlot.id > 0){
                if(this.matterySlot.id == ItemID.Oresmatter){
                    container.elements["leftSlot"].text = "";
                }else{
                    container.elements["leftSlot"].text = "В слоте слева не материя"
                    container.elements["leftSlot"].font.color = UIColor.YELLOW;
                }
            }else{
                container.elements["leftSlot"].text = "В слоте слева должна быть материя";
                container.elements["leftSlot"].font.color = UIColor.RED;
            }
            if(this.condition()){
                if(this.data.energy >= OresAPI.getConfigValue("molecular_converter.energy_consumption")){
                    container.elements["mode"].text = "Работает "+this.getProgress()+"%";
                    container.elements["mode"].font.color = UIColor.GREEN
                }else{
                    container.elements["mode"].text = "Нет энергии";
                    container.elements["mode"].font.color = UIColor.RED;
                }
            }else{
                container.elements["mode"].text = "Простаивает";
                container.elements["mode"].font.color = UIColor.YELLOW;
            }
        }
      }
    },
    
    condition:function(){
        if((this.itemSlot.id == ItemID.rebuiltMatter&&this.matterySlot.id == ItemID.Oresmatter)&&
        (this.result.id == 0||(this.result.id == this.itemSlot.extra.getInt("id")&&result.data == itemSlot.extra.getInt("data"))&&result.count+1 <= Item.getMaxStack(result.id))) return true
    },
    
    tick:function(){
        this.updateValues();
        if(this.condition()){
            if(this.data.energy >= OresAPI.getConfigValue("molecular_converter.energy_consumption")){
                this.data.energy -= OresAPI.getConfigValue("molecular_converter.energy_consumption");
                this.data.progress += 1/this.data.work_time;
            }   
            if(this.data.progress >= 1){
                this.matterySlot.count--;  
                this.itemSlot.count--;        
                this.result.id = this.itemSlot.extra.getInt("id")
                this.result.count += random(64, 120);
                this.result.data = this.itemSlot.extra.getInt("data");  
                this.data.progress = 0; 
                this.container.validateAll();
            }
        }else{
            this.data.progress = 0;
        }
    },
    
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("molecular_converter.energy_storage")
    },
    
    canReceiveEnergy:function(side){
        return side != RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0);
    },
    
    getTier:function(){
        return OresAPI.getConfigValue("molecular_converter.tier")
    },
    
    getGuiScreen:function(){return gui.converter}
});
ICRender.getGroup("ic-wire").add(BlockID.molecularConverter, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.molecularConverter, EU);