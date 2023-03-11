"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name,
                this.realName = realName,
                this.team = team;
        }
    }
    Avenger.avgAge = 12;
    class Avenger2 {
        constructor(name, relaname) {
            this.name = name;
            this.relaname = relaname;
        }
        getFullName() {
            return this.name + this.relaname;
        }
    }
    class Xmen extends Avenger2 {
        constructor(name, realname, ismutand) {
            super(name, realname);
            this.name = name;
            this.realname = realname;
            this.ismutand = ismutand;
        }
        getFullNameXmen() {
            return super.getFullName();
        }
        get fullname() {
            return this.name;
        }
        set fullname(nuevoname) {
            this.name = nuevoname;
        }
    }
    class Mutante {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
        }
    }
    class Xmenso extends Mutante {
    }
    const wolverine = new Xmenso('aca1', 'aca1');
    console.log(wolverine);
    const Volverine = new Xmen('wol', 'verin', true);
    const antman = new Avenger('antman', 'capitanm', 'Scott');
    console.log(Avenger.avgAge);
    console.log(Volverine.fullname);
    Volverine.fullname = 'Nuevo full name';
    console.log(Volverine.fullname);
})();
//# sourceMappingURL=main.js.map