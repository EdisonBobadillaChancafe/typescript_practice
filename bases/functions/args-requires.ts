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

    let myFunction;
    myFunction = addNumber
    console.log(myFunction(1, 5))
    myFunction = greet
    console.log(myFunction('Holis'))
    myFunction = savetheWorld
    console.log(myFunction())



})()