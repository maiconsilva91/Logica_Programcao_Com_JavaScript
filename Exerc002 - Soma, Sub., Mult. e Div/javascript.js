/*
  1 - Pedir para o usuário digitar um número
  1.1 - Converter em número inteiro
  2 - Pedir para o usuário digitar outro número
  2.1 - Converter em número inteiro

  3.1 - Subtração
  3.2 - Multiplicação
  3.3 - Divisão
  3.4 - Soma

  4 - Mostra os resultados na tela
*/

/* Minha versão do exercício : OK, funcionando

var numbOne = prompt("Digite o primeiro valor:");
var numbTwo = prompt("Digite o segundo valor:");
var sub = parseInt(numbOne) - parseInt(numbTwo);
var multi = parseInt(numbOne) * parseInt(numbTwo);
var div = parseInt(numbOne) / parseInt(numbTwo);
var soma = parseInt(numbOne) + parseInt(numbTwo);

alert("O valor da subtração: " + sub);
alert("O valor da multiplicação: " + multi);
alert("O valor da divisão: " + div);
alert("O valor da soma: " + soma); 
*/

//Versão do professor
var numbOne = prompt("Digite o primeiro valor:");
numbOne = parseInt(numbOne);

var numbTwo = prompt("Digite o segundo valor:");
numbTwo = parseInt(numbTwo);

alert("O valor da subtração: " + (numbOne - numbTwo));
alert("O valor da multiplicação: " + (numbOne * numbTwo));
alert("O valor da divisão: " + (numbOne / numbTwo));
alert("O valor da soma: " + (numbOne + numbTwo)); 