
import { funcionmultiplicar } from './helper/function';
import * as yargs from 'yargs';
import { demandCommand, number, required } from 'yargs';
import * as colors from 'colors'
import { mainModule } from 'process';
import { read } from 'fs';
import { resolve } from 'path';
require('colors')
const inquirer = require('inquirer');
const readline = require('readline');
import { Tareas } from './models/Tareas';
import { Tarea } from './models/Tarea';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu_opciones: Array<Object> = [

    {
        value: '1',
        name: 'Crear Tarea'
    },
    {
        value: '2',
        name: 'Listar Tarea'
    },
    {
        value: '3',
        name: 'Listar Tareas Complejas'
    },
    {
        value: '4',
        name: 'Listar Tareas Pendientes'
    },
    {
        value: '5',
        name: 'Completar Tareas'
    },
    {
        value: '6',
        name: 'Borrar Tareas'
    },
    {
        value: '0',
        name: 'Salir'
    },
]

const menuopt: Array<Object> = [
    {
        type: 'rawlist',
        name: 'option',
        message: 'Que desea',
        choices: menu_opciones
    }
]


const Monstrarmenu = async (): Promise<any> => {
    return new Promise(async resolve => {

        console.log('---------------------------'.green)
        console.log('Seleccione una opcion'.green)
        console.log('---------------------------\n'.green)
        const otp = await inquirer.prompt(menuopt)
        return { otp }

    })


}
const pausa = async (): Promise<void> => {
    const question = {
        type: 'input',
        name: 'enter',
        message: 'Presione Enter para continuar'
    }
    await inquirer.prompt(question)
}
const leerimput = async (mensaje: string): Promise<string> => {
    const question = {
        type: 'input',
        name: 'enter',
        message: mensaje
    }
    const pendiente = await inquirer.prompt(question)
    return (pendiente)
}

const main = async () => {
    let bandera: boolean = true
    const tareas = new Tareas()
    const otp = await Monstrarmenu() // close the previous readline Interface
    rl = readline.createInterface({ // reset the readline Interface
        input: process.stdin,
        output: process.stdout
    });
    /*
    while (bandera) {

        const tarea = new Tarea('Compara comida')

        tareas.set(tarea)
        
        console.log('-----------')

        /*
        console.log('Termino')
        console.log(otp)
        if (otp == 'Salir') {
            bandera = false
        }
        switch (otp) {
            case 'Crear Tarea':
                const segundaioption = await leerimput('Creando..')
                console.log('--------------------')
                console.log('--------------------')
                tareas.crearTarea(segundaioption)
                console.log(tareas)
                break;
            case 'Listar Tarea':

                break;
            case 'Listar Tareas Complejas':

                break;
            case 'Listar Tareas Pendientes':

                break;
            case 'Completar Tareas':

                break;
            case 'Borrar Tareas':

                break;
        }
    }*/


}

main()




