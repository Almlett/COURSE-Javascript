// Object literal enhancement

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// forma anterior
// const metallica ={
//    banda: banda,
//    genero: genero,
//    canciones: canciones
// }

const metallica = {banda, genero, canciones};
console.log(metallica);