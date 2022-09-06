"use strict";
//Seleccionar por id
//const parrafo1 = document.getElementById("parrafo1");

//console.log(parrafo1);
//Selección por atributo name
let nameParrafo = document.getElementsByName("parra2");
//console.log(nameParrafo);
//Selección por class
let elemento = document.getElementsByClassName("parrafo");
//consolge.log(elemento);
//Query selector por id #
const parrafo1 = document.querySelector("#parrafo1");
const elementEtiqueta = document.querySelector("h1");
const elementClass = document.querySelector();
//console.log(parrafo1);

//seleccionando todos los elementos p
const todosP = document.querySelectorAll("p");
//console.log(todosP);

function print(){
    let valor = document.getElementById("edad").value
    console.log("la edad es:"+valor);
}
/*
const print = () =>{
    const valor = document.getElementById("edad").
    value
    alert("la edad es:"+valor);
}*/
