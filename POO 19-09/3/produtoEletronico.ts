export class ProdutoEletronico {
    marca: string;
    voltagem: number;
    produto: string;
    cor: string;

    constructor (
        marca: string,
        voltagem: number,
        produto: string,
        cor: string
    ) {
        this.marca = marca
        this.voltagem = voltagem
        this.produto = produto
        this.cor = cor
    }
    verProdutoEMarca () {
        console.log (`Você adquiriu um ${this.produto} da marca ${this.marca}.`)
    }
    verVoltagemECor () {
        console.log (`Ele tem ${this.voltagem} volts, e a cor dele é ${this.cor}.`)
    }
}