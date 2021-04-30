//Exercício 1

function inverteArray(array) {
   
   return array.reverse()

}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {

   let arr1 = []

   for (let i = 0; i < array.length; i++) {

      if(array[i]%2 === 0) {
         arr1.push(array[i]**2)
      }
   }

   return arr1

}

//Exercício 3

function retornaNumerosPares (array) {

   let arr1 = []

   for (numbers of array) {

      if(numbers%2===0) {
         arr1.push(numbers)
      }
   }

   return arr1
}


//Exercício 4

function retornaMaiorNumero(array) {
   
   return Math.max.apply(Math, array)
  
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   
   return array.length

}

//Exercício 6

function retornaExpressoesBooleanas() {

   const respostas = [false, false, true, true, true]
   return respostas

}
//Exercício 7

function retornaNNumerosPares(n) {
   arr1 = []
   let pares = 0

  while (arr1.length < n) {

   arr1.push(pares)
   pares += 2

  }

  return arr1

}

// Exercício 8

function checaTriangulo(a, b, c) {
   if(a !== b && b !== c) {
      return'Escaleno'
     } else if(a === b && b === c) {
       return'Equilátero'
      } else {
        return'Isósceles'
      }
    }


// Exercício 9

function comparaDoisNumeros(num1, num2) {
   const saida = {
      maiorNumero: Number,
      maiorDivisivelporMenor: Boolean,
      diferenca: Number
   }
   let menorNumero = Number
   if(num1 > num2) {
      saida.maiorNumero = num1
      menorNumero = num2
   }else{
      saida.maiorNumero = num2
      menorNumero = num1
   }
   if(saida.maiorNumero%menorNumero === 0) {
      saida.maiorDivisivelporMenor = true
   }else{
      saida.maiorDivisivelporMenor = false
   }
   saida.diferenca = saida.maiorNumero - menorNumero
   return saida

   // if (num1 > num2) {
   //    saida.maiorNumero = num1
   //    if(num1%num2 === 0) {
   //       saida.maiorDivisivelporMenor = true
   //    }else{
   //       saida.maiorDivisivelporMenor = false
   //    }
   //    saida.diferenca = num1-num2
   // }else{
   //    saida.maiorNumero = num2
   //    if(num2%num1 === 0) {
   //       saida.maiorDivisivelporMenor = true
   //    }else{
   //       saida.maiorDivisivelporMenor = false
   //    }
   //    saida.diferenca = num2-num1
   // }
   // return saida
   
}

// Exercício 10

function segundoMaiorEMenor(array) {
  
      let menor = Infinity
      let maior = 0
      let segundoMenor = Infinity
      let segundoMaior = 0
      let indiceMenor = 0
      let indiceMaior = 0
      let novoArray = []
     
      for(let i of array) {
       if(i < menor) {
          menor = i
          indiceMenor = array.indexOf(menor)
       } 
       if(i > maior) {
          maior = i
          indiceMaior = array.indexOf(maior)
          }
       }
        array.splice(indiceMaior, 1)
        array.splice(indiceMenor, 1)
     
       for(let i of array) {
        if(i < segundoMenor) {
          segundoMenor = i
       }
       if(i > segundoMaior) {
          segundoMaior = i
       }
      }
       novoArray.push(segundoMaior)
       novoArray.push(segundoMenor)
     
       return novoArray
     }


//Exercício 11

function ordenaArray(array) {

   const len = array.length;
   for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
     if(array[j] > array[j + 1]) {
      let tmp = array[j];
       array[j] = array[j + 1];
       array[j + 1] = tmp;
      }
     }
    }
  return array
}

// Exercício 12

function filmeFavorito() {
   const filmeFavorito = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: [ "Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return filmeFavorito
}

// Exercício 13

function imprimeChamada() {
   const filmeFavorito = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: [ "Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`

}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2*(lado1 + lado2),
      area: lado1 * lado2
   }

   return retangulo

}

// Exercício 15

function anonimizaPessoa(pessoa) {
   
   return {...pessoa,nome: "ANÔNIMO"}
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
     })
     return novoArray
    }


// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
      })
     return novoArray
     }


// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const novoArray = array.map((num) => {
      return num * 2
      })
     return novoArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const novoArray = array.map((num) => {
      return(num * 2).toString()
      })
     return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   const novoArray = array.map((num) => {
      if (num % 2 === 0) {
        return `${num} é par`
      } else {
        return `${num} é ímpar`
      }
    })
  
    return novoArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   
  let pessoasAutorizadas = [];
  for(const pessoa of pessoas) {
    if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasAutorizadas.push(pessoa)
    }
  }
  return pessoasAutorizadas;
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
  let pessoasNaoAutorizadas = [];
  for(const pessoa of pessoas) {
    if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas;
}
//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((conta) => {
      let totalDeCompras = 0
      conta.compras.forEach((valor) => {
        totalDeCompras += valor
      })
      conta.saldoTotal -= totalDeCompras
    })
    return contas
  }

