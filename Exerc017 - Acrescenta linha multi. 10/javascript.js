//      Loop: For
// For - coloca tudo em uma linha (repetição, condição, atribuição)

var numero = parseInt(prompt("Digite um numero e veja a tabuada de vezes: "));

//É atribuído 1 a variável i 
//Condição enquanto i for menor os igual a 10 execute o bloco de código 
//i++ é i = i +1

for(var i = 1; i <=100; i++) {
    document.write(numero + ' x ' + i + ' = ' + (numero * i) + ' <br> ');
    
    if(i % 10 == 0) {
        document.write('<hr>')
    }//acrescenta uma linha a cada múltiplo de 10
}

document.write('Fim do Loop!');