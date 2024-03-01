import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

let cliente = new Cliente('Ariel');
let impuestos = new Impuestos(100000, 20000);

cliente.setImpuestos(impuestos);

const impuesto = cliente.calcularImpuesto(21);
console.log("Impuestos a pagar por el cliente "+cliente.nombre+" "+"$"+impuesto);
