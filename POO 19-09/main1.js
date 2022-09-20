"use strict";
exports.__esModule = true;
var cliente_1 = require("./1/cliente");
var clienteUm = new cliente_1.Cliente("Flávio", "flavinhodopneu", "********", "1 hora e 27 minutos");
//console.log (clienteUm.verNome + "\n" + clienteUm.verLogin + "\n" + clienteUm.verTempo + "\n" + clienteUm.verSenha + ".")
clienteUm.verNome();
clienteUm.verLogin();
clienteUm.verTempo();
clienteUm.verSenha();
