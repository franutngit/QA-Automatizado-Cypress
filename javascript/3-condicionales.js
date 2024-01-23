//Condicionales Simples
let num = 3;
if (num > 0) {
    console.log("El número es positivo");
}

//Condicionales Dobles
let edad = 18;

if (edad >= 18) {
    console.log("Persona mayor de edad.");
} else {
    console.log("Persona menor de edad.");
}

//Condicionales Multiples
let numero = 1;

if (numero === 1) {
    console.log("El número es uno");
} else if (numero === 2) {
    console.log("El número es dos");
} else if (numero === 3) {
    console.log("El número es tres");
} else {
    console.log("El número no es uno, dos ni tres");
}

//Switch Case
let diaDeLaSemana = "lunes"

switch (diaDeLaSemana) {
case "lunes":
    console.log("Es el primer día de la semana");
    break;
case "martes":
    console.log("Es el segundo día de la semana");
    break;
case "miercoles":
    console.log("Es el tercer día de la semana");
    break;
case "jueves":
    console.log("Es el cuarto día de la semana");
    break;
case "viernes":
    console.log("Es el quinto día de la semana");
    break;
default:
    console.log("Es fin de semana");
    break;
}