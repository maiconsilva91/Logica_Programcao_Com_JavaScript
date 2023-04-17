/* ´
    Operadores de Comparação
    
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
    Algoritmo:

        1 - Pedir para o usuário digitar dois números
        2 - Transformar em Real
        3 - Equacionar a média dos dois números
            3.1 - Nota de corte 5
        4 - Mostra uma mensagem de "Aprovado" se a média for maior que 5, se menor que 5 mostra a mensagem "Reprovado".

*/

var nota_1 = parseFloat(prompt("Digite a primeira nota:"));

var nota_2 = parseFloat(prompt("Digite a segunda nota:"));

var media = (nota_1 + nota_2) / 2;

//  Controle de decisão
//      Se nota > 5
//          Mostra mensagem: "Aprovado, parabéns!"
//      Senão
//          Mostra mensagem: "Reprovado"

// Estrutura condicional
if(media >= 5) {
    alert("Aprovado, parabéns! Sua média é: " + media);
} else {
    alert("Reprovado! Sua média é: " + media);
}
