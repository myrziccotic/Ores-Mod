var GuideAPI = false;
var GuideHelper, Ctrl = null;
var pages = {};

const Lcolor = UIColor.rgb(0, 0, 128);
const Ncolor = UIColor.rgb(128, 0, 128);

var Guide = {
    pages:{},
    addPage:function(name, left, right, navigation){
        //if(!this.pages[name])
            pages[name] = {left: {}, right: {}};
        left = this.createPageSide(left);
        right = this.createPageSide(right);
        pages[name].left = left;
        pages[name].right = right;
        if(navigation) this.addButtons(name, navigation);
    },
    addButtons:function(name, buttons){
        for(var i in buttons){
            pages[name][i] = buttons[i];
        }
    },
    createPageSide:function(page){
        const ctrl = page.ctrl;
        delete page.ctrl;
        switch(ctrl){
            case "itemPage":
                page.controller = Ctrl.ITEM_PAGE;
                page.items = this.formateItemsList(page.items);
                return page;
            case "basic":
                page.controller = Ctrl.BASIC_PAGE;
                return page;
            case "craftPage":
                page.controller = Ctrl.GRID_3x3_PAGE;
                //page.recipes = this.formateRecipeGridList(page.recipes);
                return page;
        }
    },
    formateItemsList:function(items){
        var arr = [];
        var pointer = 0;
        var currentItem = {};
        for(var i in items){
            switch(pointer){
                case 0:
                    pointer++;
                    currentItem.id = items[i];
                break;
                case 1:
                    pointer--;
                    currentItem.data = items[i];
                    arr.push(currentItem);
                    currentItem = {};
                break;
            }
        }
        return arr;
    },
    /*formateRecipeGridList:function(recipes){
        var arr = [];
        for(var i in recipes){
            let grid = [];
            let result = {};
            let materials = {};
            let ingridient = {};
            let char = null;
            let pointer = 0;
            result.id = recipes[i][0][0];
            result.data = recipes[i][0][1];
            grid[0] = recipes[i][1][0].split("");
            grid[1] = recipes[i][1][1].split("");
            grid[2] = recipes[i][1][2].split("");
            for(var m in recipes[i][2]){
                switch(pointer){
                    case 0:
                        pointer++;
                        char = m;
                    break;
                    case 1: 
                        pointer++;
                        ingridient.id = recipes[i][2][m];
                    break;
                    case 2:
                        pointer = 0;
                        ingridient.data = recipes[i][2][m];
                        materials[char] = ingridient;
                    break;
                }
            }
            arr.push({result: result, materials: materials, grid: grid});
        }
        return arr;
    },*/
    text:function(text, size, color, bold, underline){
        return {text: Translation.translate(text), size: size || 15, color: color || Ncolor, bold: bold, underline: underline};
    },
    link:function(text, link, size, color){
        return {text: Translation.translate(text), size: size || 20, color: color || Lcolor, link: link, underline: true, bold: true}
    },
    title:function(text){
        return this.text(text, 20, UIColor.CYAN);
    },
    solar:function(type){
        return this.text(StringHelper
        .solar(type));
    }
}

ModAPI.addAPICallback("GuideAPI", function(api){
    GuideAPI = api.GuideAPI;
    GuideHelper = api.GudeHelper;
    Ctrl = api.PageControllers;
    Callback.addCallback("PostLoaded", function(){
        GuideAPI.registerGuide("oresModGuide", {
            item: ItemID.oresModGuideBook,
            pages: pages,
            textures:{
                background: "blue_background",
                nextLink: "next",
                preLink: "pre",
                close: "btn"
            }
        });
    });
});
