// Exercícios de interpretação de código
// 1) 10

// 2) 
//  a) 19 21 23 25 27 30 
//  b) Sim, usaria o .length

// DESAFIO 1
    // 0
    // 00
    // 000
    // 0000

// Exercícios de código

// 3)

//  a)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let index = 0; index < array.length; index++) {
        console.log(array[index])
}

//  b)

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]/= 10)
// }

//  c)

// for (let index = 0; index < array.length; index++) { 
//     if(array[index] %2 === 0) {
//         let arrayPar = array[index]
//         console.log(arrayPar)
// }
// }

//  d)

for (let index = 0; index < array.length; index++) {
    console.log("O elemento do index", index, "é ", array[index])
}

//  e)

valorMaximo = 0
valorMinimo = 8000

    for (let index = 0; index < array.length; index++) {
        if(array[index] > valorMaximo)
        valorMaximo = array[index]
        if(array[index] < valorMinimo)
        valorMinimo = array[index]       
}

console.log("O maior numero é ", valorMaximo, "e o menor é", valorMinimo)
