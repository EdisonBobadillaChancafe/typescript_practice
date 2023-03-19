import { v4 as uuidv4 } from 'uuid';
export class Tarea {
    public id: string
    public desc: string
    public completado: any
    constructor(desc: string, completado?: boolean) {
        this.id = uuidv4(),
            this.desc = desc,
            this.completado = null
    }
}