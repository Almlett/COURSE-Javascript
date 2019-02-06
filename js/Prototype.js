// Prototype
//Permite ligar un metodo a una funcion
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function (){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}


const tarea1 = new Tarea('Aprender JS', 'Urgente');
console.log(tarea1.mostrarInformacionTarea());