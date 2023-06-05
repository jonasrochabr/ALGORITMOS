/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let option;
let items = [];

while (option != 3) {
    let option = Number(prompt(`
    
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Remover um item da lista
    4. Sair do programa
    `));

    switch (option) {
        case 1:
            let newItem = prompt("Qual o nome do item?");
            items.push(newItem);
            break;
        case 2:
            if (items.length == 0) {
                alert("Não existem itens cadastrados!");
            } else {
                alert(items);
            }
            break;
        case 3:
            if (items.length == 0) {
                alert("Não existem itens cadastrados para remover!");
            } else {
                let itemIndex = Number(prompt("Digite o índice do item que deseja remover:"));
                if (itemIndex >= 0 && itemIndex < items.length) {
                    items.splice(itemIndex, 1);
                    alert("Item removido com sucesso!");
                } else {
                    alert("Índice inválido!");
                }
            }
            break;
        case 4:
            alert("See you");
            break;
        default:
            alert("Opção inválida! Tente 1, 2, 3 ou 4");
    }
}

