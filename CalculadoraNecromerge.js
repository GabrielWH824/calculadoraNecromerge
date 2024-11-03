class Invocadores {
    constructor(nombre) {
        this.nombre = nombre
    }
    calcularInvocador() {
        throw new Error("Este metodo debe ser implementado");

    }
}
class InvocadoresRango1 extends Invocadores {
    calcularInvocador(runas, nivel, exponente) {
        if (nivel == 0) {
            throw new Error("No podes crear ningun altar");
        }

        exponente = nivel - 1
        base = 2 ** exponente
        nvRuna1 = 20 * (base)

        if (runas >= nvRuna1) {
            redondearCantidad = Math.trunc(cantidadDeInvocadores = runas / 20)
            console.log("\x1b[31m%s\x1b[0m", `${this.nombre}: Podes crear ${redondearCantidad} para alcanzar el nivel ${nivel}(es de base: ${base})`)
            if (cantidadDeInvocadores >= 32) {
                console.log(`Podes crear un Legenday Minion`)
            }
        } else {
            this.calcularInvocador(runas, nivel -= 1, exponente)
        }
    }
}
class InvocadoresRango2 extends Invocadores {
    calcularInvocador(runa1, runa2, nivel, exponente) {
        if (nivel == 0) {
            throw new Error("No podes crear ningun altar");
        }

        exponente = nivel - 1
        base = 2 ** exponente
        nvRuna1 = 20 * (base)
        nvRuna2 = 50 * (base)

        if (runa1 >= nvRuna1 && runa2 >= nvRuna2) {
            cantPorRunas1 = runa1 / 20
            cantPorRunas2 = runa2 / 50
            if (cantPorRunas1 < cantPorRunas2) {
                redondearCantidad = Math.floor(cantPorRunas1)
            }
            else {
                redondearCantidad = Math.floor(cantPorRunas2)
            }
            console.log("\x1b[33m%s\x1b[0m", `${this.nombre}: Podes crear ${redondearCantidad} para alcanzar el nivel ${nivel}(es de base: ${base})`)
            if (redondearCantidad >= 32) {
                console.log(`Podes crear un Legenday Minion`)
            }
        }
        else {
            this.calcularInvocador(runa1, runa2, nivel -= 1, exponente)
        }
    }
}
class InvocadoresRango3 extends Invocadores {
    calcularInvocador(runa1, runa2, nivel, exponente) {
        if (nivel == 0) {
            throw new Error("No podes crear ningun altar");
        }

        exponente = nivel - 1
        base = 2 ** exponente
        nvRuna3 = 30 * (base)
        nvRuna4 = 30 * (base)

        if (runa1 >= nvRuna3 && runa2 >= nvRuna4) {
            redondearCantidad = Math.floor(cantidadDeInvocadores = runa1 / 30)
            console.log("\x1b[35m%s\x1b[0m", `${this.nombre}: Podes crear ${redondearCantidad} para alcanzar el nivel ${nivel}(es de base: ${base})`)
            if (cantidadDeInvocadores >= 32) {
                console.log(`Podes crear un Legenday Minion`)
            }
        } else {
            this.calcularInvocador(runa1, runa2, nivel -= 1, exponente)
        }
    }
}

const grave = new InvocadoresRango1("Grave")
const supCupboard = new InvocadoresRango1("Supply Cupboard")
const altar = new InvocadoresRango1("Altar")
const lectern = new InvocadoresRango2("Lectern")
const fridge = new InvocadoresRango2("Fridge")
const portal = new InvocadoresRango3("Portal")

// Variables
let base
let nvRuna1 //20*(2 ** exponente)
let cantPorRunas1
let nvRuna2 //50*(2 ** exponente)
let cantPorRunas2
let nvRuna3 //30*(2 ** exponente)
let nvRuna4 //30*(2 ** exponente)
let nivel = 5
let cantidadDeInvocadores
let redondearCantidad

// grave.calcularInvocador(300, 5, null)
supCupboard.calcularInvocador(979, nivel, null)
lectern.calcularInvocador(246, 300, nivel, null)
portal.calcularInvocador(57, 174, nivel, null)
