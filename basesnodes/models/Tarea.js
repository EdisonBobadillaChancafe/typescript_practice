"use strict";
exports.__esModule = true;
exports.Tarea = void 0;
var uuid_1 = require("uuid");
var Tarea = /** @class */ (function () {
    function Tarea(desc, completado) {
        this.id = (0, uuid_1.v4)(),
            this.desc = desc,
            this.completado = null;
    }
    return Tarea;
}());
exports.Tarea = Tarea;
