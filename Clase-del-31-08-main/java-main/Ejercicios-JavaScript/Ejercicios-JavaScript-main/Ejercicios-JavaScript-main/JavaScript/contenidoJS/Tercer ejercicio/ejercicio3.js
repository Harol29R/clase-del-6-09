"use strict";



let cantNum;

let canPos;

let canNeg;

let canCero;

let num;



canCero = 0;

canNeg = 0;

canPos = 0;



cantNum = parseInt(prompt('Digita un valor nùmerico entero: '));

for ( let i=0; i<cantNum; i++){

 num = parseFloat(prompt('Nùmero: '));

 if(num == 0){

    canCero++;

 }

 else{

    if(num > 0){

        canPos++;

    }

    else{

        if(num < 0){

            canNeg++;

        }

    }

 }

}

alert('Cantidad de nùmeros positivos: '+canPos);

alert('Cantidad de nùmeros negativos: '+canNeg);

alert('Cantidad de ceros'+ canCero);