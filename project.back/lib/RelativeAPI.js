LIBRARY({
    name:"RelativeAPI",
    version:"1",
    api:"CoreEngine",
    shared:false
});
/*
Библиотека создана Kotoffey23.
Библиотека для свободного использования.
Запрещается всякое взаимодействие с кодом библиотеки, включая как полное, так и частичное копирование кода.
Запрещается распространение библиотеки на сторонних источниках.
Используя эту библиотеку вы автоматически соглашаетесь с этими правилами.
*/

var relativeSides = [
    [3, 4, 2, 5],
    [2, 5, 3, 4],
    [5, 3, 4, 2],
    [4, 2, 5, 3]
];
var relativeCoords = [ 
    [[0, 1], [0, -1], [1, 0], [-1, 0]],
    [[-1, 0], [1, 0], [0, 1], [0, -1]],
    [[0, -1], [0, 1], [-1, 0], [1, 0]],
    [[1, 0], [-1, 0], [0, -1], [0, 1]]
];
//0 - фронт; 1 - лево; 2 - жепа; 3 - право 
var RelativeAPI = {
    getRelativeSide:function(data, side){
        return relativeSides[data][side];
    },
    getRelativeCoordsArray:function(coords, side){
        const relative = this.getRelativeCoords(coords, side);
        return [relative.x, relative.y, relative.z];
    },
    getRelativeCoords:function(coords, side){
        const data = World.getBlock(coords.x, coords.y, coords.z).data;
        const relative = relativeCoords[side][data];
        return {x: coords.x+relative[0], y: coords.y, z: coords.z+relative[1]};
    }
}

EXPORT("RelativeAPI", RelativeAPI);
