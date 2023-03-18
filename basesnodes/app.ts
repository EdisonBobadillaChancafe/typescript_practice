
import { funcionmultiplicar } from './helper/function';
import * as yargs from 'yargs';
import { demandCommand, number, required } from 'yargs';
import * as colors from 'colors'
import { mainModule } from 'process';
import { read } from 'fs';
import { resolve } from 'path';
require('colors')
const inquirer = require('inquirer');

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

const main = async () => {
    let otp = ''
    do {
        otp = await Monstrarmenu()
        console.log("\n", otp)
        await pausa()
    }
    while (otp != 'Salir')


}

main()




