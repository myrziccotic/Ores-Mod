/*
    created by WolfTeam
    https://vk.com/wolf___team
    
    saveIcon(size, id, data*, count*, extra*);
    Сохранит иконку в размере size предмета/блока
    
    *-Не обязательно
    
    size = int //Размер иконки
    id = int //ID предмета/блока
    data = int(0) //Дата предмета/блока, по стандарту 0
    data = int(1) //Кол-во предмета/блока, по стандарту 1
    extra = ItemExtraData //Extra предмета
*/

Callback.addCallback("PostLoaded", function(){
    var names = ["Adamantite", "Lead", "Malachite", "Sapphire", "Uranium"];
    for(var i in names){
        saveIcon(128, BlockID["ore"+names[i]]);
        saveIcon(128, BlockID["block"+names[i]]);
    }
    names = ["labBlock", "matterReenactor", "molecularConverter", "molecularGenerator", "molecularSealant", "woodIncubator"];
    for(var i in names){
        saveIcon(128, BlockID[names[i]]);
    }
});

/*Злоебучий натив*/ 
//Kotoffey23: Согласен.
var classLoader = UI.getContext().getClass().getClassLoader(),
    t_int = java.lang.Integer.TYPE,
    t_str = java.lang.String,
    NativeItemInstanceExtra = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeItemInstanceExtra", true, classLoader),
    NativeItem = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeItem", true, classLoader),
    ResourcePackManager = java.lang.Class.forName("zhekasmirnov.launcher.mod.resource.ResourcePackManager", true, classLoader),
    ItemIconSource = java.lang.Class.forName("zhekasmirnov.launcher.api.mod.ui.icon.ItemIconSource", true, classLoader).getField("instance").get(null);
    
function getIntValueExtraData(extra){
    return NativeItemInstanceExtra.getMethod("getValueOrNullPtr", NativeItemInstanceExtra).invoke(null, extra);
}
function getDinamicIconName(id, count, data, extra){
    return NativeItem.getMethod(
        "getDynamicItemIconOverride",
        t_int,
        t_int,
        t_int,
        t_int
    ).invoke(null, new java.lang.Integer(id), new java.lang.Integer(count), new java.lang.Integer(data), extra);
}
function getBitmapFromResources(dinamic){
    return ResourcePackManager.getMethod("getBitmapFromResources", t_str).invoke(null, dinamic);
}
    
function getScaledIcon(dinamic, id, data, size){
    return ItemIconSource.getScaledIcon(dinamic, new java.lang.Integer(id), new java.lang.Integer(data), new java.lang.Integer(size), new java.lang.Integer(-1));
}
function getIconItem(size, id, count, data, extra){
    size = size || 16;
    id = id || 0;
    count = count || 1;
    data = data || 0;
    
    
    if(extra && (extra.toString().startsWith("zhekasmirnov.launcher.api.NativeItemInstanceExtra") || extra instanceof ItemExtraData))
        extra = getIntValueExtraData(extra);
    else
        extra = getIntValueExtraData(new ItemExtraData());
    
    var dinamic = getDinamicIconName(id, count, data, extra);
    if(dinamic != null)
        dinamic = getBitmapFromResources(dinamic);
    
    return getScaledIcon(dinamic, id, data, size);
}

function saveIcon(size, id, data, count, extra){
    if(data === undefined || data < 0)
        data = 0;
    if(count === undefined || count < 1)
        count = 1;
    
    path = __packdir__+"/icons/"
    if(!FileTools.isExists(path))
        FileTools.mkdir(path);
    
    path += id+"_"+data+".png"
    
    FileTools.WriteImage(path, getIconItem(size, id, count, data, extra))
    alert("Icon save in: /icons/"+id+"_"+data+".png");
}
