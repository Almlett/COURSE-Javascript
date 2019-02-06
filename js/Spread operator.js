//  Spread operator
let lenguajes = ['JS','PHP','Python']
let frameworks = ['ReactJS','Laravel','Django']

//Unir arreglos en uno solo
//Forma chafa
//let combinacion = lenguajes.concat(frameworks);
//console.log(combinacion)

//Forma chida
let combinacion = [...lenguajes,...frameworks]
console.log(combinacion)