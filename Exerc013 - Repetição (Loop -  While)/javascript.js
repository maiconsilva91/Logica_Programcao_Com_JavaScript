var number = parseFloat(prompt('Digite um numero para saber a tabuada de vezes(x) 1 a 10: '));

/* Exemplo de repetição não pratico 
document.write(number + ' x 1 = ' + (number * 1) + '<br>');
document.write(number + ' x 2 = ' + (number * 2) + '<br>');
document.write(number + ' x 3 = ' + (number * 3) + '<br>');
document.write(number + ' x 4 = ' + (number * 4) + '<br>');
document.write(number + ' x 5 = ' + (number * 5) + '<br>');
document.write(number + ' x 6 = ' + (number * 6) + '<br>');
document.write(number + ' x 7 = ' + (number * 7) + '<br>');
document.write(number + ' x 8 = ' + (number * 8) + '<br>');
document.write(number + ' x 9 = ' + (number * 9) + '<br>');
document.write(number + ' x 10 = ' + (number * 10) + '<br>'); 
*/

var indice = 1; //Atribuiu 1 a variável índice

//while(condição), executa o trecho de código enquanto condição for verdadeira.
// condição é executar o código até que índice seja menor ou igual a 10

while(indice <= 10) {
    document.write(number + ' x '+ indice +' = ' + (number * indice) + '<br>');

    indice = indice + 1;//soma mais 1 a variável índice, para fazer mudar variável índice 
}
//não usar document.write, só nos exemplos 
document.write('Terminou a repetição(Loop).'); 