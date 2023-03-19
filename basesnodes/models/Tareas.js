"use strict";
exports.__esModule = true;
exports.Tareas = void 0;
var Tarea_1 = require("./Tarea");
var Tareas = /** @class */ (function () {
    function Tareas() {
        this.listado = {};
        this.listado = {};
    }
    Tareas.prototype.set = function (list) {
        this.listado = list;
    };
    Tareas.prototype.crearTarea = function (desc) {
        this.listado = new Tarea_1.Tarea(desc);
    };
    return Tareas;
}());
exports.Tareas = Tareas;
