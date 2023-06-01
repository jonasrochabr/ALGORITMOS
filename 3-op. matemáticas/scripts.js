
/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let firstNumber = prompt("Digite o 1º número")
let secondNumber = prompt("Digite o 2º número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let multi = firstNumber * secondNumber
let div = firstNumber / secondNumber
let restDiv = firstNumber % secondNumber


alert("Soma " + sum)
alert("Subtração " + sub)
alert("Multiplicação " + multi)
alert("Divisão " + div)
alert("Resto " + restDiv)