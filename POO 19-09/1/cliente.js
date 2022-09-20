"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, login, senha, tempo) {
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.tempo = tempo;
    }
    Cliente.prototype.verNome = function () {
        console.log("Ol\u00E1, ".concat(this.nome, "!"));
    };
    Cliente.prototype.verLogin = function () {
        console.log("O login da sua conta \u00E9 ".concat(this.login, "."));
    };
    Cliente.prototype.verTempo = function () {
        console.log("Seu tempo restante \u00E9 de ".concat(this.tempo, "."));
    };
    Cliente.prototype.verSenha = function () {
        console.log("Sua senha \u00E9 ".concat(this.senha, "."));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
