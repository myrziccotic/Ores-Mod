LIBRARY({
    name:"GUILib",
    version:"1",
    api:"CoreEngine",
    shared:false
});

var GUI = {
    createObject:function(text){
        GUI.creationUI = {
            standart: {
                header: {
                    text: {
                        text: text
                    }
                },
                
                inventory: {
                    standart: true
                   
                },
                
                background: {
                    standart: true
                    
                }
            },
            
            drawing: [
              
            ],
            
            elements: {
               
            },
            
            params:{}
        }
    },
    addDrawableObject:{
        bitmap:function(bitmap, coords, scale){
            if(!scale) scale = 1;
            GUI.creationUI.drawing.push({type: "bitmap", bitmap: bitmap, x: coords.x, y: coords.y, scale: scale})
        },
        frame:function(coords, bitmap, width, height, scale){
            if(!scale) scale = 1;
            GUI.creationUI.drawing.push({type: "frame", x: coords.x, y: coords.y, scale: scale, bitmap: bitmap, width: width, height: height})
        },
        text:function(text, coords, font){
            if(!font) font = {};    
            GUI.creationUI.drawing.push({type: "text", text: text, x: coords.x, y: coords.y, font: font})
        }
    },
    addElement:{
        scale:function(name, coords, direction, bitmap, scale, invert){
            if(!invert) invert = false;
            GUI.creationUI.elements[name] = {type: "scale", x: coords.x, y: coords.y, direction: direction, bitmap: bitmap, invert: invert, scale: scale, value: 0.6}
        },
        text:function(name, coords, width, height, text, font){
            if(!font) font = {}
            GUI.creationUI.elements[name] = {type: "text", x: coords.x, y: coords.y, width: width, height: height, text: text, font: font}
        },
        slot:function(name, coords, size, visual, isValid, bitmap){
            if(!visual) visual = false;
            if(!size) size = 50;   
            if(!bitmap) bitmap = null;
            GUI.creationUI.elements[name] = {type: "slot", x: coords.x, y: coords.y, visual: visual, size: size, bitmap: bitmap};
            if(isValid){
                GUI.creationUI.elements[name].isValid = isValid;
            }
        },
        button:function(name, coords, bitmap, scale, clicker){
            GUI.creationUI.elements[name] = {type: "button", x: coords.x, y: coords.y, bitmap: bitmap, scale: scale, clicker: clicker};
        }
    },
    importScreen:function(){
        return new UI.StandartWindow(GUI.creationUI)
    },
    editStyles:function(styles){
        if(styles.background){
            GUI.creationUI.standart.background.standart = false;
            GUI.creationUI.standart.background.color = android.graphics.Color.parseColor(styles.background);
            delete styles.background;
        }
        GUI.creationUI.params = styles;
    },
    addClicker:function(name, clicker){
        GUI.creationUI.elements[name].clicker = clicker;
    },
    UIColor:function(){
        return android.graphics.Color
    },
	testUI:function(gui){
		Callback.addCallback("PostLoaded", function(){
			new UI.Container().openAs(gui);
		});
	}
}

EXPORT("GUI", GUI);
