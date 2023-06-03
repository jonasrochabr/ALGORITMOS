/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

//quando precisar capturar varios itens. "Estrutura de repetição"

let itens = []

for(let item = 0; item <= 2; item++) {
   let itemName = prompt("DIgite o item " + (item + 1))

   itens[item] = itemName
}

alert(itens)
alert(itens[2])