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

var jogador_1 = parseInt(prompt("Jogador 1: Digite um número: "));

var jogador_2 = parseInt(prompt("Jogador 2: Digite um número: "));

// Solução do Professor - Canal Serliv (YouTube)

if(jogador_1 === jogador_2) {
    alert("Empate!");
} else {
    var aleatorio = parseInt(Math.random() * 2);

    alert("Número sorteado: " + aleatorio);
    // alert aqui ideia minha

    if(aleatorio == 0 && jogador_1 < jogador_2 || aleatorio == 1 && jogador_1 > jogador_2) {
        alert("Jogador 1, ganhou!");
    } else {
        alert("Jogador 2, ganhou!");
    }
}