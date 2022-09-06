//Determinar la calificación de un estudiante, según la siguiente escala de ponderación:

/**

 * 0 y 2.9 la ponderación es insuficiente.

 * 3.0 y 3.5 ponderación es regiular

 * 3.6 y 4.0 ponderacón es Bien.

 * 4.1 y 4.5 Muy bien.

 * 4.6 y 5.0 es Excelente

 */
"use strict"
let calificacion;
calificacion= 5;
let mensaje;
mensaje ="";
switch (true){
    case calificacion >= 0 && calificacion <= 2.9:
        //template string
        mensaje = `Insuficiente la calificación: ${calificacion}`;
        break;
    case calificacion >= 3 && calificacion <= 3.5:
        //template string
        mensaje = `Regular la calificación: ${calificacion}`;
        break;
    case calificacion >= 3.6 && calificacion <= 4.0:
        //template string
        mensaje = `Bien la calificación: ${calificación}`;
        break;
    case calificacion >= 4.1 && calificacion <= 4.5:
        //template string
        mensaje = `Muy bien la calificación: ${calificacion}`;
        break;
    case calificacion >= 4.6 && calificacion <= 5.0:
        //template string
        mensaje = `Excelente la calificación: ${calificacion}`;
        break;
    default:
        mensaje= `la calificación no puede ser procesada: ${calificacion}`;
        break;

}
console.log(mensaje)
