// Scope

var musica = "Rock";

if(musica){
    var musica = "Pop";
    console.log("Dentro del IF: ", musica);
}
console.log("Fuera del IF: ", musica);


// Scope con let

let musica2 = "Rock";

if(musica){
    let musica2 = "Pop";
    console.log("Dentro del IF: ", musica2);
}
console.log("Fuera del IF: ", musica2);