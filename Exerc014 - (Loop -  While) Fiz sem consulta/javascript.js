//      Loop While

var numero = parseInt(prompt("Digite um numero e veja a tabuada de vezes: "));
var numero_multi = parseInt(prompt("Até que número quer multiplicar, escolho de 1 a 1000"));//acrescentei esse linha de código para o usuário decidir por qual número ele quer multiplicar

var vezes = 1;

while( vezes <= numero_multi) {
    document.write(numero + ' x ' + vezes + ' = ' + vezes * numero + "<br>");

    //vezes = vezes + 1;
      vezes++;    
}
document.write('Fim do Loop!');  

//fiz esse loop while depois que terminou o vídeo sem olhar e nem consultar nada