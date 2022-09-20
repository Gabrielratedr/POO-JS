"use strict";
exports.__esModule = true;
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(assento, empresa, tipo, piloto, passageiro) {
        this.assento = assento;
        this.empresa = empresa;
        this.tipo = tipo;
        this.piloto = piloto;
        this.passageiro = passageiro;
    }
    Aviao.prototype.verPassageiro = function () {
        console.log("Ol\u00E1, ".concat(this.passageiro, "!"));
    };
    Aviao.prototype.verPiloto = function () {
        console.log("Me chamo ".concat(this.piloto, ". Serei o seu piloto nessa viagem."));
    };
    Aviao.prototype.verTipoEEmpresa = function () {
        console.log("O senhor est\u00E1 viajando em um ".concat(this.tipo, " da empresa ").concat(this.empresa, "."));
    };
    Aviao.prototype.verAssento = function () {
        console.log("Seu assento \u00E9 o ".concat(this.assento, "."));
        console.log("\"Esperamos que goste e se sinta confort\u00E1vel.\nBoa viagem!");
    };
    return Aviao;
}());
exports.Aviao = Aviao;
