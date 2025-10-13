let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

meses.forEach((elemento, indice) => {
    const indiceDeMes = indice + 1
    const elementos = elemento + " - numero de mes: " + indiceDeMes;
    console.log(elementos);
});