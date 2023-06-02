/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Qua-lo nome do aluno?")
let nota1 = prompt("Qua-lá nota da 1ª prova?")
let nota2 = prompt("Qua-lá nota da 2ª prova?")
let nota3 = prompt("Qua-lá nota da 3ª prova?")
let nota4 = prompt("Qua-lá nota da 4ª prova?")

let average = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) { //for true
    alert(`Parabéns, ${student}!!! sua média foi ${average}! você está aprovado!!!`)
} else if (average < 3) {
    alert("Reprovado!!!")
} else {
    alert(`${student} você não conseguiu a média necessária! Estude para recuperação! Sua média foi de: ${average}`)
}