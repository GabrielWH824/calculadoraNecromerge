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
        let niv = 20 * (2 ** exponente)

        if (runas >= niv) {
            let base = 2 ** exponente
            let cantidadDeInvocadores = runas / 20
            let redondearCantidad = Math.floor(cantidadDeInvocadores)
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
        let nivRuna1 = 20 * (2 ** exponente)
        let nivRuna2 = 50 * (2 ** exponente)
        let base = 2 ** exponente

        if (runa1 >= nivRuna1 && runa2 >= nivRuna2) {
            let cantPorRunas1 = runa1 / 20
            let cantPorRunas2 = runa2 / 50
            let redondearCantidad
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
        let nivRuna1 = 30 * (2 ** exponente)
        let nivRuna2 = 30 * (2 ** exponente)
        let base = 2 ** exponente

        if (runa1 >= nivRuna1 && runa2 >= nivRuna2) {
            let cantidadDeInvocadores = runa1 / 30
            let redondearCantidad = Math.trunc(cantidadDeInvocadores)
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


// grave.calcularInvocador(300, 5, null)
supCupboard.calcularInvocador(979, 5, null)
lectern.calcularInvocador(246, 300, 5, null)
portal.calcularInvocador(57, 174, 5, null)
