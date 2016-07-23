"use strict";
var Commands;
(function (Commands) {
    Commands[Commands["PLACE"] = 0] = "PLACE";
    Commands[Commands["MOVE"] = 1] = "MOVE";
    Commands[Commands["LEFT"] = 2] = "LEFT";
    Commands[Commands["RIGHT"] = 3] = "RIGHT";
    Commands[Commands["REPORT"] = 4] = "REPORT";
})(Commands || (Commands = {}));
module.exports = Commands;
