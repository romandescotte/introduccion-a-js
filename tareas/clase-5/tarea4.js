//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


function obtenerPromedio(numeros) {
    
    let resultado = 0;
    for(let i = 0; i < numeros.length; i++){
        resultado = resultado + Number(numeros[i].textContent);
    }
    console.log("El promedio es: " + resultado / numeros.length);
    return resultado / numeros.length;
}

function obtenerNumeroMaximo(numeros) {
    let numeroMaximo = Number(numeros[0].textContent);
    for(let i = 1; i < numeros.length; i++){

        if(Number(numeros[i].textContent) > numeroMaximo) {
            numeroMaximo = Number(numeros[i].textContent);
        }             
    }
    console.log("El numero máximo es: " + numeroMaximo);
    return numeroMaximo;

}

function obtenerNumeroMinimo(numeros) {
    let numeroMinimo = Number(numeros[0].textContent);
    for(let i = 0; i < numeros.length; i++) {
        if(Number(numeros[i].textContent) < numeroMinimo) {
            numeroMinimo = Number(numeros[i].textContent);
        }
    }
    console.log("El numero minimo es: " + numeroMinimo);
    return numeroMinimo;
}

function obtenerNumeroMasRepetido(numeros) {   
   
    let cantidadDeApariciones = 0;
    let mayorRepeticion = 0;
    let numeroMasRepetido;
    
    for(let i = 0; i < numeros.length; i++){

        let numeroComparado1 = Number(numeros[i].textContent);
        for(let j = i+1; j < numeros.length; j++) {
            
            let numeroComparado2 = Number(numeros[j].textContent);            
            if(numeroComparado2 === numeroComparado1) {
                cantidadDeApariciones++;
            }
            if(cantidadDeApariciones > mayorRepeticion) {
                numeroMasRepetido = numeroComparado1;
            }
            cantidadDeApariciones = 0; 
        }
    }    
    return numeroMasRepetido;
}

const $promedio = document.querySelector("#promedio");
const $numeroMaximo = document.querySelector("#mas-grande");
const $numeroMinimo = document.querySelector("#mas-chico");
const $numeroMasRepetido = document.querySelector("#mas-repetido");

const $numeros = document.querySelectorAll("li");
$promedio.textContent = `${$promedio.textContent} ${obtenerPromedio($numeros)}`;
$numeroMaximo.textContent = `${$numeroMaximo.textContent} ${obtenerNumeroMaximo($numeros)}`;
$numeroMinimo.textContent = `${$numeroMinimo.textContent} ${obtenerNumeroMinimo($numeros)}`;
$numeroMasRepetido.textContent = `${$numeroMasRepetido.textContent} ${obtenerNumeroMasRepetido($numeros)}`;

