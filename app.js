let pronouns = ["yo", "tu", "el", "ella", "nosotros", "nosotras", "ellos", "ellas"];
let adjectives = ["alto", "triste", "determinante", "cursi", "veloz", "ancestrales", "extraño", "verde"];
let nouns = ["gato", "sombrero", "cuentos", "bigote", "fútbol", "chocolate", "país", "odio"];
let domains = [".com", ".cl", ".net", ".org", ".es", ".io"]


/* console.log(domains[5].slice((domains[5].length)));
console.log(domains[5].length.valueOf()); */

// console.log(nouns[7].slice(-3))

// console.log(nouns[3].slice(0,3));

/* console.log(nouns[7].slice(2,4) + " corta la palabra desde un indice a otro");
console.log(nouns[7].length + " indica el largo de cada palabra dentro del string"); */

/* console.log(nouns[7].slice((nouns[7].length - 2), (nouns[7].length)) + " corta la palabra desde un indice a otro");
console.log(nouns[7].length + " aca muestra el largo del string");
console.log((nouns[7].length - 2).valueOf() + " aca muestra el valor de salida"); */


/* for (pro in pronouns) {
    
    for (adj in adjectives) {

        for (nns in nouns) {

            for (dom in domains) {

                // console.log(`${pronouns[pro]}${adjectives[adj]}${nouns[nns]}${domains[dom]}`);
                
            }
        }
    }
    
} */

/* console.log(nouns.splice(2,7,'baboso')); */



//aca tengo un problema resolverlo con el profe

console.log(nouns[7].replace('odio','od'));



for ( i = 0 ; i <= nouns.length ; i++){

   

    if ( domains[i].slice(1) === nouns[i].slice(-2) ) {

        
        // console.log("verdadero");
        
    }else{
        // console.log(domains[i]);
        // console.log(nouns[i]);
        
        // console.log("falso");
    }
    

}


/* for ( i in nouns ){

    if ( domains[i].slice(1) === nouns[i].slice(-2) ) {

        
        console.log("verdadero");
        
    }else{
        console.log(i);
        console.log("falso");
    }
} */



// aca el bucle itera en el array nouns y devuelve las ultimas 3 letras de cada palabra
/* 
for ( i in nouns) {
    
    // console.log(nouns[i].slice(-3))

    for ( i in domains) {
    
    // console.log(domains[i].slice(1));
     
   }

} */

// eliminar el . final a domains para poder comparar

/* for ( i in nouns) {
    
    console.log(domains[i].slice(1)); // aca elimina el punto del inicio
    
    
} */

/* if ( nouns[i].slice(-3) === domains[i].slice(1) ) {
    console.log("1"); 
} else if ( nouns[i].slice(-2) === domains[i].slice(1) ) {
    console.log("2"); 
} else{
    console.log("3"); 
} */

// estoy aca 

/* if (  nouns[0].slice((nouns[0].length - 3), (nouns[0].length)) === domains[0].slice((domains[0].length - 3), (domains[0].length)) ){
    console.log("verdadero");
    console.log();

}else{
    console.log("falso");
} */

/* console.log(nouns[0].slice((nouns[0].length - 3), (nouns[0].length)))
console.log(domains[0].slice((domains[0].length - 3), (domains[0].length))) */


// console.log(domains.length); /* son las posiciones de cara string dentro del array */
// console.log(domains[0]); /* muestra el primer contenido del array domains */
// console.log(domains[0].length); /* me indica el largo del contenido de cada indice */
// console.log(domains[0].slice((domains[0].length - 3), (domains[0].length)));


/* for ( i in nouns) {
    
    // console.log(nouns[i].slice(-3))
    console.log(domains[i].slice(1))
    
} */