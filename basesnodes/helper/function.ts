import * as fs from 'fs';
export const funcionmultiplicar = async (base: number) => {

    let salida: string = ''
    for (let index = 0; index < 10; index++) {
        salida += `${base} * ${index} ==  ${base * index} `
    }

    fs.writeFileSync('tablita-base.txt', salida)
}
