//Funciones Simples
function saludar(){
    console.log("Buenos días!");
}

saludar();

//Funciones con Argumentos
function sumar(a, b){
    return a + b;
}

console.log("La suma es: "+ sumar(5,5));

//Funciones de Flecha
const saludar = () => {
    console.log("Funcion flecha");
}

saludar();

const sumar = (a,b) => a + b;

console.log(sumar(5,4));