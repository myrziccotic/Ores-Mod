MachineRegistry.registerElectricMachine(BlockID.armorImplantationTable, {
    defaultValues:{
        anims:{},
        energy_consumption: OresAPI.getConfigValue("armor_implantation_table.energy_consumption"),
        work_time: OresAPI.getConfigValue("armor_implantation_table.work_time"),
        active: false
    },
    slots:[],
    lastArmorItem: 0,
    validItems: Object.keys(mechanicArmorParams).map(eval),
    armorDataKey: null,//ключ к объекту armorExtraData
    armorIndex: null,//индекс предмета в слоте armorSlot, из массива this.validItems
    armorType: null,
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("armor_implantation_table.energy_storage");
    },
    getGuiScreen:function(){
        return gui.armorImplantationTable;
    },
    canReceiveEnergy:function(side){
		var getSide = RelativeAPI.getRelativeSide;
		var data = World.getBlock(this.x, this.y, this.z).data;
		var sides = [getSide(data, 1), getSide(data, 2), getSide(data, 3)];
		for(var i in sides){
			if(sides[i] == side){
				return true;
			}
		}
		return false;
    },
    getTier:function(){
        return 4;
    },
    tick:function(){
        this.updateAndRepairValues();
        if(this.processCondition()){
            if(this.data.progress == 0){
                this.isValidProcess();
                //if(this.data.active) Debug.warning("ОНО РАБОТАЕТ");
                //this.data.progress += 1/this.data.work_time;
            }   
            if(this.data.active) this.continueProcessing();
            if(this.data.progress >= 1){
                this.data.active = false;
                this.data.progress = 0;
                
                switch(this.data.work_type.mode){
                    case 0:
                        //Debug.message("§7метод finishBuildingProcess вызван");
                        this.finishBuildingProcess(); 
                    break;
                    case 1:
                        this.finishUpdatingProcess();
                    break;
                    case 2:
                        //Debug.message("§7метод finishInstallingProcess вызван");
                        this.finishInstallingProcess();
                    break;
                }
                this.flaskSlot.count--;
                this.container.validateSlot("flaskSlot");
            }
        }else{
            this.data.active = false;
            this.data.progress = 0;
        }
    },
    finishUpdatingProcess:function(){
        const slot = this.data.work_type.slot;
        armorExtraData.data[this.armorDataKey][slot].lvl++;
        armorExtraData.data[this.armorDataKey][this.flaskSlot.extra.getString("implantation")]++;
        armorExtraData.data[this.armorDataKey][slot].texture = this.flaskSlot.data;  
        this.container.clearSlot(slot);
        this.container.setSlot(slot, ItemID.flaskWithTrainedNanites, 1, this.flaskSlot.data);
    },
    finishInstallingProcess:function(){
        const slot = this.data.work_type.slot;
        armorExtraData.data[this.armorDataKey][slot].isEmpty = false
        armorExtraData.data[this.armorDataKey][slot].key = this.flaskSlot.extra.getString("implantation");
        armorExtraData.data[this.armorDataKey][slot].texture = this.flaskSlot.data;
        armorExtraData.data[this.armorDataKey][slot].lvl = 1;
        armorExtraData.data[this.armorDataKey][this.flaskSlot.extra.getString("implantation")] = 1;
        this.container.setSlot(slot, ItemID.flaskWithTrainedNanites, 1, this.flaskSlot.data);
    },
    finishBuildingProcess:function(){
        armorExtraData.data[this.armorDataKey][this.data.work_type.slot].locked = false;
        //Debug.message("§bработа, типа 0, завершена");
    },
    continueProcessing:function(){
        if(this.data.energy >= 6){
            this.data.progress += 1/this.data.work_time;
        }
    },
    processCondition:function(){
        return (this.flaskSlot.id == ItemID.flaskWithTrainedNanites&&this.isValidArmor() !== false);
    },
    isValidProcess:function(){
        //try{
            //Debug.message("§bметод isValidProcess был вызван");
            const property = this.flaskSlot.extra.getString("implantation");
            const extra = armorExtraData.get(this.armorDataKey);
            const mod = implantations[property];
            if(property == "builders"){
                //Debug.message("§bметод понял, что property == \"builders\""); 
                for(var i in this.slots){     
                    if(extra[this.slots[i]].locked){
                        //Debug.message("§bметод нашел нужный слот, ключ: "+this.slots[i]);
                        this.data.work_type = {
                            slot: this.slots[i],
                            mode: 0
                        }
                        this.data.active = true;
                        return;
                    }
                }
                //Debug.message("§bметод не нашел ни одного нужного слота");
            }
            //Debug.message("§bметод начал перебирать все слоты");
            for(var i in this.slots){
                //Debug.message("§1метод принимает слот "+this.slots[i]);
                if(extra[this.slots[i]].locked){
                    //Debug.message("§cслот оказался заблокированным");
                    continue;
                }
                //Debug.message("слот не заблокирован");
                let key = extra[this.slots[i]].key
                if(key == property){
                    //Debug.message("§bв слоте есть мод");
                    if(extra[this.slots[i]].lvl < mod.maxLvl){
                        //Debug.message("в слоте найден мод, который можно улучшить");
                        this.data.work_type = {
                            slot: this.slots[i],
                            mode: 1
                        }
                        this.data.active = true;
                        return;
                    }else return false;
                }else if(key == -1){
                    if(mod.categories === "all" ||
                       mod.categories.indexOf(this.armorType) > -1){
                        //Debug.message("этот мод подходит");
                        this.data.work_type = {
                            slot: this.slots[i],
                            mode: 2
                        }
                        this.data.active = true;
                        return;
                    }
                }
            }
        /*}catch(e){
            Debug.error("произошла неведомая херота: "+e);
        }*/
    },
    updateInfoStrings:function(params){
        //Debug.message("ыа");
        //try{
            let elements = this.container.getGuiContent().elements;
            let isLockedText = (!params.locked)?"Разблокирован":"Заблокирован";
            let isLockedColor = (!params.locked)?UIColor.GREEN:UIColor.parseColor("#8B0000");
            let impText = (params.key != -1)?implantations[params.key].name:"Не установлен";
            let impColor = (params.key != -1)?implantations[params.key].color:UIColor.parseColor("#8B0000");
            let impLvlText = (params.key != -1)?params.lvl+"/"+implantations[params.key].maxLvl:"N/А";
            let impLvlColor = (params.key != -1&&params.lvl < implantations[params.key].maxLvl)?UIColor.GREEN:UIColor.parseColor("#8B0000");
            
            elements["isLocked"].text = isLockedText;
            elements["imp"].text = "Мод: "+impText;
            elements["impLvl"].text = "Уровень: "+impLvlText;
            
            elements["impLvl"].font.color = impLvlColor;
            elements["imp"].font.color = impColor;
            elements["isLocked"].font.color = isLockedColor;
            //Debug.error("ыа");
        /*}catch(e){
            Debug.error(e);
        }*/
    },
    updateAndRepairValues:function(){
        this.container.setScale("EuScale", this.data.energy/this.getEnergyStorage());
        let container = this.container.getGuiContent();
        var params;
        let animations = Object.keys(this.data.anims);
        this.armorSlot = this.container.getSlot("armorSlot");
        this.flaskSlot = this.container.getSlot("flaskSlot");
        let isValid = this.isValidArmor();
        //if(container&&this.armorSlot.id != 0) Debug.m(isValid);
        
        if(isValid !== false){//а я немного удивился, когда isValid со значением 0 вернул false
            if(!this.armorSlot.extra){
                //alert("ha");
                this.armorSlot.extra = new ItemExtraData();
                this.armorSlot.extra.putInt("key", armorExtraData.register(mechanicArmorParams[Object.keys(mechanicArmorParams)[this.armorIndex]]));    
                //this.armorSlot.data = armorExtraData.register(mechanicArmorParams[Object.keys(mechanicArmorParams)[this.armorIndex]]);
            }
            this.armorDataKey = this.armorSlot.extra.getInt("key");
            //this.armorDataKey = this.armorSlot.data;
            this.armorType = mechanicArmorParams[Object.keys(mechanicArmorParams)[this.armorIndex]].type;
            params = armorExtraData.get(parseInt(this.armorDataKey));
            //Debug.message("ha");
        }
        if(container){
            if(UPDATE_NEEDED != -1){
                //Debug.warning("хы");
                this.updateInfoStrings(params[UPDATE_NEEDED]);
                UPDATE_NEEDED = -1;
            }
            
            if(this.data.progress > 0){
                container.elements["modeShower"].text = "Работает  "+this.getProgress()+"%";
                container.elements["modeShower"].font.color = UIColor.GREEN;
                
                switch(this.data.work_type.mode){
                    case 0:
                        container.elements["processModeShower"].text = "Конструирование"
                        container.elements["processModeShower"].font.color = UIColor.GREEN;
                    break;
                    case 1:
                        container.elements["processModeShower"].text = "Обновление";
                        container.elements["processModeShower"].font.color = UIColor.parseColor("#008080");
                    break;
                    case 2:
                        container.elements["processModeShower"].text = "Внедрение"
                        container.elements["processModeShower"].font.color = UIColor.parseColor("#800080");
                    break;
                }
            }else{
                container.elements["modeShower"].text = "Простаивает";
                container.elements["modeShower"].font.color = UIColor.parseColor("#8B0000");
                
                container.elements["processModeShower"].text = "Простаивает";
                container.elements["processModeShower"].font.color = UIColor.parseColor("#8B0000"); 
            }      
            
            if(this.armorSlot.id != this.lastArmorItem){
                if(isValid !== false){         
                    /*Debug.m(armorExtraData.data[this.armorDataKey]);
                    Debug.m(armorExtraData.data);
                    Debug.message(this.armorDataKey);
                    Game.message(" ");*/
                    this.lastArmorItem = this.validItems[this.armorIndex];
                    this.data.anims = {};
                    for(var i in params){
                        if(container.elements[i]){
                            this.slots.push(i);
                            this.data.anims[i] = params[i].slotCoords;
                            container.elements[i].x = 500;
                            container.elements[i].y = 240;
                            
                            if(params[i].key != -1) this.container.setSlot(i, ItemID.flaskWithTrainedNanites, 1, params[i].texture);
                        }
                    }
                    //Debug.m(this.data.anims);
                    //Debug.m(this.validItems[this.armorIndex]);
                }else{
                    for(var i = 1; i <= 5; i++){
                        container.elements["slot"+i].x = 1100;
                        container.elements["slot"+i].y = 1100;
                        
                        //this.container.setSlot("slot"+i, 0, 0, 0);
                        this.container.clearSlot("slot"+i);
                    }
                    this.slots = [];
                    this.data.anims = {};
                    this.lastArmorItem = this.data.progress = 0;
                    this.container.setText("isLocked", " "); 
                    this.container.setText("imp", " ");
                    this.container.setText("impLvl", " ");
                    
                    //Debug.error(0);
                }
            }
            if(animations.length > 0){
                for(var i in this.data.anims){
                    this.moveSlot(i, this.data.anims[i][0], this.data.anims[i][1], 20);
                }
            }
        }
    },
    isValidArmor:function(){
        this.armorIndex = this.validItems.indexOf(this.armorSlot.id);  
        
        if(this.armorIndex == -1) this.armorIndex = false;
        
        return this.armorIndex;
    },
    moveSlot:function(obj, toX, toY, step){
        let element = this.container.getGuiContent().elements[obj];
        
        step *= 10;
        
        const moveX = toX - element.x;
        const moveY = toY - element.y;
        
        let repairX = (element.x > toX)?Math.max:Math.min;
        let repairY = (element.y > toY)?Math.max:Math.min;
        
        let moveDistX = moveX/2;
        let moveDistY = moveY/2;

        for(var i = 0; i < step; i++){
            element.x = repairX(toX, element.x + 1 / moveDistX);
            element.y = repairY(toY, element.y + 1 / moveDistY);
        }
        
        if(element.x == toX&&element.y == toY) delete this.data.anims[obj];
    }
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.armorImplantationTable, EU);
ICRender.getGroup("ic-wire").add(BlockID.armorImplantationTable, -1);
