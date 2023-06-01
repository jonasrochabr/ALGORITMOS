/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

let myname = prompt("Qual o seu nome?")

alert("Vamos somar dois números");

    //prompt retorna string

let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o segundo número");
let result = Number(numberOne) + Number(numberTwo)

alert(`Muito bem ${myname}, O Resultado da soma é:` + result);
