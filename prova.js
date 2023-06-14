// 1) Crie uma função que receba um número como parâmetro 
// e determine se ele é primo ou não. Um número primo é aquele 
// que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.



// Função para verificar se um número é primo


function verificarPrimo(num) {
    if (num <= 1) {
        return num + " não é um Primo"

    }
    for (var x = 2; x <= Math.sqrt(num); x++) {
        if (num % x === 0) {
            return num + " não é um Primo"
        }
    }

    return num + " é um Primo"


}

//Console com um exemplo de números primos verificados pela função


console.log(verificarPrimo(2)) // Primo 
console.log(verificarPrimo(9)) // Não Primo 





// Listar números primos


function listarPrimos() {
    var numerosPrimos = []

    for (var x = 1; x <= 1000; x++) {
        if (verificarPrimo(x)) {
            numerosPrimos.push(x)
        }
    }

    return numerosPrimos
}

var primos = listarPrimos()

// Console para a listagem dos números

console.log(primos)



// 2) Crie uma função que receba uma senha como parâmetro e verifique
// se ela atende aos seguintes critérios: ter pelo menos 8 caracteres,
// conter pelo menos uma letra maiúscula, uma letra minúscula e um número.
// Sua função deve receber uma senha e dizer para o usuário se ela é valida.

// Função para verificar a senha

function verificarSenha(senha) {
    if (senha.length < 8) {
        return "A senha deve ter pelo menos 8 caracteres."
    }

    if (!/[A-Z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra maiúscula."
    }

    if (!/[a-z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra minúscula."
    }

    if (!/[0-9]/.test(senha)) {
        return "A senha deve conter pelo menos um número."
    }

    return "A senha é válida."
}

// Exemplos de senha usando a função para verificar

console.log(verificarSenha("senha"))     // A senha deve ter pelo menos 8 caracteres.
console.log(verificarSenha("senha123"))  // A senha deve conter pelo menos uma letra maiúscula.
console.log(verificarSenha("SENHA"))     // A senha deve conter pelo menos uma letra minúscula.
console.log(verificarSenha("Senha123"))  // A senha é válida.




// 3) Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.
// O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele.
// Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

// Função para calcular o fatorial de um número

function calcularFatorial(num) {
    if (num === 0 || num === 1) {
        return 1
    }

    var fatorial = 1;

    for (var x = 2; x <= num; x++) {
        fatorial *= x;
    }

    return "Fatorial de " + num + " é " + fatorial
}

// Console com um exemplo de fatorial calculado

console.log(calcularFatorial(5)) // 120


// Função para calcular os fatoriais de 1 a 10

for (var num = 1; num <= 10; num++) {
    var resultado = calcularFatorial(num);
    console.log("Fatorial de " + num + " é: " + resultado)
}



// 4) Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. 
// Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo,
// 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

// Função para o calculo da raiz perfeita


function verificarRaiz(num) {
    var raiz = Math.sqrt(num)

    if (raiz === Math.floor(raiz)) {
        return num + " é uma raiz perfeita"
    }
    else {
        return num + " não é uma raiz perfeita"
    }
}

// Consoles com exemplos de raizes usando a função

console.log(verificarRaiz(25)) // Perfeita
console.log(verificarRaiz(24)) // Não perfeita
