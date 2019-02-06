// Funciones en un objeto

const persona = {
    nombre:     'Alan',
    trabajo:    'Programador',
    edad:       24,
    activo:     true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}

persona.mostrarInformacion();