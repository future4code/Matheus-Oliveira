// Exercícios de interpretação de código
// 1) 
//   a) 10 / 50
//   b) não vai aparecer nada no console, porém, o programa funcionará normalmente

// 2) 
//   a) 1. Darvas / Caio 
//      2. ["Darvas", "Caio", "João", "Paulinha", "Chijo"]
//
//      1. Amanda / Caio 
//      2. ["Amanda", "Caio"]

// 3) 
//   Nessa função, se digitado um número par, ele coloca no array esse número vezes ele mesmo.

// Exercícios de escrita de código
// 4)
        
    const sobreMim = (nome, idade, cidade, estudante) => {    
        if (estudante === true)
            estudante = "sou"
        else{
            estudante = "não sou"
        }
            
            console.log("Eu sou " + nome + " tenho " + idade + " anos, moro em " + cidade + " e " + estudante + " estudante")
    }

    sobreMim("Matheus", 25, "Brasília", false)
        

// 5)
// a.
    const somaDoisNumeros = (num1, num2) => {
        return num1 + num2
    }

    console.log(somaDoisNumeros(15, 25))


// b.
    const compararNumero = (num1, num2) => {
        if(num1 >= num2) {
        numero = true
    }else{
        numero = false
    }
    }

    compararNumero(35, 25)

    console.log(numero)

// c.

    const mensagem = (msg) => {
        for(i = 0; i < 10; i++){
            console.log(msg)
        }
    }

    mensagem("mensagem")


// 6)
// a.

    const arrayDeNumeros = (array) => {
        for(let i = 0; i < array.length; i++) {
            console.log(i)
        }
    }
    
    arrayDeNumeros([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
    
// b.

    const numeroPar = (numero) => {

        if(numero % 2 === 0) {
            numero = true
        }else{
            numero = false
        }

        return console.log(numero)
    }

    numeroPar(12)

// c.

    const arrayDeNumerosPares = (array) => {
        for(let i = 0; i < array.length; i++) {
            if(array[i] % 2 === 0) {
                console.log(array[i])
            }
        }
    }

    arrayDeNumerosPares([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])

// d.

    const arrayDeNumerosTrueFalse = (array) => {
        for(let i = 0; i < array.length; i++) {
            if(array[i] % 2 === 0) {
                console.log(array[i].push = true)
            }else{
                console.log(array[i].push = false)
            }
        }
    }
    arrayDeNumerosTrueFalse([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])