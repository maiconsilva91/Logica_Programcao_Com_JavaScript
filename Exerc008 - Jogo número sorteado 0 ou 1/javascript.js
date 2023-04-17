//  Legenda:
//      Math.random() * 2 - Sorteia um número aleatório entre 0 e 1

/*
    Algoritmo:
        1 - Jogador número 1 digita um número
        2 - Jogador número 2 digita um número
        3 - Se forem iguais, mostrar mensagem "Empate!"
        4 - Sortear um número entre 0 e 1
        
        5 - Se o número sorteado for 0, ganha quem escolher o número Menor
        6 - Se o número sorteado for 2, ganha quem escolher o número Maior
*/

var jogador_1 = parseInt(prompt("Jogador 1: Digite um numero: "));

var jogador_2 = parseInt(prompt("Jogador 2: Digite um numero: "));

/* Minha linha de raciocínio no exercício:
Cheguei a solução sem olhar nada

var aleatorio = parseInt(Math.random() * 2);

 alert(aleatorio);


if (jogador_1 === jogador_2) {
    alert("Empate!");
} else {

    if (aleatorio === 1) {
        if ( jogador_1 > jogador_2){
            alert("Jogador 1");
        } else {
        alert("jogador 2");
        }
    }

    if(aleatorio === 0) {
        if (jogador_1 > jogador_2){
            alert("jg - 2");
        } else {
            alert("jg - 1");
        }
    }
}

*/

// Solução do Professor - Canal Serliv (YouTube)


if(jogador_1 === jogador_2) {
    alert("Empate!");
} else {
    var aleatorio = parseInt(Math.random() * 2);

    alert("Número sorteado: " + aleatorio);
    // alert aqui ideia minha

    if(aleatorio === 0) {
        if(jogador_1 < jogador_2) {
            alert("Jogador 1: Ganhou!");
        } else {
            alert("Jogador 2: Ganhou!");
        }
    } else {
        if(aleatorio === 1) {
            if(jogador_1 > jogador_2) {
                alert("Jogador 2: Ganhou!");
            } else {
                alert("Jogador 1: Ganhou!");
                
                /* Ex: (Com mais dados na tela)

                alert("Jogador 2: Ganhou! - " + "Aleatório: " + aleatorio + " - Jogador 1: " + jogador_1 + " - Jogador 2: " + jogador_2) 
                */
            }
        }
    }
}