MachineRegistry.registerElectricMachine(BlockID.woodIncubator, {
    defaultValues:{
        bd: null,
        active: false,
        block: false,
        blockCoords: null,
        sourceData: null,
        work_time: 12000,
        Sapling: null,
        boost: false,
        wood: [4, 20],
        sapling: [0, 1],
        consumption: 3
    },
    getGuiScreen:function(){
        return gui.woodIncubator
    },
    getTier:function(){
        return 2
    },
    getEnergyStorage:function(){
        return 36000
    },
    tick:function(){
        this.updateData();
        if(this.data.block){
            if(this.checkBlock()){
                if(this.processCondition()){
                    if(!this.data.active){
                        this.startProcessing();
                    }else{
                        if(this.data.energy >= this.data.consumption){
                            if(this.checkSapling()){
                                this.data.energy -= this.data.consumption;
                                this.data.progress += 1/this.data.work_time;
                                //Debug.m(this.data.progress);
                            }
                        }
                    }
					if(this.engine.id == 351&&this.engine.data == 15){
        				if(!this.data.boost) this.boostValues();
        			}else if(this.data.boost){
            			this.returnValues();
        			}
                    if(this.data.progress >= 1){
                        const c = this.data.blockCoords;
                        var special = WoodIncubatorRecipes.getSpecialDrop(this.data.sourceData[0], this.data.sourceData[1]);
                        this.resultSlot.id = this.result.id;
                        this.resultSlot.data = this.result.data;
                        this.resultSlot.count += random(this.data.wood[0], this.data.wood[1]);
                        this.sapling.id = this.data.sourceData[0];
                        this.sapling.data = this.data.sourceData[1];
                        this.sapling.count += random(this.data.sapling[0], this.data.sapling[1]);
                        this.container.validateSlot("saplingSlot");
                        if(special){
                            var count = WoodIncubatorRecipes.getDropCount(this.data.sourceData[0], this.data.sourceData[1], this.data.boost)
                            if(this.special.id == special.id&&this.special.data == special.data||this.special.id == 0){
                                this.special.id = special.id;
                                this.special.count += count;
                                this.special.data = special.data;        
                            }else{
                                World.drop(c[0], c[1]+1, c[2], special.id, count, special.data);
                            }
                        }
                        if(this.data.boost){
                            this.engine.count--;
                            this.container.validateSlot("engineSlot");
                            this.data.boost = false;
                        }
                        this.data.progress = 0;
                        this.data.active = false;
                        World.setBlock(c[0], c[1]+1, c[2], 0);
                    }
                }
            }
        }else this.searchBlock();    
    },
    canReceiveEnergy:function(side){
        const data = World.getBlock(this.x, this.y, this.z).data;
        const getSide = RelativeAPI.getRelativeSide;
        const sides = [1, getSide(data, 0), getSide(data, 3)];
        for(var i in sides){
            if(side == sides[i]) return false;
        }
        return true;
    },
    searchBlock:function(){
        if(!this.data.blockCoords){
            this.data.blockCoords = RelativeAPI.getRelativeCoordsArray({x: this.x, y: this.y, z: this.z}, 3);  
        }
        c = this.data.blockCoords;
        if([2, 3].indexOf(World.getBlockID(c[0], c[1], c[2])) > -1){
            this.data.block = true;
            //Debug.message("зачекал!");
        }
    },
    checkBlock:function(){
        if(Math.random() < 0.04){
            const c = this.data.blockCoords;
            b = World.getBlockID(c[0], c[1], c[2]);
            if([2, 3].indexOf(b) > -1){
                return true
            }else{
                this.data.blockCoords = this.data.block = this.data.active = false;
                this.data.progress = 0;
                //Debug.error("п5л");
            }
        }else return true;
    },
    updateData:function(){
        this.source =  this.container.getSlot("materialSlot");
        this.engine = this.container.getSlot("engineSlot");
        this.resultSlot = this.container.getSlot("inputSlot");
        this.sapling = this.container.getSlot("saplingSlot");
        this.special = this.container.getSlot("specialSlot");
        if(!this.data.active)this.result = MachineRecipeRegistry.getRecipeResult("woodIncubator", this.source.id, this.source.data);
        else {
			this.result = MachineRecipeRegistry.getRecipeResult("woodIncubator", this.data.sourceData[0], this.data.sourceData[1]);
			if(World.getThreadTime()%10 == 0){
				var c = this.data.blockCoords;
				var b = this.data.Sapling;
				World.setBlock(c[0], c[1]+1, c[2], b.id, b.data);
			}
		}
        this.container.setScale("processScale", this.data.progress);
        this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
    },
    processCondition:function(){
         if((this.result&&(this.result.id == this.resultSlot.id&&this.result.data == this.resultSlot.data||this.resultSlot.id == 0))||this.data.active) return true
    },
    startProcessing:function(){  
        const c = this.data.blockCoords, data = this.source.data;
        const block = WoodIncubatorRecipes.getSapling(this.source.id, data);
        //NativeAPI.setTileUpdateAllowed(false);
        World.setBlock(c[0], c[1]+1, c[2], block.id, block.data);
        //NativeAPI.setTileUpdateAllowed(true);
        this.data.Sapling = block;
        this.data.sourceData = [this.source.id, data];
        this.source.count--;
        this.container.validateSlot("materialSlot");
        this.data.active = true;
        //Debug.message("стартануло");
		//BlockRenderer.forceRenderRebuild(c[0], c[1]+1, c[2], 0);
        this.data.progress += 1/this.data.work_time;
    },
    checkSapling:function(){
        const c = this.data.blockCoords;
        const b = World.getBlock(c[0], c[1]+1, c[2]);
        if(b.id == this.data.Sapling.id){
			//Game.tipMessage(b.data);
            return true;
        } 
        //Debug.warning("потеряно");
        this.data.progress = 0;
        this.data.active = false;
        return false;
    },
    boostValues:function(){
        this.data.work_time = 6000;
        this.data.wood = [30, 60];
        this.data.sapling = [1, 3];
        this.data.consumption = 5;
        this.data.boost = true;
        //Debug.message("забустил!");
    } ,
    returnValues:function(){
        this.data.work_time = 12000;
        this.data.wood = [4, 20];
        this.data.sapling = [0, 1];
        this.data.consumption = 3;
        //Debug.message("буст п5н");
        this.data.boost = false;
    }
});
ICRender.getGroup("ic-wire").add(BlockID.woodIncubator, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.woodIncubator, EU);
