export class ContaBancaria {
    saldo: number;
    titular: string;
    conta: string;
    agencia: number;

constructor (
    saldo: number,
    titular: string,
    conta: string,
    agencia: number
    ){
        this.saldo = saldo;
        this.titular = titular;
        this.conta = conta;
        this.agencia = agencia;
    }
verTitular () {
    console.log (`Titular: ${this.titular}.`)
}
verConta () {
    console.log (`Conta: ${this.conta}.`)
}
verAgencia () {
    console.log (`Agência: ${this.agencia}.`)
}
verSaldo () {
    console.log (`Saldo: ${this.saldo}.`)
}
}