function saldo (vitorias , derrotas ){
    let saldo = vitorias - derrotas
    return saldo;
}

let saldoFinal = saldo(220,124);
console.log(saldoFinal)

if (saldoFinal <= 10){
    nivel = "Ferro"

} else if (saldoFinal >= 11 && saldoFinal <= 20) {
    nivel = "Bronze"

} else if (saldoFinal >= 21 && saldoFinal <= 50) {
    nivel = "Prata"

} else if (saldoFinal >= 51 && saldoFinal <= 80) {
    nivel = "Ouro"

} else if (saldoFinal >= 81 && saldoFinal <= 90) {
    nivel = "Diamante"

} else if (saldoFinal >= 91 && saldoFinal <= 100) {
    nivel = "Lendário"

} else if (saldoFinal >= 101){
    nivel = "Imortal"
}
console.log(`O Herói tem saldo de ${saldoFinal} vitorias está no nível de ${nivel}`)