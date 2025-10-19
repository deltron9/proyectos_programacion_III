/*
Crear una función truncate(cadena, longitud) que verifique la longitud de cadena y, 
si excede longitud, reemplaza el final de la cadena con el carácter de puntos suspensivos "...", 
para hacer su longitud igual al parámetro longitud. 
El resultado de la función debe ser la cadena truncada (si es necesario).
*/
function truncate(cadena, longitud) {
    if (cadena.length <= longitud) {
        return cadena;
    }

    const longPuntos = 3;
    const puntoDeCorte = longitud - longPuntos;

    const cadenaTruncada = cadena.slice(0, puntoDeCorte);

    return cadenaTruncada + "...";
}

console.log(truncate("nahassapemapetilon", 12));
