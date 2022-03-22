
const elMayor = (a, b) => (a > b) ? a : b;

const tieneMenbresia = ( mienbro ) => (mienbro) ? '2 Dolares' : '10 Dolares';


console.log( elMayor(20, 15) );
console.log( tieneMenbresia( false ) );

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Streange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')() // Funcion anonima autoinvocable
    elMayor( 10, 15 )
];

console.log( amigosArr );


const nota = 82.5; // A+ A B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log( {nota, grado} );