//Array Simple
let frutas = ["Naranja", "Manzana", "Melón", "Sandía"];
console.log(frutas);

//Funcion length (tamaño del array)
let tamanio = frutas.length;
console.log(tamanio);

//Funcion push (agrega elemento al final)
let nombres = ["Pedro", "Juan", "Maria", "Ana"];
console.log(nombres);
nombres.push("Rodrigo");
console.log(nombres);

//Funcion pop (elimina ultimo elemento)
nombres.pop();
console.log(nombres);

//Funcion shift (elimina primer elemento)
nombres.shift();
console.log(nombres);

//Funcion unshift (agrega primer elemento)
nombres.unshift("Angel");
console.log(nombres);

//Funcion indexOf (indica la posición del elemento solicitado)
console.log(nombres.indexOf("Juan"));

//Funcion splice
nombres.splice(1, 0, "John"); //(agrega un elemento en la posicion especificada)
console.log(nombres);

nombres.splice(1, 1, "Kate") //(remplaza un elemento en la posicion especificada)
console.log(nombres);

//Funcion slice (copia un array a otro)
let names = nombres.slice();
console.log("Array Nombres: "+ nombres);
console.log("Array Names: "+ names);