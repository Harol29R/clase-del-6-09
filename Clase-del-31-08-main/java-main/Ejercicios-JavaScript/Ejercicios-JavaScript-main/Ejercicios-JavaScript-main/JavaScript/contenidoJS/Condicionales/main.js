"use strict"
let num1;
let num2;
num1 = 9;
num2 = "9";

if (num1 >0){

}else{ 
if (num1 > 0){
    if ((num1 % 3 === 0) && (parseint(num2)>0)) {
        console.log("num1 es múltiplo de 3 y num2 > 0");
    }else{
        if(num1 % 2 === 0) console.log("num1 es múltiplo de 2");
    }
}
}

//Switch
let opcion;
opcion= prompt("introduzca una opción");

switch (opcion){
    case "1":
        alert("Seleccionó la la opción 1");
        break;
    case "2":
        alert("Seleccionó la la opción 2");
        break;
    case "3":
        alert("Seleccionó la la opción 3");
        break;
    case "4":
        alert("Seleccionó la la opción 4");
        break;
    default:
    case "5":
        alert("Seleccionó una opción inválida");

               
}
