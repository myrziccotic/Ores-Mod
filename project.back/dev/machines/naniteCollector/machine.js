MachineRegistry.registerElectricMachine(BlockID.naniteCollector, { 
    defaultValues:{
        work_time: OresAPI.getConfigValue("nanite_collector.work_time"),
        EU: 0,
        QE: 0
    },
    getGuiScreen:function(){
        return gui.naniteCollector;
    },
    getEUStorage:function(){
        return OresAPI.getConfigValue("nanite_collector.energy_EU_storage");
    },
    getQEStorage:function(){
        return OresAPI.getConfigValue("nanite_collector.energy_QE_storage");
    },
    canReceiveEnergy:function(side){
        return side != RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0);
    },
    tick:function(){
        this.updateValues();
        if(this.condition()){
            if(this.data.EU >= OresAPI.getConfigValue("nanite_collector.energy_EU_consumption")&&
				this.data.QE >= OresAPI.getConfigValue("nanite_collector.energy_QE_consumption")){
                
                this.data.EU -= OresAPI.getConfigValue("nanite_collector.energy_EU_consumption");
                this.data.QE -= OresAPI.getConfigValue("nanite_collector.energy_QE_consumption");

                this.data.progress += 1/this.data.work_time;
                if(this.data.progress >= 1) this.finnaly();
            }
        }
    },
    getTier:function(){
        return OresAPI.getConfigValue("nanite_collector.tier");
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
    updateValues:function(){
        var getColor = function(a){
            if(a > 96) return "#7CFC00"
            if(a > 90) return "#00FF00"
            if(a > 84) return "#32CD32"
            if(a > 73) return "#008000"
            if(a > 67) return "#228B22" 
            if(a > 50) return "#6B8E23"
            if(a > 41) return "#2E8B57"
            if(a > 32) return "#FF8C00"
            if(a > 14) return "#FF4500"
            return "#FF0000"
        }
        var ctx = this.container.getGuiContent();
        if(ctx){
            color = getColor(this.getProgress());
            ctx.elements.progressText.font.color = UIColor.parseColor(color);
            ctx.elements.progressText.text = this.getProgress()+"%";
        }
        this.mainSource = this.container.getSlot("mainSource");
        this.box = this.container.getSlot("box");
        this.redstone = this.container.getSlot("redstone");
        this.resultSlot = this.container.getSlot("result");
        //this.result = NaniteCollector.getMainSource(this.mainSource.id, this.mainSource.data);
        this.container.setScale("energyScale", this.data.EU/this.getEUStorage());  
        this.container.setScale("matterScale", this.data.QE/this.getQEStorage());
    },
    /*isFlask:function(id){
        var flask = [ItemID.emptyFlask1, ItemID.emptyFlask2, ItemID.emptyFlask3, ItemID.emptyFlask4, ItemID.emptyFlask5, ItemID.emptyFlask6, ItemID.emptyFlask7].indexOf(id);  
        return flask > -1;
    },*/
    condition:function(){
        if(this.mainSource.id == 265&&this.box.id == ItemID.emptyFlask&&this.redstone.id == 331&&this.resultSlot.id == 0) return true
    },
    finnaly:function(){
        this.resultSlot.data = getRandomFullFlaskTexture(this.box.data);
        this.resultSlot.id = ItemID.flaskWithNanites;
        this.resultSlot.count = 1;
        this.data.progress = 0;
        this.resultSlot.extra = new ItemExtraData();
        //this.resultSlot.extra.putInt("texture", this.resultSlot.data);
        //this.resultSlot.extra.putInt("lvl", this.result);
        this.redstone.count--;
        this.mainSource.count--;
        this.box.count--;
        this.container.validateAll();
        //Debug.m(this.resultSlot.data);
    }
});
ICRender.getGroup("QE-wire").add(BlockID.naniteCollector, -1);
ICRender.getGroup("ic-wire").add(BlockID.naniteCollector, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.naniteCollector, EU);
EnergyTileRegistry.addEnergyTypeForId(BlockID.naniteCollector, QE);
