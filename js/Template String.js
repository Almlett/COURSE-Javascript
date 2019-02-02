//Template String

const nombre = "Alan";
const trabajo = "Programador";

//Concatenar javascript
console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);

//Nuevo concatenar
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);


//Concatenar varias lineas
const ContenedorApp = document.querySelector('#app');
let html = ` <ul>
                <li> Nombre: ${nombre} </li>
                <li> Trabajo: ${trabajo} </li>
            </ul>`;

ContenedorApp.innerHTML = html;