(() => {
    let fash: { name: string, age?: number, power?: Array<string>, getName?: () => string } = {
        name: 'Aca',
        age: 12,
        power: ['velocidad', 'vision']
    }
    fash = {
        name: 'ac',
        getName(): string {
            return this.name
        }
    }

})()