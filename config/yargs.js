const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
	.options({
		b: {
			alias: 'base',
			type: 'number',
			demandOption: true,
			describe: 'Es la base de la tabla de multiplicar',
		},
		l: {
			alias: 'listar',
			type: 'boolean',
			default: false,
			describe: 'Muestra la tabla de resultados',
		},
		h: {
			alias: 'hasta',
			type: 'number',
			default: 10,
			describe: 'Limite de la tabla de multiplicar',
		},
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw 'La base debe de ser un número';
		}
		if (isNaN(argv.h)) {
			throw 'Hasta debe de ser un número';
		} else {
			return true;
		}
	}).argv;

module.exports = argv;
