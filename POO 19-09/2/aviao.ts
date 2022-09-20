export class Aviao {
    assento: number;
    empresa: string;
    tipo: string;
    piloto: string;
    passageiro: string;

    constructor (
        assento: number,
        empresa: string,
        tipo: string,
        piloto: string,
        passageiro: string
    ){
        this.assento = assento
        this.empresa = empresa
        this.tipo = tipo
        this.piloto = piloto
        this.passageiro = passageiro
    }
    verPassageiro () {
        console.log (`Olá, ${this.passageiro}!`);
    }
    verPiloto () {
        console.log (`Me chamo ${this.piloto}. Serei o seu piloto nessa viagem.`);
    }
    verTipoEEmpresa () {
        console.log (`O senhor está viajando em um ${this.tipo} da empresa ${this.empresa}.`);
    }
    verAssento () {
        console.log (`Seu assento é o ${this.assento}.`);
        console.log (`"Esperamos que goste e se sinta confortável.\nBoa viagem!`);
    }     
}