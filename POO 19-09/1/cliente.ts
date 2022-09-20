export class Cliente {
    nome: string;
    login: string;
    senha: string;
    tempo: string;

constructor (
    nome: string,
    login: string,
    senha: string,
    tempo: string
){
    this.nome = nome
    this.login = login
    this.senha = senha
    this.tempo = tempo
}
verNome () {
    console.log (`Olá, ${this.nome}!`)
}
verLogin () {
    console.log (`O login da sua conta é ${this.login}.`)
}
verTempo () {
    console.log (`Seu tempo restante é de ${this.tempo}.`)
}
verSenha () {
    console.log (`Sua senha é ${this.senha}.`)
}
}