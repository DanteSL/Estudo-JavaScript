var nome = "Dante"
var idade = 26
var nota = 10

    `O aluno ${nome} com ${idade} anos de idade, tirou a nota ${nota}`

//Var e If

{
    var VagaLivre = "Entrar"
    var VagaOcupada = "Sair"
    var estado = prompt("Você quer entrar ou sair do estácionamento?")

    if (estado == VagaLivre) {
        console.log("Você entrou na vaga")
    }
    else {
        console.log("Você saiu da vaga")
    }
}

//Operações

var n1 = 10
var n2 = 20
var n3 = 50
var n4 = 100
var n5 = prompt("Caixa registradora, Opções de saque: \n 10 \n 20 \n 50 \n 100")

if (n5 == n1) {
    console.log("Você sacou 10 Reais")
} else {
    console.log("Digite um Valor Válido!")
}
if (n5 == n2){
    console.log("Você sacou 20 Reais")
} else {
    console.log("Digite um Valor Válido!")
}
if (n5 == n3){
    console.log("Você sacou 50 Reais")
} else {
    console.log("Digite um Valor Válido!")
}
if (n5 == n4){
    console.log("Você sacou 100 Reais")
} else {
    console.log("Digite um Valor Válido!")
}

var idade = 26
var n = idade >= 13 ? 'MAIOR' : 'MENOR'

var a = 5
var b = 5


