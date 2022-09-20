export class Patinete {
    cor: string;
    tamanho: string;
    quantidadeRodas: number;
    marca: string;

constructor (
    cor: string,
    tamanho: string,
    quantidadeRodas: number,
    marca: string
    ) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.quantidadeRodas = quantidadeRodas;
        this.marca = marca;
    }
verCorEMarca () {
    console.log (`Você adquiriu um patinete da cor ${this.cor} da marca ${this.marca}!`)
}
verTamanhoEQuantidadeRodas () {
    console.log (`Ele é do tamanho ${this.tamanho} e possui ${this.quantidadeRodas}.`)
}
}