/*

JAVASCRIPT / TYPESCRIPT 


*/

//console.log("Code Runner rodando com sucesso")

//Calcular a porcentagem de um número
/*
function porcentagem(numero, por)
{
    return (numero/100) * por;
}
console.log(porcentagem(1000, 60));

*/

//Criar uma função que execute a soma dos valores
/*
function soma (valor1, valor2){
    return valor1 + valor2;
}
console.log(soma(20.5, 30.5));
*/
// Criar uma função que exiba a soma, subtração, 
//multiplicação e divisão entre dois números .
/*
function operacoes (valor1, valor2) {
    console.log(`A soma entre ${valor1} e ${valor2} é ${valor1 +
    valor2}`);
    console.log(`A subtração entre ${valor1} e ${valor2} é ${valor1 -
    valor2}`);


}
operacoes(50, 100);
*/

//Criar uma função que verifica se um número inteiro é divisivel por três e retorne como true ou false

//(true = verdadeiro )
//(false = falso)

/*
function divisivel(numeroint) {
    //condicionais em 35

    if (numeroint % 3 == 0){
        return true
    } else {
        return false
    }
    
}
console.log(divisivel(9));

*/

//Criar um mecanismo que exiba se um usuário está logado, ou não.

/*
autenticado = true;

switch (autenticado) {
    case true:
        console.log("O usuário está logado")
        break;
    case false:
        console.log("O usuário não está logado");
}
*/


//Fazzer uma conversão de temperatura de Celsius pra Fahrenheit
/*
function cpf(n) {
    return n * 1.8 +32;
}

console.log(cpf(20))

// conversão de fhareinheit para celsius
*/
function fpc(n) {
    return (n - 32) / 1.8
}
console.log(fpc(68));