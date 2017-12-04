"use strict"


/**
 * @file Aplicacion para la gestion de un parking
 * @author Andrés Pérez Rodríguez
 * @version 1.0
 */

/**
 * @class Parking
 * @property {number} capacidad numero de coches que pueden haber en el parking
 * @prop {array} tunelLavado Lista de coches para lavar
 * @prop {array} coches lista de coches en el parking
 */

class Parking {
    /**
     * 
     * @param {number} capacidad Numero de coches que entran en el parking
     */
    constructor(capacidad) {
        this._capacidad = capacidad;
        this._tunelLavado = [];
        this._coches = [];
    }
    /**
      * @param {Object} coche coche que metemos en el parking
      * @returns {number} -1 parking lleno, 0 el coche fue metido
      * 
     */
    MeterCoche(coche) {
        //si la capacidad es mayor que los coches que hay en coches y tunel vacio es mayor que cero
        if (this._capacidad  > 0) {
            this._capacidad--;
            if (coche.lavado == true) {
                this._tunelLavado.push(coche.matricula);

            }
            else {
                this._coches.push(coche.matricula)
            }
            return 0;
        } else {
            return -1;
        }
    }
}


let a1 = new Parking(2);
let coche1 = {
    matricula: "G3542618S",
    lavado: false,
}
let meter = a1.MeterCoche(coche1);
console.log(meter)
console.log(a1)