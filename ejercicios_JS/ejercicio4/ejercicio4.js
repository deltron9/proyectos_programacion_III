/*
Realizar una función que reciba un número y que muestre (por consola) un mensaje como 
el siguiente: "El número 5 es impar", siendo 5 el número recibido como parámetro.
*/
function validarImpar(numero){
if(numero % 2 === 1){
    return `${numero} es impar`;
}
else{
    return `${numero} es par`;
}
}

console.log(validarImpar(13))