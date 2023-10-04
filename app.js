let pronouns = ["yo", "tu", "el", "ella", "nosotros", "nosotras", "ellos", "ellas"];
let adjectives = ["alto", "triste", "determinante", "cursi", "veloz", "ancestrales", "extraño", "verde"];
let nouns = ["gato", "sombrero", "cuentos", "bigote", "fútbol", "chocolate", "país", "odio"];
let domains = [".com", ".cl", ".net", ".org", ".es", ".io"]


// console.log(nouns[3].slice(0,3));

/* console.log(nouns[7].slice(2,4) + " corta la palabra desde un indice a otro");
console.log(nouns[7].length + " indica el largo de cada palabra dentro del string"); */

console.log(nouns[7].slice((nouns[7].length - 2), (nouns[7].length)) + " corta la palabra desde un indice a otro");
console.log(nouns[7].length + " aca muestra el largo del string");
console.log((nouns[7].length - 2).valueOf() + " aca muestra el valor de salida");


/* for (pro in pronouns) {
    
    for (adj in adjectives) {

        

        for (nns in nouns) {

            for (dom in domains) {

                // console.log(`${pronouns[pro]}${adjectives[adj]}${nouns[nns]}${domains[dom]}`);
                
            }
        }
    }

    
} */

// aca el bucle itera en el array nouns y devuelve las ultimas 3 letras de cada palabra
for ( i in nouns) {
    
    console.log(nouns[i].slice((nouns[i].length - 3), (nouns[i].length)))
    
}


