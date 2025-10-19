/*
Guardar su nombre y apellido en dos variables distintas. Dichas variables serán pasadas como parámetro 
de la función mostrarNombreApellido, que:
Mostrará el apellido en mayúscula.
Mostrará el nombre solo con la primera letra en mayúsculas y el resto en minúsculas.
El apellido y el nombre se mostrarán separados por una coma (,). 
*/
nombre = "apu"
apellido = "nahasapemapetilon"

function mostrarNombreApellido(nombre, apellido){

const nombreCap = nombre.charAt(0).toUpperCase();
const nombreMin = nombre.slice(1).toLowerCase();
const nombreCom = nombreCap + nombreMin
const apellidoMa = apellido.toUpperCase();
console.log(`${nombreCom}, ${apellidoMa}`);

}
mostrarNombreApellido("crIstiAn", "CoLLAnTe")
console.log("--------------------------------------------------------------------");
mostrarNombreApellido(nombre, apellido)
