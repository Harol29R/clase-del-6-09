"use strict";
// 1. Objeto Literal de JavaScript
let cristian = {
    nombres: "cristian",
    apellidos: "Guasca",
    edad: 17,
    altura: 1.63,
    peso: 65.2,
    caminar: function (){
        return `Yo camino`;
    },
    hablar: function (){
        return `Yo hablo`;
    }
}

//console.log(cristian);
//console.log(cristian.nombres, cristian.apellidos);
//console.log(cristian.caminar());

/* No se puede
for(i of cristian){
    console.log(i);
}*/
//values
Object.keys(cristian).forEach((e) => console.log (e)) ;