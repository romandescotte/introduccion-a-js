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
    return resultado;
}

const $minutosClases = document.querySelectorAll(".minutos");
let calcularTotalMinutos = function() {
    let resultado = 0;
    for(let i = 0; i < $minutosClases.length; i++) {
        resultado = resultado + Number($minutosClases[i].value);
    }    
    return resultado;
}

const $segundosClases = document.querySelectorAll(".segundos");
function calcularTotalSegundos() {
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
    
    let totalSegundos = calcularTotalSegundos();
    let totalMinutos = calcularTotalMinutos();
    let totalHoras = calcularTotalHoras();

    if(totalSegundos >= segundosPorMinuto) {
        const minutosASumar = parseInt(totalSegundos / segundosPorMinuto);
        totalSegundos = totalSegundos % segundosPorMinuto;                
        totalMinutos = totalMinutos + minutosASumar;
        console.log("Minutos: " + totalMinutos + " Segundos: " +totalSegundos);
    }    
    if(totalMinutos >= minutosPorHora) {
        const horasASumar = parseInt(totalMinutos / minutosPorHora);
        totalMinutos = totalMinutos % minutosPorHora;
        totalHoras = totalHoras + horasASumar;  
        console.log("Horas: "+totalHoras+ " Minutos: "+ totalMinutos+ " Segundos: "+ totalSegundos);      
    }

    $tiempoTotal.textContent = `El tiempo total de las clases es de: ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`;
}

const $btnCalcularTiempo = document.querySelector("#btn-calcular-tiempo");
$btnCalcularTiempo.onclick = function() {
    mostrarTotalTiempo();
    return false;
}




