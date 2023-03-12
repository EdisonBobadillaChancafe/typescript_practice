(() => {

    class Avenger {
        private name: string
        public team: string
        public realName: string
        static avgAge: number = 12
        constructor(name: string, team: string, realName: string) {
            this.name = name,
                this.realName = realName,
                this.team = team
        }
    }

    class Avenger2 {
        constructor(
            public name: string, public relaname: string
        ) { }
        protected getFullName() {
            return this.name + this.relaname
        }

    }
    class Xmen extends Avenger2 {

        constructor(
            public name: string,
            public realname: string,
            public ismutand: boolean
        ) {
            super(name, realname)
        }
        protected getFullNameXmen(): string {
            return super.getFullName()
        }
        get fullname() {
            return this.name
        }
        set fullname(nuevoname: string) {
            this.name = nuevoname
        }

    }

    abstract class Mutante {
        constructor(
            public name: string,
            public realname: string
        ) { }
    }
    class Xmenso extends Mutante {
        salvarelmundo() {
            return 'Salvado'
        }
    }
    class Villian extends Mutante {
        conquistarmundo() {
            return 'Destruido'
        }
    }


    const wolverine: Xmenso = new Xmenso('aca1', 'aca1')
    const magneto: Xmenso = new Xmenso('magneto', 'fierrazp')
    console.log(wolverine)



    const Volverine = new Xmen('wol', 'verin', true)

    const antman: Avenger = new Avenger('antman', 'capitanm', 'Scott')
    console.log(Avenger.avgAge)
    console.log(Volverine.fullname)
    Volverine.fullname = 'Nuevo full name'
    console.log(Volverine.fullname)

})()