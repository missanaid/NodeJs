//const fs = require('fs');

//const fs = require('express'); son los que la gente crea
//const fs = require('./fs'); son los que nosotros creamos

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar ', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar ', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const argv = require(`./config/yargs`).argv;
const colors = require('colors/safe');





const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.rainbow(archivo)))
            .catch(e => console.log(e));

        break;

    default:
        console.log('Comando no reconocido');
        break;
}



























//console.log(process.argv);

//let argv = process.argv;

// let argv2 = process.argv;
//let base = parametro.split('=')[1];


//console.log(argv2);
//El que hice yo xdxd no caché que era con lo que el puso abajo (2 * 1 = 2)
/*for (let i = 1; i <= 10; i++) {

    let mul = base * i;

    console.log(mul);

}*/



/*for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
    //console.log(`${base} * ${i} = ${base * i}`);

}


fs.writeFile(`./tablas/tabla-${ base}.txt`, data, (err) => {

    if (err) throw err;

    console.log(`El archivo tabla-${base}.txt fue guardado con éxito`);
});*/