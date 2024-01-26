//While
let x = 0;   
while(x<10){
    console.log(x);
    x++;
}

//Do While
x = 50;
do{
    console.log(x);
    x++;
}while(x<10);

//For
let nombres = ["Pedro", "Juan", "Maria", "Ana"];

for(let x = 0; x < 10; x++){
    console.log("Iteracion "+x);
}

for(let x = 0; x < nombres.length; x++){
    console.log(nombres[x]);
}

//For In
let apellidos = {a:"Álvarez",b:"Rodriguez", c:"Martinez", d:"Rojas"};
for(let pos in apellidos){
    console.log(apellidos[pos]);
}
console.log("-----------------------------------");
for(let pos in nombres){
    console.log(nombres[pos]);
}

for(let pos in nombres){
    console.log(pos);
}

//For Each
nombres.forEach(function(elemento,indice,array){
    console.log(elemento);
})