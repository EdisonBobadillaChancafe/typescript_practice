import { Tarea } from "./Tarea"

export class Tareas {
    private listado = {}
    constructor() {
        this.listado = {}
    }
    set(list: any) {
        this.listado = list
    }
    crearTarea(desc: string) {
        this.listado = new Tarea(desc)
    }
}