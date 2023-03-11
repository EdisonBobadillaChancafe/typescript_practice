(() => {
    type heroe = {
        name: string, age?: number, power?: Array<string>, getName?: () => string
    }

    let fash: heroe = {
        name: 'Aca',
        age: 12,
        power: ['velocidad', 'vision'],
        getName() {
            return this.name
        }
    }
    let Mycustomvariable: string | heroe | number = fash
    console.log(typeof (Mycustomvariable))


})()