// POO

class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return(`${this.nombre} tiene una prioridad ${this.prioridad}`)
    }
}

//  Crear objetos
let tarea1 = new Tarea('Aprender JS', 'Alta');

console.log(tarea1);