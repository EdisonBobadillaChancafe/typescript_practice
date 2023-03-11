(() => {
    const heroe: string = 'Flash'
    function returnName(): string {
        return heroe
    }
    function activateBatiSenal(): string {
        return 'Activada'
    }
    const aca: string = returnName()
    console.log(typeof activateBatiSenal)
})()