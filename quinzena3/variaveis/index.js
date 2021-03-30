// Exercícios de interpretação de código
// 1) 10, 5
// 2) 10, 10, 10

// Exercícios de escrita de código
// 1)
let nome = ""
let idade = 

console.log(typeof nome)
console.log(typeof idade)

// o undefined foi impresso porque não foi atribuido nenhum valor a variavel idade, a variavel está vazia.

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// o tipo da varável idade recebeu o tipo String.

console.log("Olá", nome, "você tem", idade, "anos")


// 2)
let resposta1 = prompt("1. Qual sua série favorita?")
let resposta2 = prompt("2. Qual sua música favorita?")
let resposta3 = prompt("3. Qual sua comida favorita?")
let resposta4 = prompt("4. Qual seu jogo favorito?")
let resposta5 = prompt("5. Qual seu esporte favorito?")

console.log("1. Qual sua série favorita?", "\n" ,"Resposta: ", resposta1)
console.log("2. Qual sua música favorita?", "\n" ,"Resposta: ", resposta2)
console.log("3. Qual sua comida favorita?", "\n" ,"Resposta: ", resposta3)
console.log("4. Qual seu jogo favorito?", "\n" ,"Resposta: ", resposta4)
console.log("5. Qual seu esporte favorito?", "\n" ,"Resposta: ", resposta5)


// 3)
let comidasPreferidas = ["Macarrão", "Brigadeiro", "Coxinha", "Churrasco", "Sushi"]

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas: ",comidasPreferidas[0],"\n",comidasPreferidas[1],"\n",comidasPreferidas[2],"\n",comidasPreferidas[3],"\n",comidasPreferidas[4])

comidasPreferidas[1] = prompt("Qual sua comida preferida?")

console.log("Essas são as minhas comidas preferidas: ",comidasPreferidas[0],"\n",comidasPreferidas[1],"\n",comidasPreferidas[2],"\n",comidasPreferidas[3],"\n",comidasPreferidas[4])


// 4)
let simOuNao = ["Você está cansado?", "Você está alegre?", "Você está com frio?"]
let respostas = [false, true, false]

console.log(simOuNao[0], respostas[0],"\n",simOuNao[1], respostas[1],"\n",simOuNao[2], respostas[2])