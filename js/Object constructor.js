// Objetos

// Object constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender JS', 'Urgente');
console.log(tarea1);