// Exercícios de interpretação de código
// 1) 
//   O programa esta calculando o resto do número digitado pelo usuário
//   Se o resto do número for igual a 0, então o número é par. Passou no teste.
//   Se não, o número é impar. Não passou no teste.
//   

// 2) 
//   a) O programa serve apenas para informar ao usuário a fruta escolhida e o valor
//   b) O preço da fruta Maçã é R$ 2.25
//   c) O preço da fruta Pêra é R$ 5

// 3) 
//   a) Esta recebendo um valor digitado pelo usuário, transformando-o em número e guardando na variável "numero"
//   b) Se digitado 10: Esse número passou no teste + erro do console.log abaixo
//      Se digitado -10 : Não imprimiria nada + erro do console.log abaixo
//   c) Sim, a variável 'mensagem' foi declarada dentro de um bloco e tentaram utiliza-la em outro bloco.


// Exercícios de escrita de código
// 4)
// let idadeUsuario = Number(prompt("Sua idade? "))
//     if(idadeUsuario >= 18) {
//         console.log("Você pode dirigir")
//     }else{
//         console.log("Você não pode dirigir")
//     }

// 5)
// let turnoDodia = (prompt("Em qual turno do dia você estuda? (M/V/N)"))
//     if(turnoDodia === "M") {
//         console.log("Bom Dia!")
//     }else if(turnoDodia === "V"){
//         console.log("Boa Tarde!")
//     }else if(turnoDodia === "N"){
//         console.log("Boa Noite!")
//     }

// 6)
// let turnoDodia = (prompt("Em qual turno do dia você estuda? (M/V/N)"))
//     switch (turnoDodia) {
//         case "M":
//             console.log("Bom Dia!")
//             break;
//         case "V":
//             console.log("Boa Tarde!")
//             break;
//         case "N":
//             console.log("Boa Noite!")
//             break;
//         default:
//             console.log("Valor inválido.")
//             break;     
//     }


// 7)
//  generoFilme = prompt("Qual gênero do filme escolhido? ")
//  valorIngresso = prompt("Qual valor do ingresso? ")
//     if(generoFilme !== "Fantasia" && valorIngresso > 15) {
//         console.log("Escolha outro filme :(")
//     }else{
//         let snack = prompt("Qual snack que você quer comprar? ")
//         console.log("Bom filme! \n" + "e aproveite melhor com", snack)
//     }


// DESAFIO

let nomeCompleto = prompt("Digite seu nome completo: ")
let tipoJogo = prompt("Digite o tipo de jogo: (IN / DO)")
let etapaJogo = prompt("Digite a etapa do jogo: (SF / DT / FI)")
let categoria = Number(prompt("Categoria do jogo: (1 / 2 / 3 / 4)"))
let ingresso = prompt("Quantos ingressos: ")

if(tipoJogo === "DO"){
    let valorIngresso

    if(etapaJogo === "SF" && categoria === 1){
        valorIngresso = 1320
        etapaJogo = "Semifinais"
    }
    else if(etapaJogo === "SF" && categoria === 2){
        valorIngresso = 880
        etapaJogo = "Semifinais"
    }
    else if(etapaJogo === "SF" && categoria === 3){
        valorIngresso = 550
        etapaJogo = "Semifinais"
    }
    else if(etapaJogo === "SF" && categoria === 4){
        valorIngresso = 220
        etapaJogo = "Semifinais"
    }
    else if(etapaJogo === "DT" && categoria === 1){
        valorIngresso = 660
        etapaJogo = "Decisão do 3º lugar"
    }
    else if(etapaJogo === "DT" && categoria === 2){
        valorIngresso = 440
        etapaJogo = "Decisão do 3º lugar"
    }
    else if(etapaJogo === "DT" && categoria === 3){
        valorIngresso = 330
        etapaJogo = "Decisão do 3º lugar"
    }
    else if(etapaJogo === "DT" && categoria === 4){
        valorIngresso = 170
        etapaJogo = "Decisão do 3º lugar"
    }
    else if(etapaJogo === "FI" && categoria === 1){
        valorIngresso = 1980
        etapaJogo = "Final"
    }
    else if(etapaJogo === "FI" && categoria === 2){
        valorIngresso = 1320
        etapaJogo = "Final"
    }
    else if(etapaJogo === "FI" && categoria === 3){
        valorIngresso = 880
        etapaJogo = "Final"
    }
    else if(etapaJogo === "FI" && categoria === 4){
        valorIngresso = 330
        etapaJogo = "Final"
    }

    console.log("---Dados da compra---" + "\nNome do cliente: ", nomeCompleto, "\nTipo do jogo: Nacional", 
                "\nEtapa do jogo: ", etapaJogo, "\nCategoria: ", categoria, "\nQuantidade de ingressos: ", ingresso,
                "\n---Valores---", "\nValor do ingresso: ", "R$ ", valorIngresso, "\nValor total: ", "R$ ", valorIngresso*ingresso)
}

if(tipoJogo === "IN"){
    let valorIngresso

    if(etapaJogo === "SF" && categoria === 1){
        valorIngresso = 1320
        etapaJogo = "Semifinais"
    }
    else if(etapaJogo === "SF" && categoria === 2){
        valorIngresso = 880
        etapaJogo = "Semifinais"
    }
    else if(etapaJogo === "SF" && categoria === 3){
        valorIngresso = 550
        etapaJogo = "Semifinais"
    }
    else if(etapaJogo === "SF" && categoria === 4){
        valorIngresso = 220
        etapaJogo = "Semifinais"
    }
    else if(etapaJogo === "DT" && categoria === 1){
        valorIngresso = 660
        etapaJogo = "Decisão do 3º lugar"
    }
    else if(etapaJogo === "DT" && categoria === 2){
        valorIngresso = 440
        etapaJogo = "Decisão do 3º lugar"
    }
    else if(etapaJogo === "DT" && categoria === 3){
        valorIngresso = 330
        etapaJogo = "Decisão do 3º lugar"
    }
    else if(etapaJogo === "DT" && categoria === 4){
        valorIngresso = 170
        etapaJogo = "Decisão do 3º lugar"
    }
    else if(etapaJogo === "FI" && categoria === 1){
        valorIngresso = 1980
        etapaJogo = "Final"
    }
    else if(etapaJogo === "FI" && categoria === 2){
        valorIngresso = 1320
        etapaJogo = "Final"
    }
    else if(etapaJogo === "FI" && categoria === 3){
        valorIngresso = 880
        etapaJogo = "Final"
    }
    else if(etapaJogo === "FI" && categoria === 4){
        valorIngresso = 330
        etapaJogo = "Final"
    }

    console.log("---Dados da compra---" + "\nNome do cliente: ", nomeCompleto, "\nTipo do jogo: Nacional", 
                "\nEtapa do jogo: ", etapaJogo, "\nCategoria: ", categoria, "\nQuantidade de ingressos: ", ingresso,
                "\n---Valores---", "\nValor do ingresso: ", "U$ ", valorIngresso, "\nValor total: ", "U$ ", (valorIngresso*ingresso)*4.10)
}