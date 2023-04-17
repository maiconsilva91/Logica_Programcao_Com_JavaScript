/* 
  Algoritmo:

    1 - Pedir para o usuário digitar um número
    2 - Converter em número inteiro
    3 - Pedir para o usuário digitar outro número
    4 - Converter em número inteiro

    5 - Mostra num alert o seguinte texto:
    "O resto da divisão de (n1) por (n2) é: (resultado)" 

     6 - Mostra num alert o seguinte texto:
    "O número (n1) elevado a n2 é: (resultado)" 

  Legenda:
    % - Módulo (resulta no resto da Divisão)
    ** - Exponenciação (Multiplica um elevado  a outro)
*/

var numero_1 = prompt("Digite um número: ");
numero_1 = parseInt(numero_1);

var numero_2 = prompt("Digite outro número: ");
numero_2 = parseInt(numero_2);

/* Minha linha de raciocínio no exercício

var modulo = numero_1 % numero_2

var exponencial = numero_1 ** numero_2

alert("O resto da divisão de " + numero_1 + " por " + numero_2 + " é: " + modulo);

alert("O número " + numero_1 + " elevado a " + numero_2 + " é: " + exponencial); 

*/

// Resolução do professor - Canal Serliv (YouTube)
// numero_1 e numero_2, estão entre parentes para ser resolvido equação.

alert("O resto da divisão de " + numero_1 + " por " + numero_2 + " é: " + (numero_1 % numero_2));

alert("O número " + numero_1 + " elevado a " + numero_2 + " é: " + (numero_1 ** numero_2)); 