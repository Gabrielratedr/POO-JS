export abstract class Animal {
    idade: number;
    nome: string;

constructor(
    idade: number,
    nome: string,
){
    this.idade = idade
    this.nome = nome
}
onomatopeia (): void {}
verCorrer (): void {}
}