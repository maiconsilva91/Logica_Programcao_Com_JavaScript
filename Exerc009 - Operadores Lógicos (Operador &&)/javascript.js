/* 
    Operadores Lógicos

    ! - Não(not)    1º
    && - E(and)     2º
    || - Ou(or)     3º
    
*/

/*
    Algoritmo:

        1 - Digitar nota 1
            1.1 - Transformar em número inteiro
        2 - Digitar nota 2
            2.1 - Transformar em número inteiro
        3 - Calcular a média das duas nota
            3.1 - Nota de corte maior que 5
        4 - Nota 1 e Nota 2 tem que ser maior que 0
        5 - Se as 3 condições forem verdadeira retornar na tela a mensagem "Aprovado, parabéns!", senão mostra a mensagem "Reprovado!".
*/

//Variáveis
var nota_1 = parseInt(prompt("Digite a primeira nota: "));

var nota_2 = parseInt(prompt("Digite a segunda nota"))

var media = (nota_1 + nota_2) /2

//Estrutura de condição com Operadores Lógicos
if (media > 5 && nota_1 > 0 && nota_2 > 0) {
    alert("Aprovado, parabéns!")
} else {
    alert("Reprovado!")
} 