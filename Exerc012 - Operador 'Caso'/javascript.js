/* 
    Algoritmo:
    
        1 - Digite o um número de 1 a 12.
        2 - Retornar o mês do ano conforme o número escolhido.
        3 - Usar operador SWITCH() {CASE : }
*/

var month = parseInt(prompt("Digite um numero de 1 a 12 para saber os meses do ano em Inglês"));

switch(month) {
    case 1:
        alert('January')
        break;
    case 2:
        alert('February')
        break;
    case 3:
        alert('March')
        break;
    case 4:
        alert('April')
        break;
    case 5:
        alert('May')
        break;
    case 6:
        alert('June')
        break;
    case 7:
        alert('July')
        break;
    case 8:
        alert('August')
        break;
    case 9:
        alert('September')
        break;
    case 10:
        alert('October')
        break;
    case 11:
        alert('November')
        break;
    case 12:
        alert('December')
        break;
    default:
        alert('Escolha um número de 1 a 12')
}