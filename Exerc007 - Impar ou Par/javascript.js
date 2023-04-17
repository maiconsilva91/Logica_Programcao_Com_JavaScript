/* 
    Algoritmo:

        1 - Pedir para digitar um número
        2 - Usar Módulo (%)
        3 - Se sobrar 1 é Impar
        4 - Senão é par

*/

var imparPar = parseFloat(prompt("Digite um número para saber se é Impar ou Par:"));

var imparPar = imparPar % 2;

if(imparPar == 1) {
    alert("Número Impar");
} else {
    alert("Número Par");
}
