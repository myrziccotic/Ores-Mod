LIBRARY({
    name: "itemAnimator",
    version: "1",
    shared: false,
    api: "CoreEngine"
});

var storage = {};

function update(key, obj){
    storage[key] = obj;
}

function registerItemAnimation(item, textures, startPosition){
    item.data = item.data || 0;
    storage[item.id + ":" + item.data] = {
        textures: textures,
        position: startPosition - 1,
        direction: 1,
        needUpdate: true
    }

    Item.registerIconOverrideFunction(item.id, function(item){
        const key = item.id + ":" + item.data
        let st = storage[key];
        if(st === undefined) return null;
        if(World.getThreadTime()%4 == 0){
            if(st.needUpdate){
                const texture = st.textures[st.position];
                const nextIndex = st.position + st.direction;
                st.needUpdate = false
                if(nextIndex > st.textures.length - 1 ||
                    nextIndex == 0){
                    st.direction *= -1;
                }
                st.position += st.direction;
                storage[key] = st;
                return texture;
            }
        }else{
            storage[key].needUpdate = true;
        }

        return st.textures[st.position];
    });
}

var ItemAnimator = {
    registerItemAnimation: registerItemAnimation,
    update: update
}

EXPORT("ItemAnimator", ItemAnimator);