const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const estudiantes = [];


const pintarCard =(tipo) => {
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const templateEstudiante = document.querySelector("#templateEstudiante").content;
    if (tipo ==="ESTUDIANTE"){
        for(let i of estudiantes){
        }
    }
}

const agregarEstudiante =(name, lastName,avg)=>{
    let persona ={
        nombre: name,
        appelido: lastName,
        promedio: avg
    };
    estudiantes.push(persona);
}

