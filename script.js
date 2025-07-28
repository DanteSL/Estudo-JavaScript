// Código de valor
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

// Operações aritméticos e Relacionais

var idade = 26
var n = idade >= 13 ? "MAIOR" : "MENOR"

console.log (n)

var a = 5
var b = 5


var n1 = 20
var n2 = 30

console.log("soma", a + b);
console.log("subtracao", a - b);
console.log("multiplicacao", a * b);
console.log("divisao", a / b)

var contador = 0

var n1 = ++contador
var n2 = --contador
console.log(n1)
console.log(n2)

var x = 10
var y = "10"

console.log(x == y)
console.log(x === y)
console.log(x != y)
console.log(x !== y)

// Operação ternário

var idade = 20
var temCarteira = "Pode dirigir"

console.log(idade >= 18 && TemCarteira)

var temchuva = true
var temguardachuva = false

console.log("Vai se molhar", temchuva && !temguardachuva)

var numero = 7
var parouimpar = (numero % 2 === 0) ? "par" : "impar"

console.log("O numero é", parouimpar)

var numero = 12
var parouimpar = (numero % 4 ===0) ? "par" : "impar"

console.log("O numero é", parouimpar)

var numero = 50
var parouimpar = (numero * 15) ? "par" : "impar"

console.log("O numero é", parouimpar)

var vaichover = "Vai se molhar"
var naovaichover = "Não vai se molhar"
var guardachuva = true

console.log(guardachuva ? vaichover : naovaichover)

var estante = "Não tem livros"
var estanteocupada = "Tem livros"
var pegarlivro = true

console.log(pegarlivro ? estanteocupada : estante)

var gatonacaixa = "Tem um gato na caixa"
var gatoforadacaixa = "Não tem um gato na caixa"
var gato = true

console.log(gato ? gatonacaixa : gatoforadacaixa)

var numero = 20
var parouimpar = (numero % 2 === 0) ? "par" : "impar"

console.log("O numero é", parouimpar)

var estacionamento = "Há vagas"
var estacionamentocheio = "Não há vagas"
var vagas = true

console.log(vagas ? estacionamento : estacionamentocheio)

var numero = 34
var parouimpar = (numero % 2 === 0) ? "par" : "impar"

console.log("O numero é", parouimpar)

//Operações de Aritmética e Relacionais

var x = 10
var y = "10"

console.log("x == y", x == y)
console.log("x > y", x > y)
console.log("x != y", x != y)
console.log("x === y", x === y)
console.log("x !== y", x !== y)
console.log("x = y", x = y)

var x = 18237128731823
var y = 94875389579289

console.log("Somar", x + y)
console.log("Subtração", x - y)
console.log("Divisão", x / y)
console.log("Multiplicação", x * y)
console. log("Módulo", x % y)

var x = parseInt("10")

console.log(x)

var y = parseFloat(10)

console.log(y)

var n1 = 10
var n2 = 20

var n3 = n1 + 10
var n4 = n2 -= 20

console.log(n3)
console.log(n4)

var n1 = 10
var n2 = 10

var n3 = n1 + 10
var n4 = n1 += 10

console.log(n3)
console.log(n4)

var numero = 12
var parouimpar = (numero % 2 === 0) ? "impar" : "par"

console.log("O numero é", parouimpar)

var a = 5
var b = 10
var d = true

console.log (d ? a : b)

var n1 = 30
var n2 = "30"

console.log("Igual á", n1 == n2)
console.log("Identico á", n1 === n2)
console.log("Maior que", n1 > n2)
console.log("Menor que", n1 < n2)
console.log("Menor ou igual que", n1 <= n2)
console.log("Maior ou igual que", n1 >= n2)
console.log("Diferente de", n1 != n2)







