MachineRegistry.registerGenerator(BlockID.molecularGenerator, {
    defaultValues:{
        power: true
    },
    redstone:function(params){
        this.data.power = !params.power;
    },
    getEnergyStorage:function(){
		return 100000;
	},//100к
    getInput:function(slot){
        for(var i in itemsPrice){
            for(var d in itemsPrice[i].items){
                if(slot.id == itemsPrice[i].items[d]){
                    return random(itemsPrice[i].price[0], itemsPrice[i].price[1]);
                }
            }
        }
        this.input = random(2, 20);
        return this.input;
    },
    canExtractEnergy:function(t){
        return t == 1;
    },
    input: 0,
    tick:function(){
        if(TIPS){
            var container = this.container.getGuiContent();
            if(container){
                container.elements.input.text = StringHelper.t("Generation")+": "+this.input+"QE";
                if(this.input > 0){
                    container.elements.input.font.color = UIColor.GREEN;
                }else{
                    container.elements.input.font.color = UIColor.YELLOW
                }
                this.input = 0;
            }
        }
        this.container.setText("molecularText", parseInt(this.data.energy)+"/100000 Qe");
        this.container.setScale("molecularScale", this.data.energy/100000);
        var slot = null;
        var num;
		var time = World.getThreadTime()%10;
        if((this.data.power&&this.data.energy < this.getEnergyStorage())&&(time == 0 || time == 5)){
            for(var i = 1; i <= 30; i++){
                if(this.container.getSlot("slot"+i).id > 0){
                    slot = this.container.getSlot("slot"+i);
                    num = i;
                }
            }
            if(slot){
                this.data.energy = Math.min(this.getEnergyStorage(), this.data.energy+this.getInput(slot));
                slot.count--;
                if(slot.count == 0) this.container.validateSlot("slot"+num);
            }
        }
    },
    getTier:function(){
        return 2;
    },
    getGuiScreen:function(){return gui.MG},
    energyTick:function(type, src){
        var output = Math.min(this.data.energy, 28);
        this.data.energy += src.add(output) - output;
    },
    click:function(){
        if(Player.getCarriedItem().id == ItemID.QEconduct&&World.getBlockID(this.x, this.y+1, this.z) == 0){
            World.setBlock(this.x, this.y+1, this.z, BlockID.QEconduct);
            Player.decreaseCarriedItem(1);
            return true;
        }
    }
});
ICRender.getGroup("QE-wire").add(BlockID.molecularGenerator, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.molecularGenerator, QE);
