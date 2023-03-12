(() => {
    interface addtwoNumbers {
        (a: number, b: number): number
    }

    let sumar: addtwoNumbers;
    sumar = (a: number, b: number) => {
        return 10
    }

    interface auto {
        encender: boolean,
        velocidad: number,
        acelerar(a: string): string
    }

    interface persona {
        reir: boolean,
        comer: boolean,
        llorar: boolean
    }

    const batimovil: auto = {
        encender: false,
        velocidad: 100,
        acelerar(a: 'asd') {
            return 'Gogogogogo!!!'
        }
    }
    console.log(batimovil.velocidad)

})()