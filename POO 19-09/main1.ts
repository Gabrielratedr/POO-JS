import { Cliente } from "./1/cliente";

let clienteUm = new Cliente ("Flávio", "flavinhodopneu", "********", "1 hora e 27 minutos");

//console.log (clienteUm.verNome + "\n" + clienteUm.verLogin + "\n" + clienteUm.verTempo + "\n" + clienteUm.verSenha + ".")

clienteUm.verNome();
clienteUm.verLogin();
clienteUm.verTempo();
clienteUm.verSenha();