let nro: number = 0;

nro = Number(
  prompt(
    "Indique  número que desea incorporar en la posición ${indice} Para el Vector 1: "
  )
);

let numerosIngresados: number[] = new Array(nro);

function cargarVector(v: number[], cantidad: number) {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    v[indice] = Number(prompt("Ingrese el valor de la posicion", indice, ":"));
  }
}

function invertirVector(v: number[], cantidad: number) {
  let indice: number;
  let indiceInvertido: number = 0;

  let arrayInvertido: number[] = new Array(cantidad);
  for (
    indiceInvertido = cantidad - 1;
    indiceInvertido > -1;
    indiceInvertido--
  ) {
    arrayInvertido[indice] = v[indiceInvertido];
    indice++;
  }
  console.log("Nro:", arrayInvertido);
}

function mostrarVertorInverso(v: number[], cantidad: number) {
  cantidad--;
  for (let indice = cantidad; indice > -1; indice--) {
    console.log("Nro :", v[indice]);
  }
}

function mostrarVertor(v: number[], cantidad: number) {
  for (let indice = 0; indice < cantidad; indice++) {
    console.log("Nro :", v[indice]);
  }
}

cargarVector(numerosIngresados, nro);
invertirVector(numerosIngresados, nro);
//mostrarVertor(numerosIngresados, numerosIngresados.length);
