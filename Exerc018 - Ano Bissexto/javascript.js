// Ano Bissexto

var ano = 1004;

while(ano <= 2023) {
    if(!(ano % 100 == 0) || (ano % 400 == 00)) {
        document.write(ano + '<br>');
    } else {
        document.write(ano + ' - Não é bissexto <br>')
    }
    
    if(ano % 4 == 0) {
        document.write('<br>')
    }

    //ano = ano + 4;
    ano += 1;
}