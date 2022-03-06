
function saludar( nombre ) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1,2];

    // Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar( 'Juan David', 40, true, 'Costa Rica' );

// saludar2( 'Juan David' );

// saludarFlecha();
// saludarFlecha2( 'Andres' );

function sumar(a, b) { 
    return 'Hola Mundo';
} 

//const sumar2 = (a, b) => { 
//    return a + b;
//}

// Se puede abreviar la funcion de flecha si solo va retornar
const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );
