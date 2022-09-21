import { Animal } from "./animal";

export class Preguica extends Animal{
    familia: string;
    especie: string;

constructor (
    familia: string,
    especie: string,
    porte: string,
    sexo: string,
    raca: string,
    cor: string,
    idade: number,
    nome: string
) {
    super (idade, nome)
    this.familia = familia
    this.especie = especie
}
verCorrer(): void {
    console.log (`~correndo igual preguiça~`)
}
onomatopeia(): void {
    console.log (`~som de preguiça~`)
}
subirArvore () {
    console.log (`~subindo em árvore igual preguiça~`)
}
}