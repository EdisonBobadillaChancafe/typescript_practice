(() => {
    //Parametros opcionales y requeridos
    function funcionlastname(firstname: string, upper: string, lastname?: string | boolean): string {
        return `${firstname} + ${lastname || 'No hay'}`
    }
    //Parametros REst
    function functionfirstname(firsname: string, lastname?: string, ...arg: number[]): boolean {
        arg.forEach(element => {
            console.log(element)
        });
        return true
    }
    //const name = funcionlastname('aca', 'Idea');
    //functionfirstname('Tovi', '', 123, 123123, 345345, 345345, 123123, 123)
    //Tipo function
    const addNumber = (a: number, b: number) => a + b
    const greet = (name: string) => `Hola ${name}`
    const savetheWorld = () => 'El mundo esta clean'

    let myFunction: () => string
    //myFunction = addNumber
    //console.log(myFunction(1, 5))
    //myFunction = greet
    //console.log(myFunction('Holis'))
    //myFunction = savetheWorld
    //console.log(myFunction())

    function sumar(a: number, b: number): number {
        return a + b
    }
    function aca(heroe: Array<string>): number {
        return heroe.length
    }
    const SuperHeroe: Array<string> = ['asde', 'asd']
    function llamardita(llamar: boolean = true) {
        if (llamar) {
            console.log('Llamadita')
        }
    }
    llamardita();
    const uniheroe = (...arg: Array<number>): string => {
        return arg.join()
    }
    const nohacenada = (numero: number, text: string, boleano: boolean, arreglo: Array<any>) => { }
    let nohacenadadenada: (a: number, b: string, c: boolean, ar: Array<any>) => void;
    nohacenadadenada = nohacenada



})()