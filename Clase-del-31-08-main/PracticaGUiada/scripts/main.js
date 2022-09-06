import {validateString,validatedAverage} from "./validated.js";

const btnAgregar = document.querySelector("#btn");
const btnMostrar = document.querySelector("#btnMostrar");

//propiedad y .addEventListener
btnAgregar.addEventListener("click", () => {
    const nombre= document.querySelector("#nombre").value;
    const apellido= document.querySelector("#apellido").value;
    const promedio = document.querySelector("#promedio").value;
    const opcion = document.querySelector("#opcion").value;

    if (validateString(nombre) && validateString(apellido) && opcion !="0"){
        if (!isNaN(parseFloat(promedio)) && (validatedAverage(promedio))){
           agregarEstudiante(nombre,apellido,promedio); 
        }else{
            console.log("Error promedio");
        }
    }else{
        console.log("Error datos");
    }

    
    
}); 
