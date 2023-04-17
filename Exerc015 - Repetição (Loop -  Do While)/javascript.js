//      Loop: Do While

//Do While executa o código pelo menos uma vezes, antes de sair do loop
//No caso ele executa var vezes = 11 e sai do loop
var numero = parseInt(prompt("Digite um numero e veja a tabuada de vezes: "));

var vezes = 11;
//repita até que vezes seja <=10

do {
    document.write(numero + ' x ' + vezes + ' = ' + vezes * numero + "<br>");

    vezes = vezes + 1;

} while( vezes <= 10)

document.write('Fim do Loop!');