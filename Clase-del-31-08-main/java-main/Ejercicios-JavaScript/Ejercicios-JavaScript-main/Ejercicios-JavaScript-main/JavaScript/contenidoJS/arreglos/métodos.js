"use strict";
//1. Cadena a arreglo por el método split
let CadenaDias = "lunes_martes_miercoles_jueves_viernes_sabado_domingo"
let miArray = CadenaDias.split("_");
//console.log(miArray);
//2. Buscar si no encuentra el valor devuelve un undefined
//Función anónima ()=>{}   clásica function(){}

const result= miArray.find((e)=>e=== "martes");
const index = miArray.findIndex((e)=>e=== "martes");
//console.log(index);

//3. Comprueba si existe un elemento dentro de un arreglo true o false
//console.log(miArray.includes("martes1"));

//4. Filtrar elementos
let miArray2=[];
for(let i=0; i<25; i++) {
    miArray2[i] = i + 3;
}
console.log(miArray2);
const response = miArray2.filter((e)=> e > 15);
console.log(response);

//Consultar métodos map, some, every, reduce, concat