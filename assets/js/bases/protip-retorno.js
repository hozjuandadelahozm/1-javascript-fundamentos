
// function CrearPersona( nombre, apellido ) {
//    return { nombre, apellido }
//}

// cuanodo se quiere retornar un objeto con una funcion de flecha reducida se debe meter el objeto dentro de ()
const CrearPersona = ( nombre, apellido ) => ({ nombre, apellido });


const persona = CrearPersona( 'Juan', 'De la hoz' );

console.log( persona );

function imprimeArgumentos() { 
    console.log( arguments );
}

// el operador rest ... trae todos los argumentos que se le pasan al parametro de una funcion
const imprimeArgumentos2 = ( edad, ...args ) => { 
    // console.log({ edad, args });
    return args;
}

// asignar el nombre a la propiedad del objeto desde la definicion de la constante
const [casado, vivo, nombre, saludo] = imprimeArgumentos2( 10, true, false, 'Juan', 'Hola' );
console.log({ casado, vivo, nombre, saludo });

// cambiar el nombre a una propiedad de un objeto apellido: nuevoApellido
const { apellido: nuevoApellido } = CrearPersona( 'Juan', 'De la hoz' );
console.log({ nuevoApellido });

// ------------------------------------------------------------------------------------------------

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['MArk I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log( 'nombre', personaje.nombre );
//     console.log( 'codeName', personaje.codeName );
//     console.log( 'vivo', personaje.vivo );
//     console.log( 'edad', personaje.edad );
//     console.log( 'trajes', personaje.trajes );
// }

// Desectructuracion de un objeto
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes  }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}


imprimePropiedades( tony );