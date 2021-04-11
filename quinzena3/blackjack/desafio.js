let i
let valor
let pontosUsuario = []
let pontosComputador = []
let cartasUsuario = []
let cartasComputador = []


console.log("Bem vindo ao jogo Blackjack!")

while(confirm("Deseja começar o jogo? ") === true) {
    
    for(i = 0; i < 2; i++) {
        const carta = comprarCarta();
        pontosUsuario.push(carta.valor)
        cartasUsuario.push(carta.texto)
}

    for (i = 0; i < 2; i++) {
        const carta = comprarCarta();
        pontosComputador.push(carta.valor)
        cartasComputador.push(carta.texto)
}

if (cartasUsuario[0] === "A" && cartasUsuario[1] === "A") {

    console.log("As duas primeiras cartas compradas foram A, então a compra de cartas será reiniciada!")

        for(i = 0; i < 2; i++) {
            const carta = comprarCarta();
            pontosUsuario.push(carta.valor)
            cartasUsuario.push(carta.texto)
}
}

 let somaUsuario = pontosUsuario[0]+pontosUsuario[1]
 let somaComputador = pontosComputador[0]+pontosComputador[1]

 console.log("Suas cartas: ", cartasUsuario[0], cartasUsuario [1], "-", somaUsuario)
 console.log("Computador - carta revelada: ", cartasComputador[0])


 while(confirm("seu total de pontos é: " + somaUsuario + " deseja comprar mais uma carta? ")) {

}
}