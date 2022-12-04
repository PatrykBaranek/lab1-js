export var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["YELLOW"] = 2] = "YELLOW";
    Color[Color["GREEN"] = 3] = "GREEN";
})(Color || (Color = {}));
export const colorTuple = [
    ['RED', '#f2493a'],
    ['BLUE', '#3959f7'],
    ['YELLOW', '#eff545'],
    ['GREEN', '#4df752'],
];
export const getColor = (color) => {
    return colorTuple[Object.values(Color).indexOf(color)][1];
};
