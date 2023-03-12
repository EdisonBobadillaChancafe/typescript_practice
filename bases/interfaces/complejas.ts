(() => {
    interface Client {
        name: string,
        age?: number
        adress: Adress
    }
    interface Adress {
        id: number,
        zip: string,
        city: string
        getfullAdress(id: string): string
    }

    const client: Client = {
        name: '',
        age: 25,
        adress: {
            city: '',
            id: 123,
            zip: '',
            getfullAdress(id: 'asd') {
                console.log(this.id)
                return `${this.id}`
            },
        }
    }

})()