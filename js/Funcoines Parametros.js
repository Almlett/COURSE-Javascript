// Funciones con parametros

//Funtion declaration
const actividad = function(nombre = 'Michel', actividad = 'existir') {
    console.log(`La persona ${nombre}, esta realizando la actividad  ${actividad}`)
}

actividad("Alan", "aprender JavaScript");
actividad();