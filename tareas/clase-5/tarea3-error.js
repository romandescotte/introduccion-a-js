//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $horasClases = document.querySelectorAll(".horas");
let calcularTotalHoras = function () {
    let resultado = 0; 
    for(let i = 0; i < $horasClases.length; i++) {
        resultado = resultado + Number($horasClases[i].value);
    }
    //console.log("El total de horas es: " + resultado)
    return resultado;
}

const $minutosClases = document.querySelectorAll(".minutos");
let calcularTotalMinutos = function() {
    let resultado = 0;
    for(let i = 0; i < $minutosClases.length; i++) {
        resultado = resultado + Number($minutosClases[i].value);
    }
    //console.log("El total de minutos es: " + resultado)
    return resultado;
}

const $segundosClases = document.querySelectorAll(".segundos");
let calcularTotalSegundos = function() {
    let resultado = 0;
    for(let i = 0; i < $segundosClases.length; i++) {
        resultado = resultado + Number($segundosClases[i].value);
    }    
    return resultado;
}



function mostrarTotalTiempo() {
    const $tiempoTotal = document.querySelector("#tiempo-total");
    const segundosPorMinuto = 60;
    const minutosPorHora = 60;
    /*Si intento clickear en el boton para calcular por segunda vez me dice que calcularTotalSegundos() me tira error de que NO es una funcion
    No conviene usar function expression en este caso??
    */
    if(calcularTotalSegundos() >= segundosPorMinuto) {

        const minutosASumar = parseInt(calcularTotalSegundos() / segundosPorMinuto);
        calcularTotalSegundos = calcularTotalSegundos() % segundosPorMinuto;                
        calcularTotalMinutos = calcularTotalMinutos() + minutosASumar;
        console.log("Minutos: " + calcularTotalMinutos + ", Segundos: " +calcularTotalSegundos);
        
    }

    // $tiempoTotal.textContent = `El tiempo total de las clases es de: ${calcularTotalHoras} horas, ${calcularTotalMinutos} minutos y ${calcularTotalSegundos} segundos`;
}

const $btnCalcularTiempo = document.querySelector("#btn-calcular-tiempo");
$btnCalcularTiempo.onclick = function() {
    mostrarTotalTiempo();
    return false;
}




