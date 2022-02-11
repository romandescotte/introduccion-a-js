
function obtenerDatosInputs(claseDelElemento) {
  const numeros = [];
  const $input = document.querySelectorAll(`.${claseDelElemento}`);

  for(i = 0; i < $input.length; i++) {
      if($input[i].value === '' ) {
          continue;
      }

      numeros.push(Number($input[i].value));
  }
  console.log('Numeros extraidos de input: ' + numeros);
  return numeros;
}

function obtenerMayorNumero(numeros) {

  let mayorEdad = Number(numeros[0]);

  for(let i = 1; i < numeros.length; i++) {        
      if(Number(numeros[i]) > mayorEdad) {
          mayorEdad = Number(numeros[i]);
      }
  }

  console.log("Mayor numero: " + mayorEdad);
  return mayorEdad;
}

function obtenerMenorNumero(numeros) {

  let menorEdad = Number(numeros[0]);

  for(let i = 1; i < numeros.length ; i++) {       
      if(Number(numeros[i]) < menorEdad) {
          menorEdad = Number(numeros[i]);
      }
  }

  console.log("Menor numero: " + menorEdad);
  return menorEdad;
}

function obtenerPromedio(numeros) {

  let sumaNumeros = 0;

  for(i = 0; i < numeros.length; i++) {
      sumaNumeros = sumaNumeros + Number(numeros[i]);
  }

  console.log("Promedio:" + sumaNumeros/numeros.length);
  return sumaNumeros / numeros.length;
}


function obtenerPromedioSueldoMensual(sueldos) {

  let sumaSueldos = 0;

  for(let i = 0 ; i < sueldos.length ; i++) {        
      sumaSueldos = sumaSueldos + Number(sueldos[i]);        
  }

  const promedioSueldosMensual = sumaSueldos / sueldos.length;
  return promedioSueldosMensual;
}

function obtenerPromedioSueldoAnual(sueldos) {

  let sumaSueldos = 0;
  const mesesEnElAnio = 12;

  for(let i = 0; i < sueldos.length ; i++) {        
      sumaSueldos = sumaSueldos + Number(sueldos[i]);        
  }

  const totalAnualSueldos = sumaSueldos * mesesEnElAnio;
  const promedioAnualSueldos = totalAnualSueldos / sueldos.length;
  return promedioAnualSueldos;
}

