
let a = 5;

if ( a >= 10 ) {// undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes.....

// console.log({ dia });

// if( dia === 0 ){
//     console.log('Domingo');
// } else if( dia === 1 ){
//     console.log('Lunes');
// } else if ( dia === 2 ){
//     console.log('Martes');
// } else {
//     console.log('No es lunes, martes o domingo....');
// }

dia = 5;

let diasLetras = { 
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miercoles - 3',
    4: () => 'jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sabado - 6' 
}

let diasLetras2 = ['Domingo','Lunes','Martes','Miercoles','jueves','Viernes','Sabado'];


// console.log(diasLetras[dia]());
console.log(diasLetras2[dia]);



