// Exercícios de interpretação de código
// 1) 
//   false 
//   false
//   true 
//   boolean

// 2) 
//   a. undefined por não ter declarado nenhum valor
//   b. null por ter declarado null forçado
//   c. 11 tamanho do array
//   d. 3 posição 0 do array
//   e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] a posição 1 recebeu um novo valor
//   f. 9 posição 6 do array

// Exercícios de escrita de código
// 1)
    let idadeUsuario = Number(prompt("Sua idade? "))
    let idadeAmigo = Number(prompt("Idade do seu melhor amigo(a) ?"))
    console.log("Sua idade é maior que a do seu amigo? ", idadeUsuario > idadeAmigo)
    console.log("A diferença de idade é: ", idadeUsuario - idadeAmigo)

// 2)
    const numeroPar = Number(prompt("Insira um número par: "))
    console.log("Resto: ", numeroPar % 2)
    // se o numero digitado for par, o resto sempre será 0.
    // se o numero digitado for impar, o resto sempre será 1.

// 3)
    let array = []
    let listaDeTarefas = array
    array.push (prompt("Tarefas para realizar no dia, primeira: "))
    array.push (prompt("Tarefas para realizar no dia, segunda: "))
    array.push (prompt("Tarefas para realizar no dia, terceira: "))
    console.log(listaDeTarefas)
    const i = Number(prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2"))
    listaDeTarefas.splice(i, 1)
    console.log(listaDeTarefas)

// 4)
    let nomeDoUsuario = (prompt("Qual seu nome? "))
    let emailDoUsuario = (prompt("Digite seu email: "))
    console.log("O e-mail: " + emailDoUsuario + " " + "foi cadastrado com sucesso. Seja bem-vinda(o)," + " " + nomeDoUsuario)


// DESAFIOS
// 1)
    let kelvin
    let fahrenheit
    console.log("O valor de 77°F em K é: ", kelvin = (77 - 32)*5/9 + 273.15, "K")
    console.log("O valor de 80°C em °F é: ", fahrenheit = (80)*9/5 + 32, "°F")
    let celsius = Number(prompt("Digite o valor em graus celsius que será convertido em °F e K: "))
    console.log("O valor de",celsius + "°C", "em °F é: ", fahrenheit = (celsius)*9/5 + 32, "°F" + ", e em K é:", celsius + 273.15, "K")


// 2)
    let kWh = 280
    let desconto = (kWh * 0.05) * 0.15
    console.log("Quantidade de quilowatt-hora consumidas: ", kWh, "valor a ser pago: " + "R$", kWh * 0.05)
    console.log("Com 15% de desconto, a mesma residência deve pagar: " + "R$", (kWh*0.05) - desconto)


// 3)
    let libra = prompt("Digite um valor em libra para ser convertido em Kg: ")
    console.log(libra + "lb " + "equivalem a", parseFloat(libra/2.205).toFixed(2)  + "Kg")

    let oz = prompt("Digite um valor em onça para ser convertido em Kg: ")
    console.log(oz + "oz " + "equivalem a", parseFloat(oz/35.274).toFixed(2)  + "Kg")

    let milha = prompt("Digite um valor em milhas para ser convertido em metros: ")
    console.log(milha + "mi " + "equivalem a", (milha*1609)  + "m")

    let pes = prompt("Digite um valor em pés para ser convertido em metros: ")
    console.log(pes + "ft " + "equivalem a", parseFloat(pes/3.281).toFixed(2)  + "m")

    let galao = prompt("Digite um valor em galão para ser convertido em litros: ")
    console.log(galao + "gal " + "equivalem a",  parseFloat(galao*3.806).toFixed(2) + "l")

    let xicara = prompt("Digite um valor em xícaras para ser convertido em litros: ")
    console.log(xicara + "xic " + "equivalem a", ((xicara * 6) / (25)) + "l")