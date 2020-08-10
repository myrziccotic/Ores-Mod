//legacy
MachineRegistry.registerElectricMachine(BlockID.processStation, {
    defaultValues:{
        EU:0,
        QE:0,
        progress2:0,
        progress:0,
        sunthetic_time:530,
        work_time:630,
        sunthetic_consumtion:{EU: 10, QE: 0.2},
        process_consumption:6,
        liquid:0,
        liquidStorage:100
    },
    getGuiScreen:function(){
        return gui.processStation
    },
    canReceiveEnergy:function(side){
        return side != RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0);
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
            //if(voltageEnabled){
                World.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 0.5, true);
                this.selfDestroy();
                return 0;
            //}
            var add = Math.min(maxVoltage, this.getEUStorage() - this.data.EU);
        }else{
            var add = Math.min(amount, this.getEUStorage() - this.data.EU);
        }
        this.data.EU += add;
        return add;
    },
    getEUStorage:function(){
        return 30000
    },
    getQEStorage:function(){
        return 100
    },
    getTier:function(){
        return 4
    },
    energyReceive:function(type, amount, voltage){
        if(type == "Eu"){
             return this.EUReceive(type, amount, voltage);
        }else{
             return this.QEReceive(type, amount, voltage);
        }

    },
    tick:function(){
        this.updateValues();
        if(this.data.liquid < this.data.liquidStorage&&(
          this.data.EU >= this.data.sunthetic_consumtion.EU&&
          this.data.QE >= this.data.sunthetic_consumtion.QE)){
            this.synthesis();
        }
        if(this.data.liquid >= this.data.liquidStorage&&this.source.id > 0){
            this.transform();
        }
    },
    synthesis:function(){
        this.data.QE -= this.data.sunthetic_consumtion.QE;
        this.data.EU -= this.data.sunthetic_consumtion.EU;
        this.data.progress2 += 1/this.data.sunthetic_time;
        
        if(this.data.progress2 >= 1){
            this.data.liquid += random(1, 5);
            if(this.data.liquid > this.data.liquidStorage) this.data.liquid = this.data.liquidStorage;
            this.data.progress2 = 0;
        }
    },
    transform:function(){
        if(this.data.EU >= 18&&this.valid){
            this.data.EU -= 18; 
            this.data.progress += 1/this.data.work_time;
        } 
        if(this.data.progress >= 1&&this.result.id == 0){
            this.data.progress = this.data.liquid = 0;
            this.result.id = this.source.id;
            this.result.data = this.source.data;
            this.result.count = this.getCountInput(this.source.id, this.source.data);
            if(this.source.extra) this.result.extra = this.source.extra;
            this.source.count--;
            this.container.validateSlot("source");
        }
    },
    updateValues:function(){
        this.container.setScale("energyScale", this.data.EU/this.getEUStorage());
        this.container.setScale("quantomScale", this.data.QE/this.getQEStorage());
        this.container.setScale("suntheticScale", this.data.progress2);
        this.container.setScale("progressScale", this.data.progress);
        this.container.setScale("liquidScale", this.data.liquid/this.data.liquidStorage);
        this.source = this.container.getSlot("source");
        this.result = this.container.getSlot("result");
        
        this.valid = true;
        if(ItemID.tinCanFull){
            this.valid = (!ItemID.tinCanFull)?true:false
        }
    },
    getCountInput:function(id, data){
        if(inputCounts.data[id+data]) return inputCounts.data[id+data];
        return Math.floor(Item.getMaxStack(id)/3);
    }
});
ICRender.getGroup("QE-wire").add(BlockID.processStation, -1);
ICRender.getGroup("ic-wire").add(BlockID.processStation, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.processStation, EU);
EnergyTileRegistry.addEnergyTypeForId(BlockID.processStation, QE);