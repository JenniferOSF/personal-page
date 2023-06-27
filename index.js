// Declare uma lista com 12 posições e em seguida declare também dois valores X e Y quaisquer correspondentes a duas posições na lista. Ao final seu programa deverá escrever a soma dos valores encontrados nas respectivas posições X e Y.

const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const x = int(input("digite a posição 2"));
const y= int(input("digite a posição 4"));

resultado = lista[x] + lista[y];

console.log("O resultado é", resultado);