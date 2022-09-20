export class Paciente {
    paciente: string;
    leito: number;
    altura: string;
    peso: string;

constructor (
    paciente: string,
    leito: number,
    altura: string,
    peso: string,
    ){
        this.paciente = paciente;
        this.leito = leito;
        this.altura = altura;
        this.peso = peso;
    }
verPaciente () {
    console.log (`Paciente: ${this.paciente}.`)
}
verLeito () {
    console.log (`Leito: ${this.leito}.`)
}
verAltura () {
    console.log (`Altura: ${this.altura}.`)
}
verPeso () {
    console.log (`Peso: ${this.peso}.`)
}
}