"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cliente = new _cliente["default"]('Ariel');
var impuestos = new _impuestos["default"](100000, 20000);
cliente.setImpuestos(impuestos);
var impuesto = cliente.calcularImpuesto(21);
console.log("Impuestos a pagar por el cliente " + cliente.nombre + " " + "$" + impuesto);