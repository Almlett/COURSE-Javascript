// Destructuring de objectos

const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5',
    },
    frameworks: ['React','VueJS','AngularJS']
}

// Destructuring es extraer valores de un objeto

console.log(aprendiendoJS);

//Version antigua
//let version = aprendiendoJS.version.nueva;
//console.log(version);

//Version nueva
let { nueva } = aprendiendoJS.version;
console.log(nueva);
 