//  Metodos en arreglos

const personas = [
    {nombre:"Alan",edad:24, aprendiendo:"JS"},
    {nombre:"Michel",edad:29, aprendiendo:"Python"},
    {nombre:"Erick",edad:32, aprendiendo:"C#"},
    {nombre:"Alexis",edad:28, aprendiendo:"React"},
    {nombre:"Juan",edad:40, aprendiendo:"VB"},
]

console.log(personas)

//Mayores de 28 años
const mayores = personas.filter(persona => {
    return persona.edad>28;
});

console.log(mayores);

//Que aprende Erick
const Erick = personas.find(persona => {
    return persona.nombre === "Erick";
});

console.log(Erick);

// Reduce

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total / personas.length);