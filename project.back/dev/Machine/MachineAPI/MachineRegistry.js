//Основа взята из IC2
var MachineRegistry = {
    machineIDs: {},

    isMachine: function(id){
        return this.machineIDs[id];
    },
    
    // Machine Base
    registerPrototype: function(id, Prototype){
        // register ID
        this.machineIDs[id] = true;
        Prototype.id = id;
        
        // click fix
        Prototype.onItemClick = function(id, count, data, coords){
            if (id == ItemID.debugItem) return false;
            if (this.click(id, count, data, coords)) return true;
            if (Entity.getSneaking(Player.get())) return false;
            var gui = this.getGuiScreen();
            if (gui){
                this.container.openAs(gui);
                return true;
            }
        }; 
        
        ToolAPI.registerBlockMaterial(id, "stone", 1);
        Block.setDestroyTime(id, 3);
        TileEntity.registerPrototype(id, Prototype);
    },
    
    registerElectricMachine: function(id, Prototype){
        if (Prototype.defaultValues){
            Prototype.defaultValues.energy = 0;
            Prototype.defaultValues.meta = 0;
            Prototype.defaultValues.progress = 0;
        }
        else{
            Prototype.defaultValues = {
                energy: 0,
                meta: 0,
                progress: 0
            };
        }
        
        Prototype.getTier = Prototype.getTier || function(){
            return 1;
        }
        
        Prototype.getProgress = function(){
            return Math.floor(100*this.data.progress/1);
        }
        
        if(!Prototype.getEnergyStorage){
            Prototype.getEnergyStorage = function(){
                return 0;
            };
        }
        
        Prototype.energyTick = Prototype.energyTick || this.basicEnergyReceiveFunc;
        
        if (!Prototype.getMaxPacketSize) {
            Prototype.getMaxPacketSize = function(tier){
                return Math.pow(2, 3 + this.getTier()*2);
            }
        }
        
        if(!Prototype.energyReceive){
            Prototype.energyReceive =  MachineRegistry.basicEnergyReceiveFunc
        }
        
        this.registerPrototype(id, Prototype);
    },
    
    
    registerGenerator:function(id, Prototype){
        Prototype.canReceiveEnergy = function(){
            return false;
        },
    
        Prototype.isEnergySource = function(){
            return true;
        },
      
        Prototype.energyReceive = Prototype.energyReceive||this.basicEnergyReceiveFunc
        
        Prototype.energyTick = Prototype.energyTick||this.basicEnergyOutFunc
        
        this.registerElectricMachine(id, Prototype);
    },
    
    registerEUStorage:function(id, Prototype){
        Prototype.isEnergySource = function(){
            return true;
        },
        
        Prototype.energyReceive = Prototype.energyReceive || this.basicEnergyReceiveFunc;
        
        Prototype.energyTick = Prototype.energyTick || this.basicEnergyOutFunc;
        
        Prototype.isTeleporterCompatible = true;
        
        this.registerElectricMachine(id, Prototype);
    }, 
    
    setFacing: function(coords){
        if(Entity.getSneaking(player)){
            var facing = coords.side + Math.pow(-1, coords.side);
        }else{
            var facing = coords.side;
        }
        if(facing != this.data.meta){
            this.data.meta = facing;
            return true;
        }
        return false;
    },
    
    basicEnergyOutFunc: function(type, src){
        let output = transferByTier[this.getTier()];
        if(this.data.energy >= output){
            this.data.energy += src.add(output) - output;
        }
    },
    
    basicEnergyReceiveFunc: function(type, amount, voltage) {
        var maxVoltage = this.getMaxPacketSize();
        if(voltage > maxVoltage){
            /*if(voltageEnabled){
                World.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 0.5, true);
                this.selfDestroy();
                return 0;
            }*/
            var add = Math.min(maxVoltage, this.getEnergyStorage() - this.data.energy);
        }else{
            var add = Math.min(amount, this.getEnergyStorage() - this.data.energy);
        }
        this.data.energy += add;
        return add;
    },
    
    isValidEUItem: function(id, count, data, energyType){
        if(!energyType) energyType = "Eu"
        var level = container.tileEntity.getTier();
        return ChargeItemRegistry.isValidItem(id, energyType,  level);
    },
    
    isValidEUStorage: function(id, count, data, energyType){
        if(!energyType) energyType = "Eu"
        var level = container.tileEntity.getTier();
        return ChargeItemRegistry.isValidStorage(id, energyType,  level);
    }
}

var transferByTier = {
    1: 32,
    2: 256,
    3: 2048,
    4: 8192
}