/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


function crearInputsEdad(cantidad) {
    const $formEdades = document.querySelector("#form-edades");
    const $listaOrdenada = document.createElement("ol");
    $listaOrdenada.id = "edades-lista";

    for(i = 0; i < cantidad; i++) {
        const $itemLista = document.createElement("li");
        $itemLista.id = `item-lista-${i+1}`;
        const $label = document.createElement("label");
        const $input = document.createElement("input");
        $input.classList.add("edades-familiares");
        const $textoLabel = "Edad del integrante familiar : ";
        $itemLista.textContent = $textoLabel;
        $formEdades.appendChild($listaOrdenada);
        $listaOrdenada.appendChild($itemLista);
        $itemLista.appendChild($label);
        $itemLista.appendChild($input);
    }
    
}

function mostrarBotonesSueldo() {
    document.querySelector("#seccion-sueldos").style.display = "block";
}

function ocultaBotonesSueldo() {
    document.querySelector("#seccion-sueldos").style.display = "none";
}

const $btnAgregarFamiliares = document.querySelector("#btn-agregar-familiares");
const $inputCantidadFamiliares = document.querySelector("#cantidad-familiares");

$btnAgregarFamiliares.onclick = function() {
    const $cantidadFamiliares = Number($inputCantidadFamiliares.value);
    crearInputsEdad($cantidadFamiliares);
    mostrarBotonesSueldo();
    return false;
}


function obtenerMayorEdad(edades) {
    let mayorEdad = Number(edades[0].value);
    for(let i = 0; i < edades.length; i++) {
        if(Number(edades[i].value) > mayorEdad) {
            mayorEdad = Number(edades[i].value);
        }
    }
    console.log("mayor edad:" + mayorEdad);
    return mayorEdad;
}

function obtenerMenorEdad(edades) {
    let menorEdad = Number(edades[0].value);
    for(let i = 0; i < edades.length ; i++) {
        if(Number(edades[i].value) < menorEdad) {
            menorEdad = Number(edades[i].value);
        }
    }
    console.log("menor edad: "+menorEdad);
    return menorEdad;
}

function obtenerPromedio(edades) {
    let sumaEdades = 0;
    for(i = 0; i < edades.length; i++) {
        sumaEdades = sumaEdades + Number(edades[i].value);
    }
    console.log("promedio:" + sumaEdades/edades.length);
    return sumaEdades / edades.length;
}



const $btnCalcularEdades = document.querySelector("#btn-calcular-edades");
$btnCalcularEdades.onclick = function() {
    const $edades = document.querySelectorAll(".edades-familiares");
    const $mayorEdad = document.querySelector("#mayor-edad");
    const $menorEdad = document.querySelector("#menor-edad");
    const $promedioEdad = document.querySelector("#promedio-edad");

    $mayorEdad.textContent = obtenerMayorEdad($edades);
    $menorEdad.textContent = obtenerMenorEdad($edades);
    $promedioEdad.textContent = obtenerPromedio($edades);
    return false;
}



function removerElemento(elemento) {
    document.querySelector("#mayor-edad").textContent = '';
    document.querySelector("#menor-edad").textContent = '';
    document.querySelector("#promedio-edad").textContent = '';
    elemento.remove();
    ocultaBotonesSueldo();
    numeradorId = 1;
}

