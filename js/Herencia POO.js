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

class ComprasPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad)
        this.cantidad = cantidad;
    }
}

//  Crear objetos
let tarea1 = new Tarea('Aprender JS', 'Alta');

console.log(tarea1);

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3)

console.log(compra1)