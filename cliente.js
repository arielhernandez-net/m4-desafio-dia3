export default class Cliente {
    #nombre;
    #impuestos;

    constructor(nombre) {
        this.#nombre = nombre;
        this.#impuestos = null; 
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    setImpuestos(impuestos) {
        this.#impuestos = impuestos;
    }

    calcularImpuesto(porcentajeImpuesto) {
        if (!this.#impuestos) {
            console.log("Error: impuestos no definidos para el cliente");
            return;
        }
        let total = this.#impuestos.montoBrutoAnual - this.#impuestos.deducciones;
        return ((total * porcentajeImpuesto) / 100);
    }
}