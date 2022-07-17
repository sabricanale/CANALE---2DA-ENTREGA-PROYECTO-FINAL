let estudiantes = []
let formulario
let nombreEstudiante
let inputNota1
let inputNota2
let inputNota3
let promedio
let tabla

class Estudiantes {
    constructor(nombre, nota1, nota2, nota3, promedio){
        this.nombre = nombre
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.promedio = promedio
    }
}
function inicializarElementos(){
    formulario = document.getElementById("formulario")   
    nombreEstudiante = document.getElementById("nombreEstudiante")
    inputNota1= document.getElementById("inputNota1")
    inputNota2 = document.getElementById("inputNota2")
    inputNota3 = document.getElementById("inputNota3")
    tabla = document.getElementById("tablaProductos")
}

function inicializarEventos(){
    formulario.onsubmit = (event) => validarFormulario(event)
}

function validarFormulario(event){
    event.preventDefault() 
    let nombre = nombreEstudiante.value
    if(nombre !== ""){         
        let nota1 = parseInt(inputNota1.value)
        if(nota1 < 0 || nota1 > 10){
            alert("Error en la carga de la primera nota")
        }
        else{            
            let nota2 = parseInt(inputNota2.value)
            if(nota2 < 0 || nota2 > 10){
                alert("Error en la carga de la segunda nota")
            }
            else{
                let nota3 = parseInt(inputNota3.value)
                if(nota3 < 0 || nota3 > 10){
                    alert("Error en la carga de la tercera nota")
                }   
                else{
                    let promedio = (nota1 + nota2 + nota3)/3
                    let estudiante = new Estudiantes (nombre, nota1, nota2, nota3, promedio)
                    estudiantes.push(estudiante)
                    formulario.reset() 
                    limpiarTabla()
                    agregarEstudiantesTabla()
                    almacenarEstudiantesLocalStorage()
                }            
            }  
        }          
    }
    else{
        alert("Error en la carga de nombre del estudiante")
    }        
}


function agregarEstudiantesTabla(){
    estudiantes.forEach((estudiante) => {let filaTabla = document.createElement("tr")
    filaTabla.innerHTML = `
    <td>${estudiante.nombre}</td>
    <td>${estudiante.nota1}</td>
    <td>${estudiante.nota2}</td>
    <td>${estudiante.nota3}</td>
    <td>${estudiante.promedio}</td>
    ` 
    tabla.tBodies[0].append(filaTabla)
})
}

function limpiarTabla(){
    while(tabla.rows.length >1){
        tabla.deleteRow(1)
    }
}

function almacenarEstudiantesLocalStorage(){
localStorage.setItem("listaEstudiantes", JSON.stringify(estudiantes))
}

function obtenerProductosLocalStorage(){
    let estudiantesRegistrados = localStorage.getItem("listaEstudiantes")
    if(estudiantesRegistrados !== null){
        estudiantes = JSON.parse(estudiantesRegistrados)
    }
} 

function main (){    
    inicializarElementos()
    inicializarEventos()
    obtenerProductosLocalStorage()
    agregarEstudiantesTabla()
}

main()















