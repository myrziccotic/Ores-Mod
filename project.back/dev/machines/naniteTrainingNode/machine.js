MachineRegistry.registerElectricMachine(BlockID.naniteTrainingNode, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("nanite_training_node.work_time"),
        EU: 0,
        QE: 0,
        selectID: 0,
        isActive: false
    },
    getTier:function(){
        return OresAPI.getConfigValue("nanite_training_node.tier");
    },
    getEUStorage:function(){
        return OresAPI.getConfigValue("nanite_training_node.energy_EU_storage");
    },
    getQEStorage:function(){
        return OresAPI.getConfigValue("nanite_training_node.energy_QE_storage");
    },
    getGuiScreen:function(){
        return gui.naniteTrainingNode;
    },  
    canReceiveEnergy:function(side){
        return side != RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0);
    },
    showSelectMode:function(id){
        for(var i in implantations){
            if(implantations[i].key == id){
                this.data.key = i;
                //Debug.m(implantations[this.data.key]);
                var container = this.container.getGuiContent().elements;
                container["selectedImp"].font.color = implantations[this.data.key].color;
                container["selectedImp"].text = implantations[this.data.key].name;
                break;
            }
        }
    },
    QEReceive:function(type, amount, voltage){
        var maxVoltage = this.getMaxPacketSize();
        if(voltage > maxVoltage){
            var add = Math.min(maxVoltage, this.getQEStorage() - this.data.QE);
        }else{
            var add = Math.min(amount, this.getQEStorage() - this.data.QE);
        }
        this.data.QE += add;
        return add;
    },
    EUReceive:function(type, amount, voltage){
        var maxVoltage = this.getMaxPacketSize();
        if(voltage > maxVoltage){
            /*if(voltageEnabled){
                World.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 0.5, true);
                this.selfDestroy();
                return 0;
            }*/
            var add = Math.min(maxVoltage, this.getEUStorage() - this.data.EU);
        }else{
            var add = Math.min(amount, this.getEUStorage() - this.data.EU);
        }
        this.data.EU += add;
        return add;
    },
    energyReceive:function(type, amount, voltage){
        if(type == "Eu"){
             return this.EUReceive(type, amount, voltage);
        }if(type == "QE"){
             return this.QEReceive(type, amount, voltage);
        }
    },
    tick:function(){
        this.updateValues();
        if(this.processCondition()){
            if(this.data.EU >= OresAPI.getConfigValue("nanite_training_node.energy_EU_consumption")&&
			this.data.QE >= OresAPI.getConfigValue("nanite_training_node.energy_QE_consumption")){
				
                this.data.EU -= OresAPI.getConfigValue("nanite_training_node.energy_EU_consumption");
                this.data.QE -= OresAPI.getConfigValue("nanite_training_node.energy_QE_consumption");
                this.data.isActive = true;
                this.data.progress += 1/this.data.work_time;
            }
            if(this.data.progress >= 1) this.finnaly();  
        }else{
            this.data.progress = 0;
            this.data.isActive = false;
        }
    },
    processCondition:function(){
        return (this.valid&&(this.result.id == 0&&this.source.id == ItemID.flaskWithNanites));
    },
    finnaly:function(){ 
        this.result.data = this.source.data;
        this.result.id = ItemID.flaskWithTrainedNanites;
        this.result.count++;
        this.data.progress = 0;
        this.result.extra = new ItemExtraData();
        this.result.extra.putString("implantation", this.data.key);
        this.source.count--;
        this.container.validateSlot("source");
        this.data.isActive = false;
    },
    updateValues:function(){
        this.source = this.container.getSlot("source");
        this.result = this.container.getSlot("result");
        this.container.setScale("processScale", this.data.progress);
        this.container.setScale("energyScale", this.data.EU/this.getEUStorage());
        this.container.setScale("matterScale", this.data.QE/this.getQEStorage());
    }
});
ICRender.getGroup("QE-wire").add(BlockID.naniteTrainingNode, -1);
ICRender.getGroup("ic-wire").add(BlockID.naniteTrainingNode, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.naniteTrainingNode, EU);
EnergyTileRegistry.addEnergyTypeForId(BlockID.naniteTrainingNode, QE); 
