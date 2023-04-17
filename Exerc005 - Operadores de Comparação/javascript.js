/*
    Legenda:

    == Igualdade (valor)
    != Diferente (Valor)
    === Igualdade (valor e tipo)
    !== Diferente(valor e tipo)
    > Maior
    >= Maior ou Igual
    < Menor
    <= Menor ou Igual

*/

/* 
var numb_1 = prompt("Digite um número: ");          
numb_1 = parseInt(numb_1);

var numb_2 = prompt("Digite outro número: ");
numb_2 = parseInt(numb_2); 
*/

//Outra forma de pedir ao usuário um número e converter para Real

//  Algoritmo
//      1 - Pedir para o usuário digitar um número
//          1.1 - Transformar em Real
//      2 - Pedir para o usuário digitar outro número
//          2.1 - Transformar em Real
//      3 - Equacionar a média dos dois números
//      4 - Comparar se a média e maior que 5

var numb_1 = parseFloat(prompt("Digite um número: "));

var numb_2 = parseFloat(prompt("Digite outro número: "));

var media = (numb_1 + numb_2) / 2 ;

alert(media > 5);