const $btnEmpezarDeNuevo = document.querySelector(("[value = 'Empezar de nuevo']"));
$btnEmpezarDeNuevo.onclick = function() {
    const $listaEdades = document.querySelector("#edades-lista");
    removerElemento($listaEdades);
    return false;
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
let numeradorId = 1;
function agregarInputSueldo() {

    const $listaOrdenada = document.querySelector("#edades-lista");   
    if(!$listaOrdenada) {
        alert("Agrega algunos familiares primero!");
    } else {
        const $itemLista = document.querySelector(`#item-lista-${numeradorId}`);
        const $inputsLista = document.querySelectorAll(".edades-familiares");
        const $inputSueldo = document.querySelectorAll(".input-sueldos-familiares");
        if($inputSueldo.length < $inputsLista.length ) {
            const $inputSueldo = document.createElement("input");
            $inputSueldo.classList.add("input-sueldos-familiares");
            $inputSueldo.placeholder = "Ingrese sueldo mensual";
            const $labelSueldo = document.createElement("label");
            $labelSueldo.classList.add("label-sueldos-familiares");
            const $textoLabel = `Sueldo familiar Nº${numeradorId}`;
            $labelSueldo.textContent = $textoLabel;
            $itemLista.appendChild($labelSueldo);
            $itemLista.appendChild($inputSueldo);
            numeradorId++;
        } 
    }
}

const $btnAgregarSueldo = document.querySelector("[value = 'Agregar Sueldo']");
$btnAgregarSueldo.onclick = function() {
    agregarInputSueldo();
}

function quitarInputSueldo() {
    const $inputSueldo = document.querySelectorAll(".input-sueldos-familiares");
    const $labelSueldo = document.querySelectorAll(".label-sueldos-familiares");
    if($inputSueldo.length > 0) {
        numeradorId--;
        $inputSueldo[$inputSueldo.length-1].remove();
        $labelSueldo[$labelSueldo.length-1].remove();
    } else {
        alert("No hay sueldos que quitar, agrega sueldos primero!");
    }
}

const $btnQuitarSueldo = document.querySelector("[value = 'Quitar Sueldo']");
$btnQuitarSueldo.onclick = function() {
    quitarInputSueldo();
    return false;
}


function obtenerMayorSueldo(sueldos) {
    let mayorSueldo = 0;
    let sueldoAComparar;
    for(let i = 0; i < sueldos.length; i++) {
        if(sueldos[i].value !== '')  {
            if(Number(sueldos[i].value) > mayorSueldo) {
                mayorSueldo = Number(sueldos[i].value);
            }
        } 
    }
    return mayorSueldo;
}

function obtenerMenorSueldo(sueldos) {
    let menorSueldo;
    for(let i = 0; i < sueldos.length; i++){
        if(sueldos[i].value !== '' && typeof(menorSueldo) !== 'number') {  
            menorSueldo = Number(sueldos[i].value);
        } else if(typeof(menorSueldo) === 'number' && Number(sueldos[i].value) < menorSueldo && sueldos[i].value !== '' ) {
            menorSueldo = Number(sueldos[i].value);
        }
    }
    return menorSueldo;
}

function obtenerPromedioSueldoMensual(sueldos) {
    let sumaSueldos = 0;
    for(let i = 0 ; i < sueldos.length ; i++) {
        if(sueldos[i].value !== '') {
            sumaSueldos = sumaSueldos + Number(sueldos[i].value);
        }
    }
    const promedioSueldosMensual = sumaSueldos / sueldos.length;
    return promedioSueldosMensual;
}

function obtenerPromedioSueldoAnual(sueldos) {
    let sumaSueldos = 0;
    const mesesEnElAnio = 12;
    for(let i = 0; i < sueldos.length ; i++) {
        if(sueldos[i].value !== '') {
            sumaSueldos = sumaSueldos + Number(sueldos[i].value);
        }
    }
    const totalAnualSueldos = sumaSueldos * mesesEnElAnio;
    const promedioAnualSueldos = totalAnualSueldos / sueldos.length;
    return promedioAnualSueldos;
}

function muestraSueldos(sueldos) {
    const $mayorSueldo = document.querySelector("#mayor-sueldo");
    const $menorSueldo = document.querySelector("#menor-sueldo");
    const $promedioSueldoAnual = document.querySelector("#promedio-sueldo-anual");
    const $promedioSueldoMensual = document.querySelector("#promedio-sueldo-mensual");

    $mayorSueldo.textContent = obtenerMayorSueldo(sueldos);
    $menorSueldo.textContent = obtenerMenorSueldo(sueldos);
    $promedioSueldoAnual.textContent = obtenerPromedioSueldoAnual(sueldos);
    $promedioSueldoMensual.textContent = obtenerPromedioSueldoMensual(sueldos);


}



const $btnCalcularSueldos = document.querySelector("#btn-calcular-sueldos");
$btnCalcularSueldos.onclick = function() {
    const $inputSueldosFamiliares = document.querySelectorAll(".input-sueldos-familiares");
    muestraSueldos($inputSueldosFamiliares)
    
}

