(() => {

    function abc(mensage: string): never {
        throw new Error(mensage)
    }
})()