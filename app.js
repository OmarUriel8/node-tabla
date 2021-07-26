const { crearArchivoMultiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

// let base = 4;

// console.log(process.argv);
// const [ , , arg3 = 'base=5' ] = process.argv;
// const base = arg3.split('=')[1];
// console.log(base);

crearArchivoMultiplicar(argv.b, argv.l, argv.h)
	.then((nombreArchivo) => console.log(colors.random(nombreArchivo), colors.rainbow('creado').bold))
	.catch((err) => console.log(colors.red(err)));

// console.log(process.argv);
// console.log(argv);
