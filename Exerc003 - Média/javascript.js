/*
  Algoritmo:

  1 - Pedir para o usuário digitar dois número
  2 - Calcular a média dos dois números
  3 - Retornar resultado na tela

*/

var numUm = prompt("Digite o primeiro valor: ");
numUm = parseFloat(numUm);

var numDois = prompt("Digite o segundo valor: ");
numDois = parseFloat(numDois);

var media = (numUm + numDois) / 2

alert("A média dos dois números é: " + media);