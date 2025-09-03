// Funciones Básicas
function sumar(a: number, b: number) {
  return a + b;
}

const contar = (heroes: string[]) => {
  return heroes.length;
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean): void => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
}

llamarBatman(true);

// Rest?
const unirheroes = (personas: string[]): string => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: any[]): void => { }

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (numero: number, texto: string, booleano: boolean, arreglo: any[]) => void;
noHaceNadaTampoco = noHaceNada
