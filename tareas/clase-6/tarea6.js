/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#btn-agregar-familiares").onclick = function(event) {

    event.preventDefault();

    const $inputCantidadFamiliares = document.querySelector('#cantidad-familiares');
    const cantidadFamiliares = Number($inputCantidadFamiliares.value);
    
    borrarInputsEdad()
    crearInputsEdad(cantidadFamiliares);
    if(cantidadFamiliares > 0) {
        mostrarElementos('seccion-sueldos');
    } else {
        ocultarElementos('seccion-sueldos');
        ocultarElementos('parrafo-calculo-edades');
    }    
}

document.querySelector("#btn-calcular-edades").onclick = function(event) {

    event.preventDefault();
    
    const edades = obtenerDatosInputs('edades-familiares');

    if(edades.length === 0) {
        alert('No has ingresado ninguna edad para calcular!')
    } else {
        mostrarEdad('mayor', obtenerMayorNumero(edades));
        mostrarEdad('menor', obtenerMenorNumero(edades));
        mostrarEdad('promedio', obtenerPromedio(edades));
        mostrarElementos('parrafo-calculo-edades');
    }
}

document.querySelector('#btn-empezar-de-nuevo').onclick = function(event) {

    event.preventDefault();

    const $listaEdades = document.querySelector("#edades-lista");

    removerElemento($listaEdades);
    ocultarElementos('seccion-sueldos');
    ocultarElementos('parrafo-calculo-edades');
    ocultarElementos('parrafo-calculo-sueldos');
    
    numeradorId = 1;
}

function borrarInputsEdad() {
    const $listaOrdenada = document.querySelector('#edades-lista');
    if($listaOrdenada) {
        $listaOrdenada.remove();
    }
}

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

function mostrarElementos(idElemento) {
    document.querySelector(`#${idElemento}`).className = '';
}

function ocultarElementos(idElemento) {
    document.querySelector(`#${idElemento}`).className = 'oculto';
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function removerElemento(elemento) {
    elemento.remove();
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector('#btn-agregar-sueldo').onclick = function(event) {
    event.preventDefault();
    agregarInputSueldo();
}

document.querySelector('#btn-quitar-sueldo').onclick = function(event) {
    event.preventDefault();
    quitarInputSueldo();
}

document.querySelector("#btn-calcular-sueldos").onclick = function(event) {
    event.preventDefault();
    
    const $inputSueldosFamiliares = document.querySelectorAll('.input-sueldos-familiares');
    
    if($inputSueldosFamiliares.length > 0) {
        muestraSueldos(); 
   } else {
        alert("No hay sueldos de familiares, agrega algunos primero!");
   }
} 

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

function muestraSueldos() {

    const sueldos = obtenerDatosInputs('input-sueldos-familiares');
    if(sueldos.length === 0) {
        alert("No has ingresado ningun valor de sueldo!");
    } else {
        popularSueldos('mayor', obtenerMayorNumero(sueldos));
        popularSueldos('menor', obtenerMenorNumero(sueldos));
        popularSueldos('promedio-mensual', obtenerPromedioSueldoMensual(sueldos));
        popularSueldos('promedio-anual', obtenerPromedioSueldoAnual(sueldos));
        mostrarElementos('seccion-sueldos');
        mostrarElementos('parrafo-calculo-sueldos');
    }   
}

function popularSueldos(tipo, valor) {
    document.querySelector(`#${tipo}-sueldo`).textContent = valor;
    console.log(`#${tipo}-sueldo = ${valor}`);
}

