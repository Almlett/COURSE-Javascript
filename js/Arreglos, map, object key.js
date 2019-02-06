// Arreglos

const carrito = ['Producto1', 'Producto2', 'Producto3'];

const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto =>{
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html;

//  Maps
//  Agrega nuevos arreglos en un arreglo

carrito_compras = ['Producto1', 'Producto2', 'Producto3'];
carrito_compras.map(producto =>{
    return 'El producto es: ' +  producto;
})


//Object.key
const persona = {
    nombre:     'Alan',
    profesion:  'Programador',
    edad:       24
}

console.log(Object.keys(persona));

